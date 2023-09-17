import React, { useState, useEffect } from 'react';
import { ClimbingBoxLoader } from 'react-spinners';
import Home from './Pages/Home/home';
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import SingleItem from './Pages/SingleItem/singleItem';
import ProductDetails from './Pages/ProductDetails/productDetails';
import Products from './Pages/Products/products';
import Collections from './Pages/Collections/collections';
import Projects from './Pages/Projects/projects';
import AboutUs from './Pages/AboutUs/aboutUs';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
      fontFamily: "'Cormorant Garamond', serif", // Thay 'Your-Font-Family' bằng font bạn muốn sử dụng
  },
})


function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => { // Giả lập việc tải dữ liệu hoặc các tác vụ khởi đầu khác
    setTimeout(() => {
      setLoading(false); // Kết thúc tải
    }, 300); // Thời gian giả lập, có thể thay đổi
  }, []);
  return (
    <>
    <ThemeProvider theme={theme}>
      {loading ? (
        // Hiển thị Spinner khi đang tải
        <div className="spinner">
          <ClimbingBoxLoader color={'#000000'} loading={loading} size={15} className='loadingItem' />
        </div>
      ) : (
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/single-item' element={<SingleItem />} />
            <Route path='/product-details' element={<ProductDetails />} />
            <Route path='/products' element={<Products />} />
            <Route path='/collections' element={<Collections />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/about-us' element={<AboutUs />} />
          </Routes>
        </Router>
      )}
    </ThemeProvider>
    </>
  );
}
export default App;