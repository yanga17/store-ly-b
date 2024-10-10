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

exports.setProductSpecial = (req, res) => {
  ProductsModel.setProductSpecial(req, (err, user) => {
    if (err) {
      user.message = "Add Product - Failed";
      res.send(err);
      process.exit(1);
    }
    user.message = "Add Product - Success";
    res.send(user);
  })
}

exports.getProductSpecials = (req, res) => {
  ProductsModel.getProductSpecials((err, user) => {
    if (err) {
      user.message = "Failed";
      res.send(err);
      process.exit(1);
    }
    user.message = "Success";
    res.send(user);
  })
}

exports.setProductGroupSpecial = (req, res) => {
  ProductsModel.setProductGroupSpecial(req, (err, employee) => {
    if (err) {
      employee.message = "Failed";
      res.send(err);
      process.exit(1);
    }
    employee.message = "Success";
    res.send(employee);
  })
}

exports.getProductGroupSpecials = (req, res) => {
  ProductsModel.getProductGroupSpecials((err, user) => {
    if (err) {
      user.message = "Failed";
      res.send(err);
      process.exit(1);
    }
    user.message = "Success";
    res.send(user);
  })
}