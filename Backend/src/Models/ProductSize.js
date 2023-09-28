const mongoose = require("mongoose");

const productSizeSchema = new mongoose.Schema(
  {
    sizeId: { type: Number, required: true },
    sizeName: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const ProductSize = mongoose.model("ProductSize", productSizeSchema);

module.exports = ProductSize;
