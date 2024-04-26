const express = require("express");
const { createReview } = require("../controllers/reviewController");
const router = express.Router();

router.route("/create").post(createReview);

module.exports = router;
// localhost:4003/api/search/myLocation
