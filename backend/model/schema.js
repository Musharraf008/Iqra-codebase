const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  fname: { type: String, required: true },
  class: { type: String, required: true },
  Gender: String,
  mobile: { type: Number, required: true },
  email: String,
  date: { type: String, required: true, },
  time: { type: String, required: true, },
});

const Students = mongoose.model("Student", studentSchema);

module.exports = Students;
