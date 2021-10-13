var express = require('express');
var router = express.Router();
var products = require('../products.json')

/* GET products listing. */
router.get('/', function (req, res, next) {
    var newProducts = products.map(product => ({
        ...product,
        ["price"]: product.price.toLocaleString(),
    }))
    // res.send(newProducts)
    res.render("products", { newProducts })
});

router.get('/products/:id', function (req, res, next) {
    const id = req.params.id
    const newData = products.filter(tmp => tmp.id === id)
    res.render("productDetail", {
        id: newData[0].id,
        name: newData[0].name,
        price: newData[0].price.toLocaleString(),
        category: newData[0].category,
        url: `/products/${id}`
    })
});

module.exports = router;