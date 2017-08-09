// Requiring basic packages
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Set up the Express App
var app = express();
var PORT = process.env.PORT || 8080;

//Using BodyParser to interpret data

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Routing

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


//Listener

app.listen(PORT, function(){
	console.log("App listening on PORT: " + PORT);

});