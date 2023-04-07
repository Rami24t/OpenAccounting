const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  contact: {
    phone: String,
    email: String,
    address: {
      line1: String,
      line2: String,
      city: String,
      state: String,
      zip: String,
      country: String
    }
  },
  notes: {
    type: String,
    maxlength: 500
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Vendor = mongoose.model('Vendor', vendorSchema);

module.exports = Vendor;

// In summary, the Vendor model is a more specialized version of the Contact model that is tailored specifically to vendors and their associated information.