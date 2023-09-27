const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        address: { type: String, required: true },
        phone_number: { type: String, required: true },
        email: { type: String, required: true },
        facebook: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;