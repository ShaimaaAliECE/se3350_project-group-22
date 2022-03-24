const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    require: true,
  },
  timeRequired: {
    type: Number,
    required: true,
  },
  checkCompletion: {
    type: Boolean,
    required: true,
  },
});

const User = mongoose.model("UserData", userSchema);

module.exports = User;
