const _ = require("lodash");
const axios = require("axios");

module.exports.searchLocation = async (req, res) => {
  const { location, radius } = req.body;

  return res.send({
    status: true,
  });
};

module.exports.myLocation = async (req, res) => {
  const { lat, lon } = req.body;

  const response = await fetch(
    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
  );

  const location = await response.json();

  return res.send({
    status: true,
    myLocation: _.pick(location, ["address.town"]),
  });
};

module.exports.nearbyLocations = async (req, res) => {
  const { lat, lon, radius } = req.body;

  //   Calculate bounding box
  const lat_min = lat - radius / 111.1;
  const lat_max = lat + radius / 111.1;
  const lon_min = lon - radius / (111.1 * Math.cos((lat * 3.14159) / 180));
  const lon_max = lon + radius / (111.1 * Math.cos((lat * 3.14159) / 180));

  const place_types = ["hotel"];
  const query_params = place_types.join("|");

  console.log(query_params);

  const getPlaces = await fetch(
    `https://nominatim.openstreetmap.org/search?q=${query_params}&format=jsonv2&bounded=1&viewbox=${lon_min},${lat_min},${lon_max},${lat_max}`
  );

  const places = await getPlaces.json();

  return res.send({
    status: true,
    places: places,
  });
};
