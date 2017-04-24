// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

// MongoDB
//mongoose.connect('mongodb://localhost/ndl');

// Express
var app = express();

// View Engine
app.set("views", __dirname + "/views");
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from ./public folder
app.use(express.static(path.join(__dirname, 'public')));

// Routess
	
	//EJS Routes
	app.get('/', function (req, res) {
	  res.redirect('https://www.facebook.com/ndlpsu/');
	});

	//EJS Routes
	app.get('/watson', function (req, res) {
	  res.render("watson.ejs");
	});

	app.get('/legacy', function (req, res) {
	  res.render("index.ejs");
	});

// Start server
app.listen(80);
console.log('API is running on port 80');
