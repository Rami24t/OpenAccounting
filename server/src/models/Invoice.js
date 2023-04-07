import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;

const invoiceSchema = new Schema({
  invoiceNumber: {
    type: String,
    required: true,
    unique: true
  },
  invoiceDate: {
    type: Date,
    required: true
  },
  dueDate: {
    type: Date,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['Pending', 'Paid', 'Overdue'],
    default: 'Pending'
  },
  notes: {
    type: String,
    default: ''
  },
  payee: {
    type: Schema.Types.ObjectId,
    ref: 'Payee',
    required: true
  }
});

const Invoice = model('Invoice', invoiceSchema);

export default Invoice;
