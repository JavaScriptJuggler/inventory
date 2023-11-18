const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    "product_name": { type: String, required: true },
    "sku": { type: String, required: true },
    "category": { type: String, required: true },
    "description": { type: String, required: true },
    "brand": { type: String, required: true },
    "supplier": { type: String, required: true },
    "cost_price": { type: Number, required: true },
    "selling_price": { type: Number, required: true },
    "quantity_on_hand": { type: Number, required: true },
    "reorder_level": { type: Number, required: true },
    "tax_information": { type: String, required: true },
    "unit_of_measure": { type: String, required: true },
    "location": { type: String, required: true },
    "expiry_date": { type: String, required: true },
    "weight": { type: String, required: true },
    "image": { type: String, required: true },
    "notes": { type: String, required: true },
    "status": { type: String, required: true },
});

const Product = mongoose.model("products", productSchema);
module.exports = {
    Product,
};
