const Delivery = require("../Models/Delivery")

const createDeliveryInfo = (newUser) => {
    return new Promise(async (resolve, reject) => {
        const { address, phoneNumber, customer } = newUser
        try {
            const createdDeliveryInfo = await Delivery.create({
                address, phoneNumber, customer
            })
            if (createdDeliveryInfo) {
                resolve({
                    status: "OK",
                    message: "CREATE DELIVERY INFO SUCCESS",
                    data: createdDeliveryInfo
                })
            }
        } catch (error) {
            console.log(error);
        }
    })
}

const updateDeliveryStatus = (id, status) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkDelivery = Delivery.findOne({
                _id: id
            })

            if (checkDelivery === null) {
                resolve({
                    status: "ERR",
                    message: "the delivery id is not defined"
                })
            }

            const updatedDeliveryInfo = await Delivery.findByIdAndUpdate(id, status, { new: true })

            resolve({
                status: "OK",
                message: "UPDATE DELIVERY STATUS SUCCESS",
                data: updatedDeliveryInfo
            })
        } catch (error) {
            console.log(error);
        }
    })
}

const deleteDelivery = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkDelivery = Delivery.findOne({
                _id: id
            })

            if (checkDelivery === null) {
                resolve({
                    status: "ERR",
                    message: "the delivery id is not defined"
                })
            }

            await Delivery.findByIdAndDelete(id)

            resolve({
                status: "OK",
                message: "DELETE DELIVERY SUCCESS"
            })
        } catch (error) {
            console.log(error);
        }
    })
}

module.exports = {
    createDeliveryInfo,
    updateDeliveryStatus,
    deleteDelivery
}