var dbConn = require("../../config/db.config");

var Products = function (user) {
    this.idx = user.idx,
    this.Stockcode = user.Stockcode,
    this.Product_Description = user.Product_Description,
    this.Category = user. Drinks,
    this.DepNum = user.DepNum,
    this.SubNum = user.SubNum,
    this.Soh = user.Soh,
    this.VarPrc = user.VarPrc,
    this.VatPerc = user.VatPerc,
    this.Discount = user.Discount,
    this.ExclCost = user.ExclCost,
    this.Markup = user.Markup,
    this.GPPerc = user.GPPerc,
    this.ExclSell = user.ExclSell,
    this.ExclSell2 = user.ExclSell2,
    this.ExclSell3 = user.ExclSell3,
    this.Markup2 = user.Markup2,
    this.GPPerc2 = user.GPPerc2,
    this.Markup3 = user.Markup3,
    this.GPPerc3 = user.GPPerc3,
    this.IncSell = user.IncSell,
    this.IncSell2 = user.IncSell2,
    this.ROS = user.ROS,
    this.Discount_Expiry = user.Discount_Expiry,
    this.Client_ID = user.Client_ID,
    this.Product_Image = user.Product_Image

}; 

Products.getProducts = (result) => {
    dbConn.query('SELECT idx, Stockcode, Product_Description, Category, DepNum, SubNum, Soh, VarPrc, VatPerc, Discount, ExclCost, Markup, GPPerc, ExclSell, ExclSell2, ExclSell3, Markup2, GPPerc2, Markup3, GPPerc3, IncSell, IncSell2, ROS, Discount_Expiry, Special, Special_ExpiryDate, Client_ID, Product_Image FROM store_loyalty.tblproducts', (err, res) => {
        if (!(err === null)) {
            console.log('Error while getting all products ' + err);
            result(null, err);
        } else {
            result(null, res);
        }
    })
}

Products.setProductDiscount = (req, result) => {
    const { productID, discountName, discountValue, discountTier, startDate, endDate } = req.body;
    dbConn.query('INSERT INTO store_loyalty.tbldiscount(ProductID, DiscountName, DiscountValue, DiscountTier, StartDate, EndDate) VALUES(?, ?, ?, ?, ?, ?)', [productID, discountName, discountValue, discountTier, startDate, endDate], (err, res) => {
        if (err) {
            console.log('Error while adding the Products discount:' + err);
            result(err, null);
        } else {
            console.log('Adding the Products discount was successful:', res);
            result(null, res);
        }
    });
}

Products.getProductDiscounts = (result) => {
    dbConn.query('SELECT d.ProductID, d.DiscountName, d.StartDate, d.EndDate, d.DiscountValue, d.DiscountTier, p.ProductName, p.Price FROM store_loyalty.tbldiscount d JOIN store_loyalty.tblproduct p ON d.ProductID = p.ProductID', (err, res) => {
        if (!(err === null)) {
            console.log('Error while getting all products discounts' + err);
            result(null, err);
        } else {
            result(null, res);
        }
    })
}

//take button in loggedTickets table
Products.setProductSpecial = (req, result) => {
    const { productID, productCategory, special, specialType, startDate, expiryDate } = req.body;
    dbConn.query('INSERT INTO store_loyalty.tblspecials (productID, productCategory, special, specialType, startDate, expiryDate) VALUES(?, ?, ?, ?, ?, ?)', [productID, productCategory, special, specialType, startDate, expiryDate], (err, res) => {
        if (err) {
            console.log('Error while adding the Products special:' + err);
            result(err, null);
        } else {
            console.log('Adding the Products special was successful:', res);
            result(null, res);
        }
    });
}

Products.getProductSpecials = (result) => {
    dbConn.query('SELECT ps.ProductID, ps.SpecialName, ps.SpecialValue, ps.StartDate, ps.ExpiryDate, ps.IsActive, p.ProductName, p.Price FROM store_loyalty.tblproductspecial ps JOIN store_loyalty.tblproduct p ON ps.ProductID = p.ProductID', (err, res) => {
        if (!(err === null)) {
            console.log('Error while getting all products specials' + err);
            result(null, err);
        } else {
            result(null, res);
        }
    })
}

module.exports = Products;

