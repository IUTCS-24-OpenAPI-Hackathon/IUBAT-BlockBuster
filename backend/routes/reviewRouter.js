const express = require("express");
const { createReview, getReviews } = require("../controllers/reviewController");
const router = express.Router();

router.route("/create").post(createReview);
router.route("/:id").get(getReviews);

module.exports = router;
// localhost:4003/api/search/myLocation
