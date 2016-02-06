'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RatesSchema = new Schema({
  disclaimer: String,
  rates: []
});

module.exports = mongoose.model('Rates', RatesSchema);
