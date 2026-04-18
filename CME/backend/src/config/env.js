import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "../../");

const toBool = (value, fallback = false) => {
  if (value === undefined) {
    return fallback;
  }

  return String(value).toLowerCase() === "true";
};

export const env = {
  port: Number(process.env.PORT || 5000),
  mongoUri: process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/cme-certificates",
  frontendUrl: process.env.FRONTEND_URL || "http://localhost:5173",
  appBaseUrl: process.env.APP_BASE_URL || "http://localhost:5000",
  storageRoot: path.join(rootDir, "storage"),
  smtp: {
    host: process.env.SMTP_HOST || "",
    port: Number(process.env.SMTP_PORT || 587),
    secure: toBool(process.env.SMTP_SECURE, false),
    user: process.env.SMTP_USER || "",
    pass: process.env.SMTP_PASS || "",
    from: process.env.MAIL_FROM || "CME Certificates <noreply@example.com>"
  },
  puppeteerExecutablePath: process.env.PUPPETEER_EXECUTABLE_PATH || ""
};
