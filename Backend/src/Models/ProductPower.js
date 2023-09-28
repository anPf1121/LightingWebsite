const mongoose = require("mongoose");

const productPowerSchema = new mongoose.Schema(
  {
    powerId: { type: Number, required: true },
    powerValue: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const ProductPower = mongoose.model("ProductPower", productPowerSchema);

module.exports = ProductPower;
