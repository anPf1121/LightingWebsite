import axios from "axios"

export const GetAllProduct = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_KEY}/product/get-all`)
    return res.data;
}


export const CreateProduct = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_KEY}/product/create-product-details`, data)
    return res.data
}