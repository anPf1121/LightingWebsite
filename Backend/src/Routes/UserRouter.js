const express = require("express")
const router = express.Router()
const userController = require('../Controllers/UserController')
const { authMiddleWare, authUserMiddleWare } = require("../MiddleWare/AuthMiddleWare")

router.post('/sign-up', userController.createUser)
router.post('/sign-in', userController.loginUser)
router.post('/sign-out', userController.signOutUser)
router.put('/update-user/:id', userController.updateUser)
router.delete('/delete-user/:id', authMiddleWare, userController.deleteUser)
router.get('/get-all', authMiddleWare, userController.getAllUser)
router.get('/get-details/:id', authUserMiddleWare, userController.getDetailsUser)
router.post('/refresh-token', userController.refreshToken)

module.exports = router