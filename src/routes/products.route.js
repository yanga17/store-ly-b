const express = require('express');
const router = express.Router();

const ProductsController = require('../controllers/products.controller');

require('dotenv').config({ path: './configuration.env' }); 

router.get('/getproducts', ProductsController.getProducts); 

router.post('/setproductdiscount', ProductsController.setProductDiscount);
router.get('/getproductdiscounts', ProductsController.getProductDiscounts);

router.post('/setproductspecial', ProductsController.setProductSpecial);
router.get('/getproductspecials', ProductsController.getProductSpecials);

module.exports = router;