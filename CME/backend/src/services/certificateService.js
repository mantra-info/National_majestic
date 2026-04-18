import fs from "fs";
import path from "path";
import puppeteer from "puppeteer";
import { v4 as uuidv4 } from "uuid";
import { env } from "../config/env.js";
import { AppError } from "../utils/appError.js";
import { escapeHtml } from "../utils/templatePlaceholders.js";
import { storageDirectories } from "./fileStorageService.js";

const browserLaunchOptions = () => ({
  headless: true,
  ...(env.puppeteerExecutablePath ? { executablePath: env.puppeteerExecutablePath } : {})
});

const formatDate = (value) =>
  new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(new Date(value));

const injectValues = (html, values) => {
  let compiled = html;

  Object.entries(values).forEach(([key, value]) => {
    compiled = compiled.replaceAll(key, escapeHtml(value));
  });

  return compiled;
};

const appendSignature = (html, signatureAbsolutePath) => {
  if (!signatureAbsolutePath || !fs.existsSync(signatureAbsolutePath)) {
    return html;
  }

  const extension = path.extname(signatureAbsolutePath).slice(1) || "png";
  const encoded = fs.readFileSync(signatureAbsolutePath).toString("base64");
  const signatureTag = `
    <div style="margin-top:32px;text-align:right;">
      <img src="data:image/${extension};base64,${encoded}" alt="Signature" style="max-height:90px;max-width:220px;object-fit:contain;" />
    </div>
  `;

  if (html.includes("</body>")) {
    return html.replace("</body>", `${signatureTag}</body>`);
  }

  return `${html}${signatureTag}`;
};

export const generateCertificatePdf = async ({ templateHtml, attendeeName, eventName, eventDate, signaturePath }) => {
  if (!templateHtml) {
    throw new AppError("Certificate template was not found", 404);
  }

  const certificateId = uuidv4();
  const populatedHtml = injectValues(templateHtml, {
    "{{NAME}}": attendeeName,
    "{{EVENT}}": eventName,
    "{{DATE}}": formatDate(eventDate),
    "{{CERT_ID}}": certificateId
  });
  const finalHtml = appendSignature(populatedHtml, signaturePath);
  const targetPath = path.join(storageDirectories.certificates, `${certificateId}.pdf`);

  const browser = await puppeteer.launch(browserLaunchOptions());

  try {
    const page = await browser.newPage();
    await page.setContent(finalHtml, { waitUntil: "networkidle0" });
    await page.pdf({
      path: targetPath,
      format: "A4",
      printBackground: true,
      margin: {
        top: "20px",
        right: "20px",
        bottom: "20px",
        left: "20px"
      }
    });
  } finally {
    await browser.close();
  }

  return {
    certificateId,
    certificatePath: targetPath
  };
};
