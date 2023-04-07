import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;

const payeeSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    address: {
      street: String,
      city: String,
      state: String,
      zip: String
    },
    phone: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    accountNumber: {
      type: String,
      required: true,
      unique: true
    },
    notes: String
  },
  { timestamps: true }
);

const Payee = model('Payee', payeeSchema);

export default Payee;
