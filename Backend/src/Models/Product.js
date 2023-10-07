const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    product_type: { type: String, required: true },
    descriptions: { type: String, required: false },
    protection_rating: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const productColorSchema = new mongoose.Schema(
  {
    colorName: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const productPowerSchema = new mongoose.Schema(
  {
    powerValue: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const productSizeSchema = new mongoose.Schema(
  {
    sizeName: { type: String },
  },
  {
    timestamps: true,
  }
);

const productDetailsSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  power: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductPower' }, // công suất
  size: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductSize' },
  color: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductColor' },
  voltage: { type: String, required: true }, // điện áp
  CRI: { type: String, required: true }, // chỉ số hoàn màu
  dimension: { type: String, required: true }, // kích thước
  hole_dimension: { type: String, required: false }, // kích thước lỗ khoét >
  chip_led: { type: String, required: false }, // >
  projection_angle: { type: String, required: false }, // góc chiếu >
  lumens_color_temperature: { type: String, required: true }, // nhiệt độ màu
  warranty: { type: String, required: true }, 
  luminous_flux: { type: String, required: true }, // quang thông
  countInStock: { type: Number, required: true },
  unit_price: { type: Number, required: true },
});

const ProductColor = mongoose.model("ProductColor", productColorSchema);
const ProductPower = mongoose.model("ProductPower", productPowerSchema);
const ProductSize = mongoose.model("ProductSize", productSizeSchema);
const ProductDetails = mongoose.model('ProductDetails', productDetailsSchema);
const Product = mongoose.model("Product", productSchema);

module.exports = {
  Product,
  ProductColor,
  ProductDetails,
  ProductPower,
  ProductSize
};