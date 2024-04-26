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
    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${Number(
      lat
    )}&lon=${Number(lon)}`
  );

  const location = await response.json();

  return res.send({
    status: true,
    myLocation: location,
  });
};

function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the earth in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180; // deg2rad below
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    0.5 -
    Math.cos(dLat) / 2 +
    (Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      (1 - Math.cos(dLon))) /
      2;

  return R * 2 * Math.asin(Math.sqrt(a));
}

module.exports.nearbyLocations = async (req, res) => {
  let { location, lat, lon, radius, filter } = req.body;

  if (!lat) {
    const encodedAddress = encodeURIComponent(`${location}`);
    let ans = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${encodedAddress}&format=json`
    );
    ans = await ans.json();

    console.log(ans);

    if (ans.length > 0) {
      lat = ans[0].lat;
      lon = ans[0].lon;
    }
  }

  const getPlaces = await fetch(
    `https://api.geoapify.com/v2/places?categories=${filter}&filter=circle:${Number(
      lon
    )},${Number(lat)},${Number(radius)}&bias=proximity:${Number(lon)},${Number(
      lat
    )}&limit=20&apiKey=${"07ca88d909324c73a34e34751ef5309c"}`
  );

  let places = await getPlaces.json();

  // console.log(places);

  if (places.features.length > 0) {
    return res.send({
      status: true,
      places: places,
      message: "OK",
    });
  } else {
    return res.send({
      status: false,
      places: [],
      message: "No Place Found",
    });
  }
};
