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

  console.log(location);
  console.log(lat);

  if (!lat) {
    const encodedAddress = encodeURIComponent(`${location}`);
    let ans = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${encodedAddress}&format=json`
    );
    ans = await ans.json();

    if (ans.length > 0) {
      lat = ans[0].lat;
      lon = ans[0].lon;
    }
  }

  let places = {
    features: [],
  };
  if (Number(radius) === 0) {
    let iso = await fetch(
      `https://api.geoapify.com/v1/isoline?lat=${Number(lat)}&lon=${Number(
        lon
      )}&type=time&mode=drive&range=1800&apiKey=${"07ca88d909324c73a34e34751ef5309c"}`
    );

    iso = await iso.json();

    // https://api.geoapify.com/v2/places?categories=catering.restaurant&filter=geometry:c607702b710773eb5aa18fb50ae4621c&bias=proximity:91.9726761,21.443683&limit=20&apiKey=07ca88d909324c73a34e34751ef5309c

    const getPlaces = await fetch(
      `https://api.geoapify.com/v2/places?categories=${filter}&filter=geometry:${
        iso.properties.id
      }&
      bias=proximity:${Number(lon)},${Number(
        lat
      )}&limit=10&apiKey=${"07ca88d909324c73a34e34751ef5309c"}`
    );

    places = await getPlaces.json();
  } else {
    const getPlaces = await fetch(
      `https://api.geoapify.com/v2/places?categories=${filter}&filter=circle:${Number(
        lon
      )},${Number(lat)},${Number(radius)}&bias=proximity:${Number(
        lon
      )},${Number(lat)}&limit=10&apiKey=${"07ca88d909324c73a34e34751ef5309c"}`
    );

    places = await getPlaces.json();
  }

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

  if (details.features.length > 0) {
    let lon = details.features[0].properties.lon;
    let lat = details.features[0].properties.lat;

    let weather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${"130d0921ee7f62143f354d0641c28676"}`
    );
    weather = await weather.json();

    return res.send({
      status: true,
      details: details,
      weather: weather,
    });
  } else {
    return res.send({
      status: false,
    });
  }
};
