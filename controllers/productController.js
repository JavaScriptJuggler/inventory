const { addProducts } = require("../services/productService")

/* add products */
async function saveProduct(req, res) {
    let params = req.body;
    let response = await addProducts(params);
    if (response)
        res.send("added successfully");
}


module.exports = {
    saveProduct,
}