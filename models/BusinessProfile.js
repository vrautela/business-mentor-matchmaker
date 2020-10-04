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
      },
      finance: {
        type: Boolean,
      },
      support: {
        type: Boolean,
      },
      organization: {
        type: Boolean,
      },
      analytics: {
        type: Boolean,
      },
      planning: {
        type: Boolean,
      },
      marketing: {
        type: Boolean,
      },
    },
  ],
});

module.exports = BusinessProfile = mongoose.model(
  "businessProfile",
  businessSchema
);
