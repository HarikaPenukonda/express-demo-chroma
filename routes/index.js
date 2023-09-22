var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = [1,2,3,4,5,6,7,8,9,10]
  res.render('index', { title: 'Express',data });
});

module.exports = router;
