import { Schema, model } from 'mongoose';

const contactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  accounts: [{
    type: Schema.Types.ObjectId,
    ref: 'Account',
  }],
}, {
  timestamps: true,
});

const Contact = model('Contact', contactSchema);

export default Contact;