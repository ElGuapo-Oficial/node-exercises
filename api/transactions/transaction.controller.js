'use strict'

var Transaction = require('./transaction.model');

exports.index = function(req, res){
  console.log('getting transactions');
  Transaction.find(function (err, rates) {
    if(err) { return handleError(res, err); }

    return res.status(200).json(rates);
    // return res.render('index', { rates: rates });
    // return res.status(200).json(rates[0].rates.AED);
  });
};

exports.create = function(req, res){
  console.log('saving transactions');
  console.log(req.body);
  var transaction = new Transaction(req.body);
  transaction.save(function(err, transaction){
    if (err) return validationError(res, err);
    return res.status(200).send("done");
  });
};
