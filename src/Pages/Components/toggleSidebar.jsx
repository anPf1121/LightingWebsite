import React, { useState } from 'react';
import { SidebarData } from './sideBarData';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import { TbAlignJustified } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";

export default function ToggleSideBar() {
    const [open, openState] = useState(true);
    const toggleSidebar = () => openState(!open);
    return (
        <>
            <Box color='inherit' onClick={toggleSidebar} sx={{ display: { xs: 'block', md: 'none', color: 'black', fontSize: '1.5rem' } }}><TbAlignJustified /></Box>
            <div className="sidebar-container">
                <ul className={open ? "sidebar active" : "sidebar"}>
                    <span className='close-side-bar' onClick={toggleSidebar}><AiOutlineClose /></span>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path} className='nav-icon'>{item.icon}</Link>
                                <Link to={item.path} className='nav-link'>{item.title}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}