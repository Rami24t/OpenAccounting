import { Schema, model } from "mongoose";

const currencySchema = new Schema(
  {
    code: {
      type: String,
      required: true,
    },
    name: { type: String, required: true },
    exchangeRate: {
      type: Number,
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

const Currency = model("Currency", currencySchema);

export default Currency;
