const mongoose = require('mongoose');

const productAttributesSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  powerId: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductPower' },
  sizeId: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductSize' },
  colorId: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductColor' },
});

const ProductAttributes = mongoose.model('ProductAttributes', productAttributesSchema);

module.exports = ProductAttributes;