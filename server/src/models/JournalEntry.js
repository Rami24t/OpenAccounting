import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema;

const journalEntrySchema = new Schema({
  date: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  journal: {
    type: Schema.Types.ObjectId,
    ref: 'Journal',
    required: true
  },
  entries: [
    {
      account: {
        type: Schema.Types.ObjectId,
        ref: 'Account',
        required: true
      },
      debit: {
        type: Number,
        required: true
      },
      credit: {
        type: Number,
        required: true
      }
    }
  ]
});

export default model('JournalEntry', journalEntrySchema);
