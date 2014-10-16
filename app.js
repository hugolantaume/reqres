var express = require("express"),
	bodyParser = require("body-parser"),
	hbs = require("hbs"),
	path = require("path"),
	app = express(),
	port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(bodyParser.json());

app.set("views", __dirname + "/public");
app.set("view engine", "html");
app.engine("html", hbs.__express);
app.use(express.static(path.join(__dirname, "public")));

var routes = require("./routes/");

app.all("/api/*", [bodyParser(),
	function(req, res, next) {
		if (req.query && req.query.delay && !isNaN(req.query.delay)) {
			return setTimeout(next, req.query.delay * 1000);
		}
		return next();
	}
]);

app.get("/", function(req, res, next) {
	res.render("index.html");
});

app.get("/api/:resource/*", routes.get);

var server = app.listen(port, function() {

	var host = server.address().address,
		port = server.address().port;

	console.log("Example app listening at http://%s:%s", host, port);

});