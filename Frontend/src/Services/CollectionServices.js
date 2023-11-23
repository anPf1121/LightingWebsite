import axios from "axios"

export const GetAllCollection = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_KEY}/collection/get-all`)
    return res.data;
}
