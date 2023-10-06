const DeliveryServices = require('../Services/DeliveryServices')

const createDeliveryInfo = async (req, res) => {
    try {
        const { address, phoneNumber, customer } = req.body
        if (!address || !phoneNumber) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        } 
        const response = await DeliveryServices.createDeliveryInfo(req.body);
        return res.status(200).json(response)
    } catch (error) {
        return res.status(404).json({
            message: error
        })
    }
}

const updateDeliveryStatus = async (req, res) => {
    try {
        const deliveryID = req.params.id
        const response = await DeliveryServices.updateDeliveryStatus(deliveryID);
        return res.status(200).json(response)
    } catch (error) {
        return res.status(404).json({
            message: error
        })
    }
}

const deleteDelivery = async (req, res) => {
    try {
        const deliveryID = req.params.id
        const response = await DeliveryServices.deleteDelivery(deliveryID);
        return res.status(200).json(response)
    } catch (error) {
        return res.status(404).json({
            message: error
        })
    }
}

module.exports = {
    createDeliveryInfo,
    updateDeliveryStatus,
    deleteDelivery
}