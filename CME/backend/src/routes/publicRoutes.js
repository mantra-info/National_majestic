import { Router } from "express";
import { listPublicEvents, submitRegistration } from "../controllers/publicController.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const router = Router();

router.get("/events", asyncHandler(listPublicEvents));
router.post("/submit", asyncHandler(submitRegistration));

export default router;
