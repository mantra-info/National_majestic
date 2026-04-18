import { Event } from "../models/Event.js";
import { Submission } from "../models/Submission.js";
import { Template } from "../models/Template.js";
import { generateCertificatePdf } from "../services/certificateService.js";
import { sendCertificateEmail } from "../services/emailService.js";
import { moveUploadedFile, relativeStoragePath, storageDirectories } from "../services/fileStorageService.js";
import { resolveTemplateInput } from "../services/templateService.js";
import { AppError } from "../utils/appError.js";

export const getEvents = async (_req, res) => {
  const events = await Event.find().sort({ date: -1 });
  res.json(events);
};

export const createEvent = async (req, res) => {
  const { eventName, eventType, date } = req.body;

  if (!eventName || !eventType || !date) {
    throw new AppError("eventName, eventType, and date are required", 400);
  }

  const event = await Event.create({ eventName, eventType, date });
  res.status(201).json(event);
};

export const uploadTemplate = async (req, res) => {
  const { eventId, html } = req.body;
  const templateFile = req.files?.template?.[0];
  const signatureFile = req.files?.signature?.[0];

  const event = await Event.findById(eventId);
  if (!event) {
    throw new AppError("Event not found", 404);
  }

  const templatePayload = resolveTemplateInput({
    html,
    templateFile,
    eventId
  });

  const template = await Template.findOneAndUpdate(
    { event: eventId },
    {
      event: eventId,
      ...templatePayload
    },
    {
      new: true,
      upsert: true
    }
  );

  if (signatureFile) {
    const signaturePath = moveUploadedFile(
      signatureFile,
      storageDirectories.signatures,
      `signature-${eventId}-${Date.now()}`
    );

    event.signaturePath = signaturePath;
    event.signatureOriginalName = signatureFile.originalname;
    await event.save();
  }

  res.status(201).json({
    message: "Template saved successfully",
    template,
    event
  });
};

export const uploadSignature = async (req, res) => {
  const { eventId } = req.params;
  const signatureFile = req.file;

  if (!signatureFile) {
    throw new AppError("Signature file is required", 400);
  }

  const event = await Event.findById(eventId);
  if (!event) {
    throw new AppError("Event not found", 404);
  }

  const signaturePath = moveUploadedFile(
    signatureFile,
    storageDirectories.signatures,
    `signature-${eventId}-${Date.now()}`
  );

  event.signaturePath = signaturePath;
  event.signatureOriginalName = signatureFile.originalname;
  await event.save();

  res.status(201).json({
    message: "Signature uploaded successfully",
    event
  });
};

export const getSubmissions = async (req, res) => {
  const { event, search } = req.query;
  const filters = {};

  if (event) {
    filters.event = event;
  }

  if (search) {
    filters.$or = [
      { name: { $regex: search, $options: "i" } },
      { email: { $regex: search, $options: "i" } }
    ];
  }

  const submissions = await Submission.find(filters)
    .populate("event")
    .sort({ createdAt: -1 });

  res.json(
    submissions.map((submission) => ({
      ...submission.toObject(),
      certificateUrl: submission.certificatePath
        ? `${req.protocol}://${req.get("host")}/storage/${relativeStoragePath(submission.certificatePath)}`
        : ""
    }))
  );
};

export const resendCertificate = async (req, res) => {
  const { submissionId } = req.body;
  const submission = await Submission.findById(submissionId).populate("event");

  if (!submission) {
    throw new AppError("Submission not found", 404);
  }

  if (!submission.certificatePath) {
    const template = await Template.findOne({ event: submission.event._id });

    if (!template) {
      throw new AppError("Template not found for event", 404);
    }

    const generated = await generateCertificatePdf({
      templateHtml: template.html,
      attendeeName: submission.name,
      eventName: submission.event.eventName,
      eventDate: submission.event.date,
      signaturePath: submission.event.signaturePath
    });

    submission.certificateId = generated.certificateId;
    submission.certificatePath = generated.certificatePath;
  }

  await sendCertificateEmail({
    to: submission.email,
    name: submission.name,
    eventName: submission.event.eventName,
    certificatePath: submission.certificatePath
  });

  submission.status = "sent";
  submission.sentAt = new Date();
  submission.lastError = "";
  await submission.save();

  res.json({
    message: "Certificate resent successfully"
  });
};
