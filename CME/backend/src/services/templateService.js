import fs from "fs";
import path from "path";
import { AppError } from "../utils/appError.js";
import { normalizePlaceholders } from "../utils/templatePlaceholders.js";
import { storageDirectories, moveUploadedFile, writeTextFile } from "./fileStorageService.js";

export const resolveTemplateInput = ({ html, templateFile, eventId }) => {
  let resolvedHtml = (html || "").trim();
  let storedFilePath = "";
  let originalFileName = "";

  if (templateFile) {
    storedFilePath = moveUploadedFile(templateFile, storageDirectories.templates, `template-${eventId}-${Date.now()}`);
    originalFileName = templateFile.originalname;
    resolvedHtml = fs.readFileSync(storedFilePath, "utf-8");
  }

  if (!resolvedHtml) {
    throw new AppError("Template HTML is required", 400);
  }

  if (!templateFile) {
    storedFilePath = writeTextFile(
      storageDirectories.templates,
      `template-${eventId}-${Date.now()}.html`,
      resolvedHtml
    );
    originalFileName = path.basename(storedFilePath);
  }

  return {
    html: resolvedHtml,
    placeholders: normalizePlaceholders(resolvedHtml),
    storedFilePath,
    originalFileName
  };
};
