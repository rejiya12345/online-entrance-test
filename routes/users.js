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
usersController.get('/profile', function(req, res) {
	 
     return res.render('layouts/user/profile.ejs');
    
});


usersController.get('/profiledata', function(req, res) {

	console.log(req.body);
	 
    var profile_data = {
    	name : 'Abdul Vajid',
    	age: 27,
    	gender: 'male',
    	city : 'Bangalore',
    	email : 'alvajindia@gmail.com'
    };

    return res.send(profile_data);
    
});




module.exports = usersController;