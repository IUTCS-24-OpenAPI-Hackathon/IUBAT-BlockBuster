const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");

dotenv.config();

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Connected to db");
  })
  .catch((err) => console.log(err));

// Middlewares
app.use(express.json());

app.use(cors());
app.use(morgan("dev"));

// Routers

// Base Route
app.get("/", (req, res) => {
  return res.send({ msg: "ok" });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
