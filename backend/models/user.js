const { Schema, model } = require("mongoose");

const userSchema = Schema(
  {
    name: String,
    firebase_id: String,
    role: String,
  },
  { timestamps: true }
);

module.exports = model("User", userSchema);
