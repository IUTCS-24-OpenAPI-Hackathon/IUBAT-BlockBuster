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

  console.log(lat);

  const response = await fetch(
    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${Number(
      lat
    )}&lon=${Number(lon)}`
  );

  const location = await response.json();

  console.log(location);

  return res.send({
    status: true,
    myLocation: location,
  });
};

module.exports.nearbyLocations = async (req, res) => {
  let { location, lat, lon, radius } = req.body;

  if (!lat) {
    console.log(location);
    const encodedAddress = encodeURIComponent(`${location},${"india"}`);
    let ans = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${encodedAddress}&format=json`
    );
    ans = await ans.json();

    lat = ans[0].lat;
    lon = ans[0].lon;
  }

  //   Calculate bounding box
  const lat_min = Number(lat) - Number(radius) / 111.1;
  const lat_max = Number(lat) + Number(radius) / 111.1;
  const lon_min =
    Number(lon) - Number(radius) / (111.1 * Math.cos((lat * 3.14159) / 180));
  const lon_max =
    Number(lon) + Number(radius) / (111.1 * Math.cos((lat * 3.14159) / 180));

  const place_types = ["restaurant"];
  const query_params = place_types.join("|");

  const getPlaces = await fetch(
    `https://nominatim.openstreetmap.org/search?q=${query_params}&format=jsonv2&bounded=1&viewbox=${lon_min},${lat_min},${lon_max},${lat_max}`
  );

  const places = await getPlaces.json();

  return res.send({
    status: true,
    places: places,
  });
};
