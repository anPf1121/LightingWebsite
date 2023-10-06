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
    const { product, power, size, color, voltage, CRI, dimension, lumens_color_temperature, warranty, luminous_flux, countInStock, unit_price } = req.body
    try {
        if (!product || !power || !size || !color || !countInStock || !unit_price || !voltage || !CRI || !dimension || !lumens_color_temperature || !warranty || !luminous_flux) {
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
    const { name, image, product_type, protection_rating } = req.body
    try {
        if (!name || !image || !product_type || !protection_rating) {
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

const getAllProduct = async (req, res) => {
    try {
        const { limit, page } = req.query
        const response = await ProductServices.getAllProduct(Number(limit) || 8, Number(page) || 0);
        return res.status(200).json(response)
    } catch (error) {
        return res.status(404).json({
            message: error
        })
    }
}

const getProductDetails = async (req, res) => {
    try {
        const productID = req.params.id
        if (!productID) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The product id is required'
            })
        }
        const response = await ProductServices.getProductDetails(productID);
        return res.status(200).json(response)
    } catch (error) {
        return res.status(404).json({
            message: error
        })
    }
}

const updateProduct = async (req, res) => {
    try {
        const productID = req.params.id
        const data = req.body
        if (!productID) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The product id is required'
            })
        }
        const response = await ProductServices.updateProduct(productID, data);
        return res.status(200).json(response)
    } catch (error) {
        return res.status(404).json({
            message: error
        })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const productID = req.params.id
        if (!productID) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The user id is required'
            })
        }
        const response = await ProductServices.deleteProduct(productID);
        return res.status(200).json(response)
    } catch (error) {
        return res.status(404).json({
            message: error
        })
    }
}

const updateProductDetails = async (req, res) => {
    try {
        const productDetailsID = req.params.id
        const data = req.body
        if (!productDetailsID) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The product id is required'
            })
        }
        const response = await ProductServices.updateProductDetails(productDetailsID, data);
        return res.status(200).json(response)
    } catch (error) {
        return res.status(404).json({
            message: error
        })
    }
}

const deleteProductDetails = async (req, res) => {
    try {
        const productDetailsID = req.params.id
        if (!productDetailsID) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The product details id is required'
            })
        }
        const response = await ProductServices.deleteProductDetails(productDetailsID);
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
    createProductDetails,
    getAllProduct,
    getProductDetails,
    updateProduct,
    updateProductDetails,
    deleteProduct,
    deleteProductDetails
}