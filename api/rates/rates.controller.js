'use strict'

var Rates = require('./rates.model');
var request = require('request');

  exports.index = function(req, res){
    console.log('getting rates thru Restful API ');
    request("https://openexchangerates.org/api/latest.json?app_id=8597da0361284208b63d937ad1521b36", function(error, response, body) {
      return res.status(200).json(body);
    });
  };
