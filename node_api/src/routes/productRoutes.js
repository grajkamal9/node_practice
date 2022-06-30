let express = require("express");
let productRoute = express.Router();

productRoute.route("/").get(function (req, res) {
  res.send("products found", 200);
});

productRoute.route("/details").get(function (req, res) {
  res.send("Welcome to product location");
});

productRoute.route("/category/:id").get(function (req, res) {
  let id = req.params.id;
  res.send("products for category" + id, 200);
});

module.exports = productRoute;
