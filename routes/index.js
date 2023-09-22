var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var users = [
    {
      email : 'andy@gmail.com',
      picture : 'somepicture',
      username : 'andy_123',
      price : 100
    },
    {
      email : 'luke@gmail.com',
      picture : 'somepicture',
      username : 'luke_skywalker',
      price : 500
    },
    {
      email : 'evylyn@gmail.com',
      picture : 'somepicture',
      username : 'evelyn_999',
      price : 100
    },
    {
      email : 'rose@gmail.com',
      picture : 'somepicture',
      username : 'rose_stalker',
      price : 300
    },
    {
      email : 'Mandy@gmail.com',
      picture : 'somepicture',
      username : 'Mandy_123',
      price : 100
    }

  ]
  res.json(users)
});

module.exports = router;
