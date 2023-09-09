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

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => { // Giả lập việc tải dữ liệu hoặc các tác vụ khởi đầu khác
    setTimeout(() => {
      setLoading(false); // Kết thúc tải
    }, 300); // Thời gian giả lập, có thể thay đổi
  }, []);
  return (
    <>
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
            {/* <Route path='/about' element={<About />} /> */}
            {/* <Route path='/about' element={<Exp />} /> */}
            {/* <Route path='/about' element={<Collections />} /> */}
          </Routes>
        </Router>
      )}
    </>
  );
}
export default App;