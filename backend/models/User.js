const mongoose = require("mongoose");
const db = require("../db");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = db.model("user", UserSchema);
