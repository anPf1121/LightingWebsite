const Collection = require("../Models/Collection")

const getCollections = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const collections = await Collection.find()
            resolve({
                status: "OK",
                message: "GET COLLECTIONS SUCCESS",
                data: collections
            })
        } catch (error) {
            console.log(error);
        }
    })
}

const createCollection = (newCollection) => {
    return new Promise(async (resolve, reject) => {
        const { name, description, image } = newCollection
        try {
            const createdCollection = await Collection.create({
                name, image, description
            })
            if (createdCollection) {
                resolve({
                    status: "OK",
                    message: "CREATE COLLECTION SUCCESS",
                    data: createdCollection
                })
            }
        } catch (error) {
            console.log(error);
        }
    })
}

const updateCollection = (id, updateData) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkCollection = Collection.findOne({
                _id: id
            })

            if (checkCollection === null) {
                resolve({
                    status: "ERR",
                    message: "the collection id is not defined"
                })
            }

            const updatedCollection = await Collection.findByIdAndUpdate(id, updateData, { new: true })

            resolve({
                status: "OK",
                message: "UPDATE COLLECTION SUCCESS",
                data: updatedCollection
            })
        } catch (error) {
            console.log(error);
        }
    })
}

const deleteCollection = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkCollection = Collection.findOne({
                _id: id
            })

            if (checkCollection === null) {
                resolve({
                    status: "ERR",
                    message: "the collection id is not defined"
                })
            }

            await Collection.findByIdAndDelete(id)

            resolve({
                status: "OK",
                message: "DELETE COLLECTION SUCCESS"
            })
        } catch (error) {
            console.log(error);
        }
    })
}

module.exports = {
    getCollections,
    createCollection,
    updateCollection,
    deleteCollection
}