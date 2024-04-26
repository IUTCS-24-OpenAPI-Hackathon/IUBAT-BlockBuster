const JWT = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

module.exports = async (req, res, next) => {
  let token = req.header("Authorization");

  if (!token) {
    return res.status(401).send("Access denied! No token provided");
  }
  else {
    console.log(token.split(" ")[1]);
    token = token.split(" ")[1].trim();
  }

  try {
    const decoded = JWT.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(400).send("Invalid Token");
  }
};
