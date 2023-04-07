import { Schema, model } from "mongoose";

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    //   type: {
    //     type: String,
    //     enum: ['income', 'expense'],
    //     }
    transactions: [
      {
        type: Schema.Types.ObjectId,
        ref: "Transaction",
      },
    ],
    budget: {
      type: Schema.Types.ObjectId,
      ref: "Budget",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Category", categorySchema);
