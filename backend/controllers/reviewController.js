const Review = require("../models/review");

module.exports.getReviews = async (req, res) => {
  const id = req.params.id;

  const reviews = await Review.findOne({ place_id: id });

  return res.send(reviews);
};

module.exports.createReview = async (req, res) => {
  const review = new Review({ ...req.body, rating: Number(req.body.rating) });
  await review.save();

  return res.send({
    message: "Review submitted for review",
  });
};
