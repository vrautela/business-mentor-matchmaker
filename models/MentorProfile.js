const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  name: {
    type: String,
  },
  website: {
    type: String,
  },
  email: {
    type: String,
  },
  mentordesc: {
    type: String,
  },
  areasofhelp: [
    {
      webdev: {
        type: String,
        required: true,
      },
      finance: {
        type: String,
        required: true,
      },
      support: {
        type: String,
        required: true,
      },
      organization: {
        type: String,
        required: true,
      },
      analytics: {
        type: String,
        required: true,
      },
      planning: {
        type: String,
        required: true,
      },
      marketing: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = MentorProfile = mongoose.model("mentorProfile", mentorSchema);
