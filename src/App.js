import React from 'react';
import Home from './Pages/Home/home';

import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import SingleItem from './Pages/SingleItem/singleItem';

function App() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/single-item' index element={<SingleItem />}/>
        </Routes>
    </Router>
  );
}
export default App;