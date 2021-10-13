var express = require('express');
var router = express.Router();
var users = require('../users.json')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render("users", { users })
});
router.get('/users/:id', function (req, res, next) {
  const id = req.params.id;
  const newData = users.filter(tmp => tmp.id == id);
  res.render("userDetail", newData[0])
});

module.exports = router;
