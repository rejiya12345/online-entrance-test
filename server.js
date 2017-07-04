
var config = require(__dirname + '/config/config');
var env = config.env;
var ports = {
    https: (env === "development") ? "8443" : "443",
    http_redirect: (env === "development") ? "8080" : "8080",
    http: (env === "development") ? "3010" : "80"
};

var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var methodOverride = require('method-override');
var expressSession = require('express-session');
var https = require('https');
var http = require('http');
var path = require('path');
var util = require('util');
var ejs = require('ejs');
var models = require('./models');

var admin=require('./routes/admin')
var user = require('./routes/users');
var guest = require('./routes/guests');

var logger = require('./utils/logger');


// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= //
// Create APP
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= //
var app = express();
app.set('view engine', 'ejs');
// app for redirecting non-https requests

app.locals.env = env;

var compression = require('compression');
app.use(compression()); //use compression

app.use('/public', express.static('public'));
app.use('/layouts', express.static('views/layouts'));
app.use('/assets', express.static('views/assets'));
app.use('/lib', express.static('lib'));
app.use('/dist', express.static('dist'));
app.use(cookieParser());
app.use(bodyParser.json({limit:'5mb'})); // support json encoded bodies
app.use(bodyParser.urlencoded({
    limit: '5mb',
    extended: true
})); // support encoded bodies

app.use(methodOverride());
app.use(expressSession({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));

app.use('/admin', admin);
app.use('/user', user);
app.use('/', guest);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= //
// CatchAll Routes
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= //
app.get('*', function(req, res, next) {
    var err = new Error();
    err.status = 404;
    err.url = req.url;
    next(err);
});

// Handle 404
app.use(function(err, req, res, next) {
    console.error(err);
    if (err.status == 404) {
        res.status(404);
        res.sendFile(__dirname + '/views/system/404.html');
    }
});

// Handle 500, Internal Server Error
app.use(function(err, req, res, next) {
    console.error(err);
    if (err.status == 500) {
        res.status(500, "Internal Server Error");
        res.sendFile(__dirname + '/views/system/500.html');
    }
});

// END [Routes] =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= //

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= //
// Create an HTTP/HTTPS service.
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= //
var httpserver = http.createServer(app).listen(ports.http, function() {
    var host = httpserver.address().address;
    var port = httpserver.address().port;
    logger.info('Server app listening at http://%s:%s', host, port);
});

