var express = require('express');

var controller = require('../controllers/product.controller.js')

var router = express.Router();

// --------/product-------
router.get('/', controller.index);

// --------/product/create-------
router.get('/create', controller.create);

// --------/product/create-post-------
router.post('/create', controller.postCreateProduct);

module.exports = router;