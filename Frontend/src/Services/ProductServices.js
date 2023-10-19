import axios from "axios"

export const GetAllProduct = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_KEY}/product/get-all`)
    return res.data;
}

export const GetProductDetails = async (id) => {
    const res = await axios.get(`${process.env.REACT_APP_API_KEY}/product/get-product-details/${id}`)
    return res.data;
}

export const CreateProduct = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_KEY}/product/create-product-details`, data)
    return res.data
}

export const UpdateProduct = async ({ id, access_token, data }) => {
    console.log("idx", id);
    console.log("access_tokenx", access_token);
    console.log("datax", data);
    const res = await axios.put(`${process.env.REACT_APP_API_KEY}/product/update-product/${id}`, data, {
        headers: {
            token: `Bearer ${access_token}`
        }
    })
    return res.data
}