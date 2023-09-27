const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        image: { type: String, required: true },
        product_type: { type: String, required: true },
        unit_price: { type: Number, required: true },
        quantity: { type: Number, required: true },
        description: { type: String, required: true }
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;