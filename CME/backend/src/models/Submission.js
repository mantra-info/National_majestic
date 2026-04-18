import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      required: true
    },
    certificateId: {
      type: String,
      required: true,
      unique: true
    },
    certificatePath: {
      type: String,
      default: ""
    },
    status: {
      type: String,
      enum: ["generated", "sent", "failed"],
      default: "generated"
    },
    sentAt: {
      type: Date,
      default: null
    },
    lastError: {
      type: String,
      default: ""
    }
  },
  {
    timestamps: true
  }
);

submissionSchema.index({ email: 1, event: 1 });
submissionSchema.index({ name: "text", email: "text" });

export const Submission = mongoose.model("Submission", submissionSchema);
