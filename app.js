var express = require("express");
var path = require("path");

var app = express();
var routes = require("./routes");

app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "view"));
app.set("view engine", "ejs");


app.use(routes);

app.listen(app.get("port"), function() {
	console.log("Running on port:" +app.get("port"));
});

