import fs from "fs";
import path from "path";
import { env } from "../config/env.js";

const ensureDir = (directory) => {
  fs.mkdirSync(directory, { recursive: true });
};

export const storageDirectories = {
  templates: path.join(env.storageRoot, "templates"),
  signatures: path.join(env.storageRoot, "signatures"),
  certificates: path.join(env.storageRoot, "certificates")
};

Object.values(storageDirectories).forEach(ensureDir);

export const moveUploadedFile = (file, destinationDir, nextFileName) => {
  ensureDir(destinationDir);
  const extension = path.extname(file.originalname || file.filename);
  const targetName = `${nextFileName}${extension}`;
  const targetPath = path.join(destinationDir, targetName);
  fs.renameSync(file.path, targetPath);
  return targetPath;
};

export const writeTextFile = (destinationDir, nextFileName, content) => {
  ensureDir(destinationDir);
  const targetPath = path.join(destinationDir, nextFileName);
  fs.writeFileSync(targetPath, content, "utf-8");
  return targetPath;
};

export const relativeStoragePath = (absolutePath) =>
  absolutePath.replace(`${env.storageRoot}${path.sep}`, "").replaceAll(path.sep, "/");
