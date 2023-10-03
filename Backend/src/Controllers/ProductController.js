const ProductServices = require('../Services/ProductServices')

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
    createProduct
}