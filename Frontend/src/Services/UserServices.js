import axios from "axios"
export const axiosJwt = axios.create();

export const LoginUser = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_KEY}/user/sign-in`, data)
    return res.data
}

export const LogOutUser = async () => {
    const res = await axios.post(`${process.env.REACT_APP_API_KEY}/user/sign-out`)
    return res.data
}

export const GetDetailsUser = async (id, access_token) => {
    const res = await axiosJwt.get(`${process.env.REACT_APP_API_KEY}/user/get-details/${id}`, {
        headers: {
            token: `Bearer ${access_token}`,
        }   
    });
    return res.data;
}

export const RefreshToken = async () => {
    const res = await axios.post(`${process.env.REACT_APP_API_KEY}/user/refresh-token`, {
        withCredentials: true,
    });
    return res.data;
}