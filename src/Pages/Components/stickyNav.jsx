import React from 'react'

import { Link } from "react-router-dom";
import './globalComponents.css';

export default function StickyNav() {
    return (
        <>
            <div className="nav-container">
                <div className="wrapper">
                    <div className="left-content">
                        <span><Link to='/single-item' className='nav-link'>Product</Link></span>
                        <span><Link to='/single-item' className='nav-link'>Shop</Link></span>
                        <span><Link to='/single-item' className='nav-link'>Collection</Link></span>
                        <span><Link to='/single-item' className='nav-link'>About Us</Link></span>
                        <span><Link to='/single-item' className='nav-link'>Contact</Link></span>
                    </div>
                    <div className="middle-content">
                        <div className="logo">
                            this is logo
                        </div>
                    </div>
                    <div className="right-content">
                        <span><Link to='/single-item' className='nav-link'>account</Link></span>
                        <span><Link to='/single-item' className='nav-link'>cart(0)</Link></span>
                        <span><Link to='/single-item' className='nav-link'>Search</Link></span>
                    </div>
                </div>
            </div>
        </>
    )
}