import axios from "axios"

export const GetAllProduct = async (search, collectionId, typeId) => {
    let res = {}
    console.log("search, collectionId, typeId ", search, collectionId, typeId);
    let queryString = `${process.env.REACT_APP_API_KEY}/product/get-all`
    if (search) {
        queryString += `?filter=name:${search}`
    } 
    if(collectionId && collectionId !== "0" && collectionId !== 0) {
        // console.log("collectionId ", collectionId);
        queryString += `?filter=collection:${collectionId}`
    } 
    if(typeId && typeId !== "0" && typeId !== 0) {
        queryString += `?filter=product_type:${typeId}`
        console.log("queryStringT ", queryString.toString());
    }
    console.log("queryString ", queryString.toString());
    res = await axios.get(queryString)
    return res.data;
}

export const GetProduct = async (id) => {
    const res = await axios.get(`${process.env.REACT_APP_API_KEY}/product/get-product/${id}`)
    return res.data;
}

export const getAllProductType = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_KEY}/product/get-all-product-type`)
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
    const res = await axios.put(`${process.env.REACT_APP_API_KEY}/product/update-product/${id}`, data, {
        headers: {
            token: `Bearer ${access_token}`
        }
    })
    return res.data
}

export const DeleteProduct = async ({ id, access_token, data }) => {
    const res = await axios.delete(`${process.env.REACT_APP_API_KEY}/product/delete-product/${id}`, data, {
        headers: {
            token: `Bearer ${access_token}`
        }
    })
    return res.data
}
