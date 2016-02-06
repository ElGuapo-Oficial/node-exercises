'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TransactionSchema = new Schema({
  date: Date,
  fromName: String,
  fromValue: Number,
  toName: String,
  toValue: Number,
  inputAmount: Number,
  outputAmount: Number
});

module.exports = mongoose.model('Transaction', TransactionSchema);
