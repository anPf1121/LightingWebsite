const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

const authMiddleWare = (req, res, next) => {
    const token = req.headers.token.split(' ')[1]
    jwt.verify(token, process.env.ACCESS_TOKEN, function(err, user) {
        if(err) {
            return res.status(404).json({
                status: 'ERR',
                message: 'the authentication'
            })
        }
        if(user?.isAdmin) {
            next()
        } else {
            return res.status(404).json({
                status: 'ERR',
                message: 'the authentication'
            })
        }
    })
}

const authUserMiddleWare = (req, res, next) => {
    const token = req.headers.token.split(' ')[1]
    const userID = req.params.id
    jwt.verify(token, process.env.ACCESS_TOKEN, function(err, user) {
        if(err) {
            return res.status(404).json({
                status: 'ERR',
                message: 'the authentication'
            })
        }
        console.log(user);
        if(user?.isAdmin || user?.id === userID) {
            next()
        } else {
            return res.status(404).json({
                status: 'ERR',
                message: 'the authentication'
            })
        }
    })
}

module.exports = {
    authMiddleWare,
    authUserMiddleWare
}