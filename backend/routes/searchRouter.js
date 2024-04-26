const express = require("express");
const {
  searchLocation,
  myLocation,
  nearbyLocations,
} = require("../controllers/searchController");
const router = express.Router();

router.route("/myLocation").post(myLocation);
router.route("/nearbyPlaces").post(nearbyLocations);
router.route("/").post(searchLocation);

module.exports = router;
