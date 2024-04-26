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

module.exports.getDetails = async (req, res) => {
  const id = req.params.id;

  let details = await fetch(
    `https://api.geoapify.com/v2/place-details?id=${id}&apiKey=${"07ca88d909324c73a34e34751ef5309c"}`
  );
  details = await details.json();

  return res.send({
    status: true,
    details: details,
  });
};
