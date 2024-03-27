const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  url: String,
  name: String,
});

module.exports = mongoose.model("Image", imageSchema);
