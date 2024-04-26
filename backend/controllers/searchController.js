const _ = require("lodash");

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
