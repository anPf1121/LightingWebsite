const express = require("express")
const router = express.Router()
const collectionController = require('../Controllers/CollectionController')

router.get('/get-all', collectionController.getCollections)
router.post('/create-collection', collectionController.createCollection)
router.put('/update-collection/:id', collectionController.updateCollection)
router.delete('/delete-collection/:id', collectionController.deleteCollection)

module.exports = router