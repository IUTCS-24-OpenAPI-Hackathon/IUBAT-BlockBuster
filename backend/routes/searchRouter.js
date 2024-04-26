const express = require("express");
const {
  searchLocation,
  myLocation,
} = require("../controllers/searchController");
const router = express.Router();

router.route("/myLocation").post(myLocation);
router.route("/").post(searchLocation);

module.exports = router;
