const mongoose = require("mongoose");

const businessSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  business: {
    type: String,
  },
  name: {
    type: String,
  },
  statement: {
    type: String,
  },
  website: {
    type: String,
  },
  email: {
    type: String,
  },
  businessdesc: {
    type: String,
  },
  help: {
    type: String,
  },
  areasofhelp: [
    {
      webdev: {
        type: Boolean,
        required: true,
      },
      finance: {
        type: Boolean,
        required: true,
      },
      support: {
        type: Boolean,
        required: true,
      },
      organization: {
        type: Boolean,
        required: true,
      },
      analytics: {
        type: Boolean,
        required: true,
      },
      planning: {
        type: Boolean,
        required: true,
      },
      marketing: {
        type: Boolean,
        required: true,
      },
    },
  ],
});

module.exports = BusinessProfile = mongoose.model(
  "businessProfile",
  businessSchema
);
