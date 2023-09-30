const User = require("../Models/User")
const bcrypt = require("bcrypt")
const { generalAccessToken } = require("./JwtServices")

const createUser = (newUser) => {
    return new Promise(async (resolve, reject) => {
        const { name, email, password, confirmPassword, phone, address } = newUser
        try {
            const checkUser = await User.findOne({
                email: email
            })
            if (checkUser !== null) {
                resolve({
                    status: "OK",
                    message: "the email is already"
                })
            }
            const hashedPassword = bcrypt.hashSync(password, 10)
            const createdUser = await User.create({
                name,
                email,
                password: hashedPassword,
                phone,
                address
            })
            if (createdUser) {
                resolve({
                    status: "OK",
                    message: "SUCCESS",
                    data: createdUser
                })
            }
        } catch (error) {
            console.log(error);
        }
    })
}

const loginUser = (userLogin) => {
    return new Promise(async (resolve, reject) => {
        const { name, email, password, confirmPassword, phone, address } = userLogin
        try {
            const checkUser = await User.findOne({
                email: email
            })
            if (checkUser === null) {
                resolve({
                    status: "OK",
                    message: "the user is not defined"
                })
            }
            const comparePassword = bcrypt.compareSync(password, checkUser.password)
            if (!comparePassword) {
                resolve({
                    status: "OK",
                    message: "the password or user is incorrect"
                })
            }
            const access_token = await generalAccessToken({
                id: checkUser.id,
                isAdmin: checkUser.isAdmin
            })

            const refresh_token = await generalAccessToken({
                id: checkUser.id,
                isAdmin: checkUser.isAdmin
            })

            resolve({
                status: "OK",
                message: "SUCCESS",
                access_token,
                refresh_token
            })
        } catch (error) {
            console.log(error);
        }
    })
}

const updateUser = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkUser = await User.findOne({
                _id: id
            })
            if (checkUser === null) {
                resolve({
                    status: "OK",
                    message: "The user is not defined"
                })
            }

            const updatedUser = await User.findByIdAndUpdate(id, data, { new: true })

            resolve({
                status: "OK",
                message: "SUCCESS",
                data: updatedUser
            })
        } catch (error) {
            console.log(error);
        }
    })
}

const deleteUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkUser = await User.findOne({
                _id: id
            })
            if (checkUser === null) {
                resolve({
                    status: "OK",
                    message: "The user is not defined"
                })
            }

            await User.findByIdAndDelete(id)

            resolve({
                status: "OK",
                message: "DELETE USER SUCCESS"
            })
        } catch (error) {
            console.log(error);
        }
    })
}

module.exports = {
    createUser,
    loginUser,
    updateUser,
    deleteUser
}