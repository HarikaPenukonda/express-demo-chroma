var express = require('express');
var router = express.Router();
var {topDealUsers}= require("../data");

/* GET users listing. */
router.get('/top-deal-users', function(req, res, next) {
  //res.json({message : 'respond with a resource'});
  res.json({topDealUsers})
});

module.exports = router;
