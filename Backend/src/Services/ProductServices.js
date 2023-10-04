const Product = require('../Models/Product')

const createProductColor = (newColor) => {
    return new Promise(async (resolve, reject) => {
        const { colorName } = newColor
        try {
            const checkColor = await Product.ProductColor.findOne({
                colorName: colorName
            })
            if (checkColor !== null) {
                resolve({
                    status: "OK",
                    message: "the color is already"
                })
            }
            const createdColor = await Product.ProductColor.create({
                colorName: colorName
            })
            if (createdColor) {
                resolve({
                    status: "OK",
                    message: "SUCCESS",
                    data: createdColor
                })
            }
        } catch (error) {
            console.log(error);
        }
    })
}

const createProductPower = (newPower) => {
    return new Promise(async (resolve, reject) => {
        const { powerValue } = newPower
        try {
            const checkPower = await Product.ProductPower.findOne({
                powerValue: powerValue
            })
            if (checkPower !== null) {
                resolve({
                    status: "OK",
                    message: "the power is already"
                })
            }
            const createdPower = await Product.ProductPower.create({
                powerValue: powerValue
            })
            if (createdPower) {
                resolve({
                    status: "OK",
                    message: "SUCCESS",
                    data: createdPower
                })
            }
        } catch (error) {
            console.log(error);
        }
    })
}

const createProductSize = (newSize) => {
    return new Promise(async (resolve, reject) => {
        const { sizeName } = newSize
        try {
            const checkSize = await Product.ProductSize.findOne({
                sizeName: sizeName
            })
            if (checkSize !== null) {
                resolve({
                    status: "OK",
                    message: "the size is already"
                })
            }
            const createdSize = await Product.ProductSize.create({
                sizeName: sizeName
            })
            if (createdSize) {
                resolve({
                    status: "OK",
                    message: "SUCCESS",
                    data: createdSize
                })
            }
        } catch (error) {
            console.log(error);
        }
    })
}

const createProductDetails = (newProductDetails) => {
    return new Promise(async (resolve, reject) => {
        const { product, power, size, color, countInStock, unit_price } = newProductDetails
        try {
            const checkProduct = await Product.Product.findOne({
                name: product
            });

            const checkPower = await Product.ProductPower.findOne({
                powerValue: power
            });

            const checkColor = await Product.ProductColor.findOne({
                colorName: color
            });

            const checkSize = await Product.ProductSize.findOne({
                sizeName: size
            });

            const createdProductDetails = await Product.ProductDetails.create({
                product: checkProduct._id,
                power: checkPower._id,
                size: checkSize._id,
                color: checkColor._id,
                countInStock,
                unit_price
            })

            if(createdProductDetails !== null) {
                resolve({
                    status: "OK",
                    message: "the product details is already",
                })
            }

            if (createdProductDetails) {
                resolve({
                    status: "OK",
                    message: "CREATE PRODUCT SUCCESS",
                    data: createdProductDetails
                })
            }
        } catch (error) {
            console.log(error);
        }
    })
}

const createProduct = (newProduct) => {
    return new Promise(async (resolve, reject) => {
        const { name, image, product_type, protection_rating, luminous_flux, warranty, CRI, dimension, lumens_color_temperature, descriptions } = newProduct
        try {
            const checkName = await Product.Product.findOne({
                name: name
            })
            if (checkName !== null) {
                resolve({
                    status: "OK",
                    message: "the product name is already"
                })
            }
            const createdProduct = await Product.Product.create({
                name,
                image,
                product_type,
                protection_rating,
                luminous_flux,
                warranty,
                CRI,
                dimension,
                lumens_color_temperature
            })
            if (createdProduct) {
                resolve({
                    status: "OK",
                    message: "SUCCESS",
                    data: createdProduct
                })
            }
        } catch (error) {
            console.log(error);
        }
    })
}

module.exports = {
    createProduct,
    createProductColor,
    createProductPower,
    createProductSize,
    createProductDetails
}