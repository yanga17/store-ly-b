const express = require('express');
const router = express.Router();

const ProductsController = require('../controllers/products.controller');

require('dotenv').config({ path: './configuration.env' });

router.get('/getproducts', ProductsController.getProducts);

router.post('/addproduct', ProductsController.addProduct);

module.exports = router;
