const mongoose = require('mongoose');

const creditCardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cardNumber: {
    type: String,
    required: true,
  },
  expirationDate: {
    type: Date,
    required: true,
  },
  cvv: {
    type: String,
    required: true,
  },
  limit: {
    type: Number,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, { timestamps: true });

const CreditCard = mongoose.model('CreditCard', creditCardSchema);

module.exports = CreditCard;
