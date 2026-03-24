const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  // ===== PROFILE FIELDS =====
  avatar: {
    type: String,
    default: "",
  },

  bio: {
    type: String,
    default: "",
  },

  location: {
    type: String,
    default: "",
  },

  jobTitle: {
    type: String,
    default: "",
  },

  company: {
    type: String,
    default: "",
  },

  website: {
    type: String,
    default: "",
  },

  github: {
    type: String,
    default: "",
  },

  linkedin: {
    type: String,
    default: "",
  },

  twitter: {
    type: String,
    default: "",
  },

  skills: {
    type: [String],
    default: [],
  },

  isVerified: {
    type: Boolean,
    default: false,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("User", userSchema);
