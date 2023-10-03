const express = require("express")
const router = express.Router()
const productController = require('../Controllers/ProductController')

router.post('/create', productController.createProduct)

module.exports = router