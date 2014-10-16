var express = require("express");
var app = express();

var port = process.env.PORT || 8080;

app.get("/", function(req, res) {
	res.send("Hello World!");
});

var server = app.listen(port, function() {

	var host = server.address().address,
		port = server.address().port;

	console.log("Example app listening at http://%s:%s", host, port);

});