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

exports.setProductDiscount = (req, res) => {
  ProductsModel.setProductDiscount(req, (err, user) => {
    if (err) {
      user.message = "Add Product - Failed";
      res.send(err);
      process.exit(1);
    }
    user.message = "Add Product - Success";
    res.send(user);
  })
}

exports.setProductSpecial = (req, res) => {
  ProductsModel.setProductSpecial(req, (err, user) => {
    if (err) {
      user.message = "Add Product Special - Failed";
      res.send(err);
      process.exit(1);
    }
    user.message = "Add Product Special - Success";
    res.send(user);
  })
}