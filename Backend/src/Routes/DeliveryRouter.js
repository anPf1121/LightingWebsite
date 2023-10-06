const express = require("express")
const router = express.Router()
const deliveryController = require('../Controllers/DeliveryController')

router.post('/create-delivery-info', deliveryController.createDeliveryInfo)
router.put('/update-status/:id', deliveryController.updateDeliveryStatus)
router.delete('/delete-delivery/:id', deliveryController.deleteDelivery)

module.exports = router