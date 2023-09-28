const mongoose = require("mongoose");

const productColorSchema = new mongoose.Schema(
  {
    colorId: { type: Number, required: true },
    colorName: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const ProductColor = mongoose.model("ProductColor", productColorSchema);

module.exports = ProductColor;
