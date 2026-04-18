import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    eventName: {
      type: String,
      required: true,
      trim: true
    },
    eventType: {
      type: String,
      required: true,
      trim: true
    },
    date: {
      type: Date,
      required: true
    },
    signaturePath: {
      type: String,
      default: ""
    },
    signatureOriginalName: {
      type: String,
      default: ""
    }
  },
  {
    timestamps: true
  }
);

export const Event = mongoose.model("Event", eventSchema);
