const User = require("../models/User");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  const { name, username, password } = req.body;
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await User.create({ name, username, password: hash });
    res.status(200).json({ name, username, _id: user._id });
  } catch (err) {
    res.status(400).json({ error: err.message });
    console.log(err);
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) throw Error("Invalid Username");
    const match = await bcrypt.compare(password, user.password);
    if (!match) throw Error("Invalid Username");
    res.status(200).json({ name: user.name, username, _id: user._id });
  } catch (err) {
    res.json({ error: err.message });
  }
};

module.exports = { signup, login };
