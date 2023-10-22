import React, { useState, useEffect } from 'react';
import Home from './Pages/Home/home';
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import ProductDetails from './Pages/ProductDetails/productDetails';
import Products from './Pages/Products/products';
import Collections from './Pages/Collections/collections';
import Projects from './Pages/Projects/projects';
import AboutUs from './Pages/AboutUs/aboutUs';
import { ThemeProvider, createTheme } from '@mui/material';
import Payment from './Pages/Payment/payment';
import PaymentForm from './Pages/PaymentForm/paymentForm';
import GoToTop from './Pages/Components/goToTop';
import { isJsonString } from './Ults';
import jwt_decode from "jwt-decode";
import * as UserServices from '../src/Services/UserServices';
import { useDispatch } from 'react-redux';
import { updateUser } from './Redux/Slides/userSlide';
import Admin from './Pages/Adminstrator/Admin';


const theme = createTheme({
  typography: {
    fontFamily: "'Cormorant Garamond', serif", // Thay 'Your-Font-Family' bằng font bạn muốn sử dụng
  },
})


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const {storageData, decoded} = handleDecoded()
    if (decoded?.id) {
      handleGetDetailsUser(decoded?.id, storageData);
    }
  }, [])

  const handleGetDetailsUser = async (id, token) => {
    const res = await UserServices.GetDetailsUser(id, token);
    dispatch(updateUser({...res?.data, access_token: token}))
  }

  const handleDecoded = () => {
    let storageData = localStorage.getItem('access_token')
    let decoded = {}
    let temp = storageData;
    if (storageData && isJsonString(storageData)) {
      storageData = JSON.stringify(storageData);
      decoded = jwt_decode(storageData);
    }
    storageData = temp;
    return { decoded, storageData }
  }

  UserServices.axiosJwt.interceptors.request.use(async (config) => {
    const currentTime = new Date().getTime();
    const {decoded} = handleDecoded()
    if(decoded?.exp < (currentTime / 1000)) {
      const data = await UserServices.RefreshToken()
      config.headers['token'] = `Bearer ${data?.access_token}`
    }
    return config;
  }, (err) => {
    return Promise.reject(err);
  })

  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <GoToTop />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/product-details/:productId' element={<ProductDetails />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/:typeId' element={<Products />} />
            <Route path='/collections' element={<Collections />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/payment' element={<Payment />} />
            <Route path='/payment/form' element={<PaymentForm />} />
            <Route path='/admin' element={<Admin />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}
export default App;