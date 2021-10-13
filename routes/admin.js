var express = require('express');
var router = express.Router();
var products = require('../products.json')
var users = require('../users.json')
var categories = require('../categories.json')

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render("admin")
});
router.get('/admin/products', function (req, res, next) {
    var newProducts = products.map((product, index) => ({
        ...product,
        row: index + 1,
        ["price"]: product.price.toLocaleString(),
    }))
    // res.send(newProducts)
    res.render("productsAdmin", { newProducts })
});
router.get('/admin/products/:id', function (req, res, next) {
    const id = req.params.id;
    const newData = products.filter(tmp => tmp.id == id);
    res.render("productDetail", newData[0])
});
router.get('/admin/users', function (req, res, next) {
    var newUsers = users.map((user, index) => ({
        ...user,
        row: index + 1,
    }))
    res.render("usersAdmin", { newUsers })
});
router.get('/admin/users/:id', function (req, res, next) {
    const id = req.params.id;
    const newData = users.filter(tmp => tmp.id == id);
    res.render("userDetail", newData[0])
});
router.get('/admin/categories', function (req, res, next) {
    var newCategories = categories.map((category, index) => ({
        ...category,
        row: index + 1,
    }))
    res.render("categoriesAdmin", { newCategories })
});
router.get('/admin/categories/:id', function (req, res, next) {
    const id = req.params.id;
    const newData = categories.filter(tmp => tmp.id == id);
    res.render("categoryDetail", newData[0])
});


module.exports = router;