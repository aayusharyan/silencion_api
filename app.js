var express = require("express");
var bodyParser = require("body-parser");
var app = express();


exports.variable = "string";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var routes = require("./routes/routes.js")(app);

var server = app.listen(80, function () {
    console.log("Listening on port %s...", server.address().port);
});