// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= //
// usersController
// This will contain routes related to editing of user profiles
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= //
var express = require('express');
var usersController = express.Router();
var config = require(__dirname + '/../config/config');
var env = config.env;
var baseDir = __dirname + "/../";
var models = require(baseDir + 'models');
var _ = require('underscore');
var request = require('request');
var logger = require('../utils/logger');
var util = require('util');

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= //
// Users First Invest Page
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= //
usersController.get('/demopage', function(req, res) {
     res.render('layouts/starter.ejs');
    var obj= {
    	name:"raj",
    	age:12
    };
    res.send(obj);
});


module.exports = usersController;