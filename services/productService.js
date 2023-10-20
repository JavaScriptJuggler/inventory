const { Product } = require("../models/Product");

/* add function */
async function addProducts(params) {
    let saveData = Product(params);
    try {
        await saveData.save();
        return 1;
    } catch (error) {
        return error;
    }
}

/* update function */
async function updateProduct(params) {

}

/* get function */
async function getProducts(params) {

}

/* delete function */
async function deleteProducts(params) {

}

module.exports = {
    addProducts,
    updateProduct,
    getProducts,
    deleteProducts,
}