'use strict';

var express = require('express');
var router = express.Router();
var ratesController = require('../api/rates/rates.controller');
var transactionController = require('../api/transactions/transaction.controller')

/* GET home page. */
// router.get('/', function(req, res) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', ratesController.index);
router.get('/transaction', transactionController.index);
router.post('/transaction', transactionController.create);

module.exports = router;
