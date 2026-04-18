import nodemailer from "nodemailer";
import { env } from "../config/env.js";
import { AppError } from "../utils/appError.js";

const transporter =
  env.smtp.host && env.smtp.user && env.smtp.pass
    ? nodemailer.createTransport({
        host: env.smtp.host,
        port: env.smtp.port,
        secure: env.smtp.secure,
        auth: {
          user: env.smtp.user,
          pass: env.smtp.pass
        }
      })
    : null;

export const sendCertificateEmail = async ({ to, name, eventName, certificatePath }) => {
  if (!transporter) {
    throw new AppError("SMTP credentials are not configured", 500);
  }

  await transporter.sendMail({
    from: env.smtp.from,
    to,
    subject: `Your CME Certificate for ${eventName}`,
    html: `
      <p>Dear ${name},</p>
      <p>Thank you for attending <strong>${eventName}</strong>. Your certificate is attached.</p>
      <p>Regards,<br />CME Certificates Team</p>
    `,
    attachments: [
      {
        filename: `${eventName.replace(/\s+/g, "-").toLowerCase()}-certificate.pdf`,
        path: certificatePath
      }
    ]
  });
};
