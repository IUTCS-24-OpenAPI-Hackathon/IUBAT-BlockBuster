const { Schema, model } = require("mongoose");

const reviewSchema = Schema(
  {
    place_id: String,
    review: Number,
    reviewed_by: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = model("Review", reviewSchema);
