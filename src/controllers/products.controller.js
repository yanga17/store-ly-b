const ProductsModel = require('../models/products.model');

exports.getProducts = (req, res) => {
  ProductsModel.getProducts((err, user) => {
    if (err) {
      user.message = "Failed";
      res.send(err);
      process.exit(1);
    }
    user.message = "Success";
    res.send(user);
  })
}

exports.addProduct = (req, res) => {
  ProductsModel.addProduct(req, (err, user) => {
    if (err) {
      user.message = "Add Product - Failed";
      res.send(err);
      process.exit(1);
    }
    user.message = "Add Product - Success";
    res.send(user);
  })
}