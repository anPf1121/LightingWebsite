import React from 'react'

import { Link } from "react-router-dom";
import './globalComponents.css';
import { IconButton, Toolbar, AppBar, Stack, Button } from '@mui/material';

export default function StickyNav() {
    return (
        <>
            <div className="nav-container">
                <AppBar position='static' sx={{ backgroundColor: '#ffffff5e' }}>
                    <Toolbar className="nav-wrapper">
                        <Stack direction='row' spacing={2} sx={{ flexGrow: 1 }}>
                            <Button sx={{
                                fontSize: {
                                    
                                }
                            }} color='inherit'><Link to='/single-item' className='nav-link'>Products</Link></Button>
                            <Button sx={{
                                fontSize: {
                                    
                                }
                            }} color='inherit'><Link to='/single-item' className='nav-link'>Shop</Link></Button>
                            <Button sx={{
                                fontSize: {
                                    
                                }
                            }} color='inherit'><Link to='/single-item' className='nav-link'>Collection</Link></Button>
                            <Button sx={{
                                fontSize: {
                                    
                                }
                            }} color='inherit'><Link to='/single-item' className='nav-link'>About Us</Link></Button>
                            <Button sx={{
                                fontSize: {
                                    
                                }
                            }} color='inherit'><Link to='/single-item' className='nav-link'>Contact</Link></Button>
                        </Stack>
                        <IconButton size='large' aria-label='logo' sx={{position: 'absolute', left: '50%', transform: 'translate(-50%)'}}>
                            <div>
                                <Link to='/' className="logo">Logo</Link>
                            </div>
                        </IconButton>
                        <Stack direction='row' spacing={2}>
                            <Button sx={{
                                fontSize: {
                                    
                                }
                            }} color='inherit'><Link to='/single-item' className='nav-link'>Account</Link></Button>
                            <Button sx={{
                                fontSize: {
                                    
                                }
                            }} color='inherit'><Link to='/single-item' className='nav-link'>Cart(0)</Link></Button>
                            <Button sx={{
                                fontSize: {
                                    
                                }
                            }} color='inherit'><Link to='/single-item' className='nav-link'>Search</Link></Button>
                        </Stack>
                    </Toolbar>
                </AppBar>

            </div>
        </>
    )
}