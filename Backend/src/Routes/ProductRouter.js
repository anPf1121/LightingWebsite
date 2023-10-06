const express = require("express")
const router = express.Router()
const productController = require('../Controllers/ProductController')

router.post('/create-color', productController.createProductColor)
router.post('/create-size', productController.createProductSize)
router.post('/create-power', productController.createProductPower)
router.post('/create-product-details', productController.createProductDetails)
router.post('/create-product', productController.createProduct)
router.get('/get-all', productController.getAllProduct)
router.get('/get-product-details/:id', productController.getProductDetails)
router.put('/update-product/:id', productController.updateProduct)
router.delete('/delete-product/:id', productController.deleteProduct)
router.put('/update-product-details/:id', productController.updateProductDetails)
router.delete('/delete-product-details/:id', productController.deleteProductDetails)

module.exports = router