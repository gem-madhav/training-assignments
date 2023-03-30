const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  gender: {
    required: true,
    type: String,
  },

  phone: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  category: {
    required: true,
    type: String,
  },
  technology: {
    required: true,
    type: Array,
  },
});

module.exports = mongoose.model("Record", recordSchema);
