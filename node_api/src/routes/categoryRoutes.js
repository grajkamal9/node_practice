let express = require("express");
let categoryRoute = express.Router();

categoryRoute.route("/").get(function (req, res) {
  res.send("products found", 200);
});

categoryRoute.route("/details").get(function (req, res) {
  res.send("Welcome to category details");
});

module.exports = categoryRoute;
