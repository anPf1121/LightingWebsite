const UserRouter = require('./UserRouter')
const ProductRouter = require('./ProductRouter')
const DeliveryRouter = require('./DeliveryRouter')

const routes = (app) => {
    app.use('/api/user', UserRouter)
    app.use('/api/product', ProductRouter)
    app.use('/api/delivery', DeliveryRouter)
}

module.exports = routes