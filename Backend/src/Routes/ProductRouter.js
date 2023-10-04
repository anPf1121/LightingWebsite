const express = require("express")
const router = express.Router()
const productController = require('../Controllers/ProductController')

router.post('/create-color', productController.createProductColor)
router.post('/create-size', productController.createProductSize)
router.post('/create-power', productController.createProductPower)
router.post('/create-product-details', productController.createProductDetails)
router.post('/create-product', productController.createProduct)

module.exports = router