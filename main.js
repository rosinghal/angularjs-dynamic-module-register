var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
var path = require('path');

app.use('/scripts', express.static(path.join(__dirname,  '/scripts')));
app.use('/bower_components', express.static(path.join(__dirname,  '/bower_components')));

app.use(function(req, res, next) {
	res.header("X-Frame-Options", "SAMEORIGIN");
	res.header("X-Content-Type-Options", "nosniff");
	res.header("X-XSS-Protection", 1);
  	next();
});

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, function() {
  console.log('Node app is running on port', port);
});