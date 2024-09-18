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
    dbConn.query('UPDATE store_loyalty.tblproducts SET VatPerc = ?, Discount_Expiry = ? WHERE idx = ?', [req.params.vatPerc, req.params.expiryDate, req.params.idx], (err, res) => {
        if (err) {
            console.log('Error while updating the Products Discount value' + err);
            result(null, err);
        } else {
            console.log('Updated the Products discount value Successfully:', res);
            result(null, res);
        }
    });
}

Products.setProductSpecial = (req, result) => {
    dbConn.query('UPDATE store_loyalty.tblproducts SET Special = ?, Special_ExpiryDate = ? WHERE idx = 1', [req.params.special, req.params.expirydate, req.params.idx], (err, res) => {
        if (err) {
            console.log('Error while updating the Products Discount value' + err);
            result(null, err);
        } else {
            console.log('Updated the Products discount value Successfully:', res);
            result(null, res);
        }
    });
}

module.exports = Products;

