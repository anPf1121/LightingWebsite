const mongoose = require("mongoose");

const deliverySchema = new mongoose.Schema({
  address: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
  status: { type: Boolean, default: false }
});

const Delivery = mongoose.model("Delivery", deliverySchema);

module.exports = Delivery;
