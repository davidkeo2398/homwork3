var express = require('express');
var router = express.Router();
var categories = require('../categories.json')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render("categories", { categories })
});
router.get('/categories/:id', function (req, res, next) {
  const id = req.params.id;
  const newData = categories.filter(tmp => tmp.id == id);
  res.render("categoryDetail", newData[0])
});

module.exports = router;