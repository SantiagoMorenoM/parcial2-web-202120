var express = require('express');
const { getProducts } = require('../controllers/product');

var router = express.Router();

/* GET products listing. Please establish connection with getProduct function from controllers/product.js  */
router.get('/', function (req, res, next) {
  const product= getProducts();
  res.json(product);
  console.log(product);
});

module.exports = router;
