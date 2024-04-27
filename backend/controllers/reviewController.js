const Review = require("../models/review");

module.exports.getReviews = async (req, res) => {
  const id = req.params.id;
  const lat = req.params.lat;
  const lon = req.params.lon;

  let data = await fetch(
    `https://api.foursquare.com/v3/places/search?ll=${Number(lat)},${Number(
      lon
    )}&limit=1`,
    {
      headers: {
        Authorization: "fsq3CZV//pwNOx630sPoPf7Nqzgs16PrQrenRgtsAKxvziI=",
      },
      method: "GET",
    }
  );
  data = await data.json();

  let fsq_id = "123";
  try {
    fsq_id = data.results[0].fsq_id;
  } catch (err) {}

  // https://api.foursquare.com/v3/places/5133c4bbe4b09cc36da0afd2/tips
  let getReviews = await fetch(
    `https://api.foursquare.com/v3/places/${fsq_id}/tips`,
    {
      headers: {
        Authorization: "fsq3CZV//pwNOx630sPoPf7Nqzgs16PrQrenRgtsAKxvziI=",
      },
      method: "GET",
    }
  );

  const oldReviews = await getReviews.json();

  const reviews = await Review.find({ place_id: id });

  return res.send({ reviews: reviews, oldReviews: oldReviews });
};

module.exports.createReview = async (req, res) => {
  const review = new Review({ ...req.body, rating: Number(req.body.rating) });
  await review.save();

  return res.send({
    status: true,
    message: "Review submitted for review",
  });
};
