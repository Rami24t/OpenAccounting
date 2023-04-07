import { Schema, model } from "mongoose";

const accountSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      required: true,
      enum: ["checking", "savings", "credit", "cash", "investment"],
      default: "checking",
    },
    accountCategory: {
        type: String,
        required: true,
        enum: ['asset', 'liability', 'equity', 'revenue', 'expense'],
      },
    number: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    currentBalance: {
      type: Number,
      default: 0,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    transactions: [
      {
        type: Schema.Types.ObjectId,
        ref: "Transaction",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Account = model("Account", accountSchema);

export default Account;
