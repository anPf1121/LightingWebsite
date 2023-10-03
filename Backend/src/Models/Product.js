const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    product_id: { type: Number, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    product_type: { type: String, required: true },
    descriptions: { type: String, required: true },
    type: { type: String, required: true },
    voltage: { type: Number, required: true },
    protection_rating: { type: String, required: true },
    luminous_flux: { type: String, required: true },
    warranty: { type: String, required: true },
    CRI: { type: String, required: true },
    dimension: { type: String, required: true },
    lumens_color_temperature: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const productColorSchema = new mongoose.Schema(
  {
    colorId: { type: Number, required: true },
    colorName: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const productPowerSchema = new mongoose.Schema(
  {
    powerId: { type: Number, required: true },
    powerValue: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const productSizeSchema = new mongoose.Schema(
  {
    sizeId: { type: Number, required: true },
    sizeName: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);


const productDetailsSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  powerId: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductPower', required: true },
  sizeId: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductSize', required: true },
  colorId: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductColor', required: true },
  countInStock: { type: Number, required: true },
  unit_price: { type: Number, required: true }
});


const Product = mongoose.model("Product", productSchema);
const ProductColor = mongoose.model("ProductColor", productColorSchema);
const ProductPower = mongoose.model("ProductPower", productPowerSchema);
const ProductSize = mongoose.model("ProductSize", productSizeSchema);
const ProductDetails = mongoose.model('ProductDetails', productDetailsSchema);

module.exports = {
  Product,
  ProductColor,
  ProductDetails,
  ProductPower,
  ProductSize
};