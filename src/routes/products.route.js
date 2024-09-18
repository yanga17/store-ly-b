const express = require('express');
const router = express.Router();

const ProductsController = require('../controllers/products.controller');

require('dotenv').config({ path: './configuration.env' });

router.get('/getproducts', ProductsController.getProducts);

module.exports = router;