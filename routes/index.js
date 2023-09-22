var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let data = {}
  data.arr = [1,2,3,4,5,6,7,8,9,10]
  data.users = [
    {name : 'andy',age:22},
    {name : 'john',age:45},
    {name : 'bob', age:50}
  ]
  res.json(data)
});

module.exports = router;
