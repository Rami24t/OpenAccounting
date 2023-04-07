const mongoose = require('mongoose');

const estimateSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Contact',
    required: true
  },
  estimateNumber: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  expirationDate: {
    type: Date,
    required: true
  },
  items: [
    {
      description: {
        type: String,
        required: true
      },
      quantity: {
        type: Number,
        required: true
      },
      rate: {
        type: Number,
        required: true
      },
      tax: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tax'
      }
    }
  ],
  subtotal: {
    type: Number,
    required: true
  },
  taxes: [
    {
      tax: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tax'
      },
      amount: {
        type: Number,
        required: true
      }
    }
  ],
  total: {
    type: Number,
    required: true
  },
  notes: {
    type: String
  },
  status: {
    type: String,
    enum: ['draft', 'sent', 'viewed', 'accepted', 'rejected'],
    required: true
  },
  invoice: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Invoice'
  }
}, { timestamps: true });

const Estimate = mongoose.model('Estimate', estimateSchema);

module.exports = Estimate;
