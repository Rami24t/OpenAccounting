import { Schema, model } from 'mongoose';

const transactionSchema = new Schema({
  type: {
    type: String,
    required: true,
    enum: ['income', 'expense', 'transfer'],
  },
  amount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  account: {
    type: Schema.Types.ObjectId,
    ref: 'Account',
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
  },
  payee: {
    type: Schema.Types.ObjectId,
    ref: 'Payee',
  },
  invoice: {
    type: Schema.Types.ObjectId,
    ref: 'Invoice',
  }
}
, { timestamps: true }
);

const Transaction = model('Transaction', transactionSchema);

export default Transaction;
