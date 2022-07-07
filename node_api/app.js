let express = require("express");
let app = express();
let port = 9000;
let productRoutes = require("./src/routes/productRoutes");


//middleware
// Static File Path
app.use(express.static(__dirname+'/public'));
// html file path
app.set('views','./src/views');
// view engine name
app.set('view engine','ejs')

app.use("/products", productRoutes);

app.get("/", function (req, res) {
  res.render("index");
});

app.listen(port, function () {
  console.log("listening on port 9000");
});
