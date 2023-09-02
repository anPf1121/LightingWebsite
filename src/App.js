import React from 'react';
import Home from './Pages/Home/home';
import './App.css'

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
            <Route exact path='/' element={<Home />}/>
            <Route path='/single-item' element={<SingleItem />}/>
        </Routes>
    </Router>
  );
}
export default App;