import mongoose from "mongoose";

const templateSchema = new mongoose.Schema(
  {
    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      required: true,
      unique: true
    },
    html: {
      type: String,
      required: true
    },
    placeholders: {
      type: [String],
      default: []
    },
    storedFilePath: {
      type: String,
      default: ""
    },
    originalFileName: {
      type: String,
      default: ""
    }
  },
  {
    timestamps: true
  }
);

export const Template = mongoose.model("Template", templateSchema);
