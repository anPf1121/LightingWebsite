const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

const authMiddleWare = (req, res, next) => {
    const token = req.headers.token.split(' ')[1]
    console.log("token", token);
    jwt.verify(token, process.env.ACCESS_TOKEN, function(err, user) {
        if(err) {
            return res.status(404).json({
                status: 'ERR',
                message: 'the authentication'
            })
        }
        const { payload } = user
        console.log("is", user);
        if(payload?.isAdmin) {
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
    console.log("token", token);
    const userID = req.params.id
    jwt.verify(token, process.env.ACCESS_TOKEN, function(err, user) {
        if(err) {
            return res.status(404).json({
                status: 'ERR',
                message: 'the authentication'
            })
        }
        const { payload } = user
        console.log("is", user);
        if(payload?.isAdmin || payload?.id === userID) {
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