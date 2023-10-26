const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: [{ type: String, required: true }],
    product_type: { type: String, required: true },
    descriptions: { type: String, required: false, default: "" },
    protection_rating: { type: Number, required: true, default: "0" },
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

const productCollectionSchema = new mongoose.Schema(
  {
    collectionImage: { type: String },
    collectionName: { type: String },
    collectionDescription: { type: String },
  },
  {
    timestamps: true,
  }
)

const productDetailsSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }, // changed
  power: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductPower', required: false }, // công suất
  size: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductSize', required: false },
  color: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductColor', required: false },
  inCollection: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductCollection', required: false },
  voltage: { type: String, required: false }, // điện áp
  CRI: { type: String, required: false }, // chỉ số hoàn màu
  dimension: { type: String, required: false }, // kích thước
  hole_dimension: { type: String, required: false }, // kích thước lỗ khoét >
  chip_led: { type: String, required: false }, // >
  projection_angle: { type: String, required: false }, // góc chiếu >
  lumens_color_temperature: { type: String, required: false }, // nhiệt độ màu
  warranty: { type: String, required: false },
  luminous_flux: { type: String, required: false }, // quang thông
  countInStock: { type: Number, required: true },
  unit_price: { type: Number, required: true },
});

const ProductColor = mongoose.model("ProductColor", productColorSchema);
const ProductPower = mongoose.model("ProductPower", productPowerSchema);
const ProductSize = mongoose.model("ProductSize", productSizeSchema);
const ProductCollection = mongoose.model('ProductCollection', productCollectionSchema);
const ProductDetails = mongoose.model('ProductDetails', productDetailsSchema);
const Product = mongoose.model("Product", productSchema);

module.exports = {
  Product,
  ProductColor, 
  ProductDetails,
  ProductPower,
  ProductSize,
  ProductCollection
};