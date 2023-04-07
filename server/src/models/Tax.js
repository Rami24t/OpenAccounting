import { Schema, model } from "mongoose";

const taxSchema = new Schema({
  rate: {
    type: Number,
  },
  type: {
    type: String,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: { type: String, required: true },
  description: {
    type: String,
    default: "",
  },
});

const Tax = model("Tax", taxSchema);

export default Tax;
