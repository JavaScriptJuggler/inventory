const { Product } = require("../models/Product")

const saveProduct = async (req, res) => {
    let product = Product(req.body);
    try {
        product.save();
        res.send({ status: 1, message: "product inserted successfully" });
    } catch (error) {
        res.send({ status: 0, message: error });
    }
}

module.exports = {
    saveProduct,
}