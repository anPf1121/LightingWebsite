import React from 'react'

import { Link } from "react-router-dom";
import './globalComponents.css';
import { IconButton, Toolbar, AppBar, Stack, Button, styled, Badge } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge) (({ theme }) => ({
    '& .MuiBadge-badge': {
        right: 3,
        top: 0,
        border: `2px solid 'red'`,
        padding: '0 4px',
    },
}));

export default function StickyNav() {
    return (
        <>
            <div className="nav-container">
                <AppBar position='static' sx={{ backgroundColor: '#ffffff0f' }}>
                    <Toolbar className="nav-wrapper">
                        <Stack direction='row' spacing={2} sx={{ flexGrow: 1 }}>
                            <Button color='inherit' sx={{ display: { xs: 'none', md: 'flex' } }}><Link to='/single-item' sx={{
                                fontSize: '2rem'
                            }} className='nav-link'>Sản Phẩm</Link></Button>
                            <Button color='inherit' sx={{ display: { xs: 'none', md: 'flex' } }}><Link to='/single-item' sx={{
                                fontSize: '2rem'
                            }} className='nav-link'>Bộ Sưu Tập</Link></Button>
                            <Button color='inherit' sx={{ display: { xs: 'none', md: 'flex' } }}><Link to='/single-item' sx={{
                                fontSize: '2rem'
                            }} className='nav-link'>Về Chúng Tôi</Link></Button>
                        </Stack>
                        <IconButton size='large' aria-label='logo' sx={{ position: 'absolute', left: '50%', transform: 'translate(-50%)' }}>
                            <div>
                                <Link to='/' className="logo">Logo</Link>
                            </div>
                        </IconButton>
                        <Stack direction='row' spacing={2} sx={{alignItems: 'center'}}>
                            <div className='right-nav'>
                                <IconButton aria-label="cart">
                                    <StyledBadge badgeContent={4} color="error">
                                        <ShoppingCartIcon />
                                    </StyledBadge>
                                </IconButton>
                            </div>
                            <div className='right-nav'><SearchIcon /></div>
                        </Stack>
                    </Toolbar>
                </AppBar>

            </div>
        </>
    )
}