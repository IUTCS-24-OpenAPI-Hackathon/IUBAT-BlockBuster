const { Schema, model } = require("mongoose");

const reviewSchema = Schema(
  {
    place_id: String,
    review: String,
    rating: Number,
    // reviewed_by: { type: Schema.Types.ObjectId, ref: "User" },
    firebase_id: String,
    email: String,
  },
  { timestamps: true }
);

module.exports = model("Review", reviewSchema);
