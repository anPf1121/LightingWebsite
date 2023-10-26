const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderItems: [
    {
      quantity: { type: Number, required: true },
      productDetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ProductDetails",
        required: true,
      },
    },
  ],
  createdAt: { type: Date, required: true, default: Date.now },
  itemsPrice: { type: Number, required: true },
  taxPrice: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  status: { type: String, required: true },
  paidAt: { type: Date, required: true },
  deliveredAt: { type: Boolean, required: true }, 
  shippingAddress: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Delivery",
    required: true,
  }
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
