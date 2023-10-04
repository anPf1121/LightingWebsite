const ProductServices = require('../Services/ProductServices')

const createProductColor = async (req, res) => {
    const { colorName } = req.body
    try {
        if (!colorName) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await ProductServices.createProductColor(req.body);
        return res.status(200).json(response)
    } catch (error) {
        return res.status(404).json({
            message: error
        })
    }
}

const createProductPower = async (req, res) => {
    const { powerValue } = req.body
    try {
        if (!powerValue) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await ProductServices.createProductPower(req.body);
        return res.status(200).json(response)
    } catch (error) {
        return res.status(404).json({
            message: error
        })
    }
}

const createProductSize = async (req, res) => {
    const { sizeName } = req.body
    try {
        if (!sizeName) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await ProductServices.createProductSize(req.body);
        return res.status(200).json(response)
    } catch (error) {
        return res.status(404).json({
            message: error
        })
    }
}

const createProductDetails = async (req, res) => {
    const { product, power, size, color, countInStock, unit_price } = req.body
    try {
        if (!product || !power || !size || !color || !countInStock || !unit_price) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await ProductServices.createProductDetails(req.body);
        return res.status(200).json(response)
    } catch (error) {
        return res.status(404).json({
            message: error
        })
    }
}

const createProduct = async (req, res) => {
    const { name, image, product_type, protection_rating, luminous_flux, warranty, CRI, dimension, lumens_color_temperature, descriptions } = newProduct
    try {
        if (!name || !image || !product_type || !protection_rating || !luminous_flux || !warranty || !CRI || !dimension || !lumens_color_temperature) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
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