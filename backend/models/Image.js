const mongoose = require("mongoose");
const db = require("../db");

const ImageSchema = new mongoose.Schema({
  url: String,
  name: String,
});

module.exports = db.model("image", ImageSchema);
