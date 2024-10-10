const express = require('express');
const router = express.Router();

const ProductsController = require('../controllers/products.controller');

require('dotenv').config({ path: './configuration.env' }); 

router.get('/getproducts', ProductsController.getProducts); 

router.post('/setproductspecial', ProductsController.setProductSpecial);
router.get('/getproductspecials', ProductsController.getProductSpecials);

router.post('/setproductgpspecial', ProductsController.setProductGroupSpecial);
router.get('/getproductgpspecials', ProductsController.getProductGroupSpecials);

module.exports = router;