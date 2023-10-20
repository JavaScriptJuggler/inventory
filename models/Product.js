const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    "product_id": String,
    "product_name": String,
    "product_category": Number,
    "product_image": String,
    "manufacturer": String,
    "price": Number,
    "stock": Number,
    "minimun_stock": Number,
    "max_stock": Number,
    "unit": String,
    "weight": String,
    "dimensions": String,
    "supplier_information": String,
    "date_added": {
        "type": Date,
        "default": Date.now
    },
    "date_updated": {
        "type": Date,
        "default": Date.now
    },
    "tax": String,
    "discount": Number,
})

// Middleware to automatically update `date_updated` on document update
productSchema.pre('updateOne', function (next) {
    this.update({}, { $set: { date_updated: new Date() } });
    next();
});
const Product = mongoose.model("products", productSchema);
module.exports = {
    Product,
}