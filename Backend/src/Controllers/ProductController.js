const ProductServices = require('../Services/ProductServices')

const createProductColor = async (req, res) => {
    try {

        const response = await ProductServices.createProductColor(req.body);
        return res.status(200).json(response)
    } catch (error) {
        return res.status(404).json({
            message: error
        })
    }
}

const createProductPower = async (req, res) => {
    try {

        const response = await ProductServices.createProductPower(req.body);
        return res.status(200).json(response)
    } catch (error) {
        return res.status(404).json({
            message: error
        })
    }
}

const createProductSize = async (req, res) => {
    try {

        const response = await ProductServices.createProductSize(req.body);
        return res.status(200).json(response)
    } catch (error) {
        return res.status(404).json({
            message: error
        })
    }
}

const createProductDetails = async (req, res) => {
    try {

        const response = await ProductServices.createProductDetails(req.body);
        return res.status(200).json(response)
    } catch (error) {
        return res.status(404).json({
            message: error
        })
    }
}

const createProduct = async (req, res) => {
    try {

        const response = await ProductServices.createProduct(req.body);
        return res.status(200).json(response)
    } catch (error) {
        return res.status(404).json({
            message: error
        })
    }
}

module.exports = {
    createProduct,
    createProductColor,
    createProductPower,
    createProductSize,
    createProductDetails
}