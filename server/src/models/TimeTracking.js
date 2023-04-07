const mongoose = require("mongoose");

const timeTrackingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    task: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    startTime: {
      type: Date,
      required: true,
    },
    endTime: {
      type: Date,
      required: true,
    },
    hours: {
      type: Number,
      required: true,
    },
    billable: {
      type: Boolean,
      required: true,
      default: false,
    },
    billableRate: {
      type: Number,
      required: function () {
        return this.billable;
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TimeTracking", timeTrackingSchema);
