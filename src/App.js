import React from 'react';
import Home from './Pages/Home/home';

import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import SingleItem from './Pages/SingleItem/singleItem';
import ProductDetails from './Pages/ProductDetails/productDetails';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
        <Routes>            
            <Route path='/' element={<Home />}/>
            <Route path='/single-item' index element={<SingleItem />}/>
            <Route path='/product-details' index element={<ProductDetails />}/>
        </Routes>
    </Router>
  );
}
export default App;