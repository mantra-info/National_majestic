import { Event } from "../models/Event.js";
import { Submission } from "../models/Submission.js";
import { Template } from "../models/Template.js";
import { generateCertificatePdf } from "../services/certificateService.js";
import { sendCertificateEmail } from "../services/emailService.js";
import { AppError } from "../utils/appError.js";
import { randomUUID } from "crypto";

export const listPublicEvents = async (_req, res) => {
  const events = await Event.find().sort({ date: 1 });
  res.json(events);
};

export const submitRegistration = async (req, res) => {
  const { name, email, eventId } = req.body;

  if (!name || !email || !eventId) {
    throw new AppError("name, email, and eventId are required", 400);
  }

  const event = await Event.findById(eventId);
  if (!event) {
    throw new AppError("Selected event not found", 404);
  }

  const template = await Template.findOne({ event: eventId });
  if (!template) {
    throw new AppError("No certificate template configured for this event", 400);
  }

  const submission = await Submission.create({
    name,
    email,
    event: eventId,
    certificateId: `pending-${randomUUID()}`
  });

  try {
    const { certificateId, certificatePath } = await generateCertificatePdf({
      templateHtml: template.html,
      attendeeName: name,
      eventName: event.eventName,
      eventDate: event.date,
      signaturePath: event.signaturePath
    });

    await sendCertificateEmail({
      to: email,
      name,
      eventName: event.eventName,
      certificatePath
    });

    submission.certificateId = certificateId;
    submission.certificatePath = certificatePath;
    submission.status = "sent";
    submission.sentAt = new Date();
    submission.lastError = "";
    await submission.save();
  } catch (error) {
    submission.status = "failed";
    submission.lastError = error.message;
    await submission.save();
    throw error;
  }

  res.status(201).json({
    message: "Submission received and certificate emailed successfully"
  });
};
