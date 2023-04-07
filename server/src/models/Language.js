import { Schema, model } from "mongoose";

const languageSchema = new Schema(
  {
    code: { type: String, required: true },
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Language = model("Language", languageSchema);

export default Language;
