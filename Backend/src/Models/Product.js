const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    product_id: { type: Number, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    product_type: { type: String, required: true },
    unit_price: { type: Number, required: true },
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

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
