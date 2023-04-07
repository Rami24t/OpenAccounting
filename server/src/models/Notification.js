import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;

const notificationSchema = new Schema({
  message: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  read: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
  },
}, {
  timestamps: true,
});

const Notification = model('Notification', notificationSchema);

export default Notification;
