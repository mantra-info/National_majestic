import { Router } from "express";
import {
  createEvent,
  getEvents,
  getSubmissions,
  resendCertificate,
  uploadSignature,
  uploadTemplate
} from "../controllers/adminController.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { upload } from "../middleware/upload.js";

const router = Router();

router.get("/events", asyncHandler(getEvents));
router.post("/events", asyncHandler(createEvent));
router.post(
  "/templates",
  upload.fields([
    { name: "template", maxCount: 1 },
    { name: "signature", maxCount: 1 }
  ]),
  asyncHandler(uploadTemplate)
);
router.post("/events/:eventId/signature", upload.single("signature"), asyncHandler(uploadSignature));
router.get("/submissions", asyncHandler(getSubmissions));
router.post("/resend", asyncHandler(resendCertificate));

export default router;
