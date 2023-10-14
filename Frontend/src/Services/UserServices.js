import axios from "axios"

export const LoginUser = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_KEY}/user/sign-in`, data)
    return res.data
}