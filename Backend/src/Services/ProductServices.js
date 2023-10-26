const Product = require('../Models/Product')

const createProductCollection = (newColor) => {
    return new Promise(async (resolve, reject) => {
        const { collectionImage, collectionName, collectionDescription } = newColor
        try {
            const checkCollection = await Product.ProductCollection.findOne({
                collectionName: collectionName
            })
            if (checkCollection !== null) {
                resolve({
                    status: "OK",
                    message: "the collection name is already"
                })
            }
            const createdCollection = await Product.ProductCollection.create({
                collectionImage: collectionImage,
                collectionName: collectionName,
                collectionDescription: collectionDescription
            })
            if (createdCollection) {
                resolve({
                    status: "OK",
                    message: "SUCCESS",
                    data: createdCollection
                })
            }
        } catch (error) {
            console.log(error);
        }
    })
}

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
        const {
            product,
            power,
            size,
            color,
            voltage,
            CRI,
            dimension,
            hole_dimension,
            chip_led,
            projection_angle,
            lumens_color_temperature,
            warranty,
            luminous_flux,
            unit_price,
            product_type,
            image,
            countInStock } = newProductDetails
        try {
            const checkProductFirst = await Product.Product.findOne({
                name: product
            });
            if (!checkProductFirst) {
                await Product.Product.create({
                    name: product,
                    image: image,
                    product_type: product_type
                })
            }
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

            const checkProductDetails = await Product.ProductDetails.findOne({
                product: checkProduct._id,
                power: checkPower ? checkPower._id : null,
                size: checkSize ? checkSize._id : null,
                color: checkColor ? checkColor._id : null,
                voltage,
                CRI,
                dimension,
                lumens_color_temperature,
                warranty,
                luminous_flux,
                hole_dimension,
                chip_led,
                projection_angle
            })

            if (checkProductDetails !== null) {
                resolve({
                    status: "OK",
                    message: "the product details is already",
                })
            }
            
            const createdProductDetails = await Product.ProductDetails.create({
                product: checkProduct._id,
                power: checkPower ? checkPower._id : null,
                size: checkSize ? checkSize._id : null,
                color: checkColor ? checkColor._id : null,
                voltage,
                CRI,
                dimension,
                lumens_color_temperature,
                warranty,
                luminous_flux,
                countInStock,
                unit_price
            })

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
        const { name, image, product_type, protection_rating } = newProduct
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
                product_type
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

const getAllProduct = (limit, page) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalProduct = await Product.Product.count()
            const allProduct = await Product.Product.find().limit(limit).skip(page * limit)
            resolve({
                status: "OK",
                message: "GET ALL PRODUCT SUCCESS",
                data: allProduct,
                total: totalProduct,
                currentPage: (page + 1),
                totalPage: Math.ceil(totalProduct / limit)
            })
        } catch (error) {
            console.log(error);
        }
    })
}

const getProductDetails = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const productDetails = await Product.ProductDetails.find({
                product: id
            }).populate('size').populate('power').populate('color').populate('product')
            resolve({
                status: "OK",
                message: "GET PRODUCT DETAILS SUCCESS",
                data: productDetails
            })
        } catch (error) {
            console.log(error);
        }
    })
}

const getProduct = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const product = await Product.Product.findOne({
                _id: id
            })
            resolve({
                status: "OK",
                message: "GET PRODUCT BY ID SUCCESS",
                data: product
            })
        } catch (error) {
            console.log(error);
        }
    })
}
const getAllProductType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allProduct = await Product.Product.find();
            const uniqueProductTypes = [...new Set(allProduct.map(product => product.product_type))];
            resolve({
                status: "OK",
                message: "GET PRODUCT TYPES SUCCESS",
                data: uniqueProductTypes
            })
        } catch (error) {
            console.log(error);
        }
    })
}

const updateProduct = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkProduct = await Product.Product.findOne({
                _id: id
            })
            if (checkProduct === null) {
                resolve({
                    status: "OK",
                    message: "The product is not defined"
                })
            }

            const updatedProduct = await Product.Product.findByIdAndUpdate(id, data, { new: true })

            resolve({
                status: "OK",
                message: "SUCCESS",
                data: updatedProduct
            })
        } catch (error) {
            console.log(error);
        }
    })
}


const deleteProduct = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkProduct = await Product.Product.findOne({
                _id: id
            })
            if (checkProduct === null) {
                resolve({
                    status: "OK",
                    message: "The product is not defined"
                })
            }

            await Product.Product.findByIdAndDelete(id)

            resolve({
                status: "OK",
                message: "DELETE PRODUCT SUCCESS"
            })
        } catch (error) {
            console.log(error);
        }
    })
}

const updateProductDetails = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkProductDetails = await Product.ProductDetails.findOne({
                _id: id
            })
            if (checkProductDetails === null) {
                resolve({
                    status: "OK",
                    message: "The product is not defined"
                })
            }
            const updatedProductDetails = await Product.ProductDetails.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: "OK",
                message: "SUCCESS",
                data: updatedProductDetails
            })
        } catch (error) {
            console.log(error);
        }
    })
}

const deleteProductDetails = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkProductDetails = await Product.ProductDetails.findOne({
                _id: id
            })
            if (checkProductDetails === null) {
                resolve({
                    status: "OK",
                    message: "The product is not defined"
                })
            }

            await Product.ProductDetails.findByIdAndDelete(id)

            resolve({
                status: "OK",
                message: "DELETE PRODUCT DETAILS SUCCESS"
            })
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
    createProductDetails,
    getAllProduct,
    getProductDetails,
    updateProduct,
    updateProductDetails,
    deleteProduct,
    deleteProductDetails,
    createProductCollection,
    getAllProductType,
    getProduct,
}