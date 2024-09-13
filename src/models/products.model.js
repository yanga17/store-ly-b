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
    dbConn.query('SELECT idx, Stockcode, Product_Description, Category, DepNum, SubNum, Soh, VarPrc, VatPerc, Discount, ExclCost, Markup, GPPerc, ExclSell, ExclSell2, ExclSell3, Markup2, GPPerc2, Markup3, GPPerc3, IncSell, IncSell2, ROS, Discount_Expiry, Client_ID, Product_Image FROM store_loyalty.tblproducts', (err, res) => {
        if (!(err === null)) {
            console.log('Error while getting user data: ' + err);
            result(null, err);
        } else {
            result(null, res);
        }
    })
}

Products.addProduct = (req, result) => {
    const { productDescription, category, stockcode, soh, discount, discountExpiry, exclCost, exclSell, incSell } = req.body;
    dbConn.query('INSERT INTO store_loyalty.tblproducts(Product_Description, Category, Stockcode, Soh, Discount, Discount_Expiry, ExclCost, ExclSell, IncSell) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', [productDescription, category, stockcode, soh, discount, discountExpiry, exclCost, exclSell, incSell], (err, res) => {
        if (err) {
            console.log('Error while inserting a New Product:' + err);
            result(null, err);
        } else {
            console.log('New Product has been added Successfully:', res);
            result(null, res);
        }
    });
}

module.exports = Products;

