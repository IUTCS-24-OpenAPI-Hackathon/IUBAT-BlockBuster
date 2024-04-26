const Review = require("../models/review");

module.exports.createReview = async (req, res) => {
  return res.send({
    message: "Review submitted for review",
  });
};
