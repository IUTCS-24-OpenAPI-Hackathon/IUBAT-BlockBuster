const express = require("express");
const {
  searchLocation,
  myLocation,
  nearbyLocations,
  getDetails,
} = require("../controllers/searchController");
const router = express.Router();

router.route("/myLocation").post(myLocation);
router.route("/nearbyPlaces").post(nearbyLocations);
router.route("/").post(searchLocation);

router.route("/:id").get(getDetails);

module.exports = router;
// localhost:4003/api/search/myLocation
