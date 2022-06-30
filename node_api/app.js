let express = require("express");
let app = express();
let port = 9000;
let productRoutes = require("./src/routes/productRoutes");

app.use("/products", productRoutes);

app.listen(port, function () {
  console.log("listening on port 9000");
});
