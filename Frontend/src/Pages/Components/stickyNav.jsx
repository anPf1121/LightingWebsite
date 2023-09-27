import React from 'react'
import { Link } from "react-router-dom";
import './globalComponents.css';
import { IconButton, Toolbar, AppBar, Stack, Button, styled, Badge, Typography, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ToggleSideBar from './toggleSidebar';
import { useState } from 'react';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: 3,
        top: 0,
        border: `2px solid 'red'`,
        padding: '0 4px',
    },
}));

export default function StickyNav() {
    let [toggleCart, setToggleCart] = useState(false);
    const handleToggleCart = () => setToggleCart(!toggleCart);
    let [toggleSearch, setToggleSearch] = useState(false);
    const handleToggleSearch = () => setToggleSearch(!toggleSearch);
    return (
        <>
            <div className="nav-container">
                <AppBar position='static' sx={{ backgroundColor: '#fff0', boxShadow: 'none' }}>
                    <Toolbar className="nav-wrapper">
                        <Stack direction='row' spacing={2} sx={{ flexGrow: 1 }}>
                            <ToggleSideBar />
                            <Button color='inherit' sx={{
                                display: { xs: 'none', md: 'flex' }, textTransform: 'none', fontFamily: "'Cormorant Garamond', serif", fontWeight: 'bold', fontSize: '1.5rem', "&.hover": {
                                    border: 'none',
                                    boxShadow: 'none'
                                }
                            }}>
                                <Link to='/products' className='nav-link' >
                                    <Typography sx={{
                                        borderBottom: '1px solid #000', color: '#000', fontFamily: "'Cormorant Garamond', serif", "&:hover": {
                                            color: '#000',
                                        }
                                    }}>SẢN PHẨM</Typography>
                                </Link>
                            </Button>
                            <Button color='inherit' sx={{ display: { xs: 'none', md: 'flex' }, textTransform: 'none', fontFamily: "'Cormorant Garamond', serif", fontWeight: 'bold', fontSize: '1.5rem' }}>
                                <Link to='/collections' className='nav-link'>
                                    <Typography sx={{
                                        borderBottom: '1px solid #000', color: '#000', fontFamily: "'Cormorant Garamond', serif", "&:hover": {
                                            color: '#000',
                                        }
                                    }}>BỘ SƯU TẬP</Typography>
                                </Link>
                            </Button>
                            <Button color='inherit' sx={{ display: { xs: 'none', md: 'flex' }, textTransform: 'none', fontFamily: "'Cormorant Garamond', serif", fontWeight: 'bold', fontSize: '1.5rem' }}>
                                <Link to='/projects' className='nav-link'>
                                    <Typography sx={{
                                        borderBottom: '1px solid #000', color: '#000', fontFamily: "'Cormorant Garamond', serif", "&:hover": {
                                            color: '#000',
                                        }
                                    }}>DỰ ÁN</Typography>
                                </Link>
                            </Button>
                            <Button color='inherit' sx={{ display: { xs: 'none', md: 'flex' }, textTransform: 'none', fontFamily: "'Cormorant Garamond', serif", fontWeight: 'bold', fontSize: '1.5rem' }}>
                                <Link to='/about-us' className='nav-link'>
                                    <Typography sx={{
                                        borderBottom: '1px solid #000', color: '#000', fontFamily: "'Cormorant Garamond', serif", "&:hover": {
                                            color: '#000',
                                        }
                                    }}>VỀ CHÚNG TÔI</Typography>
                                </Link>
                            </Button>
                        </Stack>
                        <IconButton size='large' aria-label='logo' sx={{
                            position: 'absolute', left: '50%', transform: 'translate(-50%)',
                            '&:hover': {
                                bgcolor: '#ffffff00'
                            }
                        }}>
                            <div>
                                <Link to='/' className="logo" style={{
                                    textDecoration: 'none', color: 'black'
                                }}>
                                    <Typography variant='h4'>
                                        Vision Led
                                    </Typography>
                                </Link>
                            </div>
                        </IconButton>
                        <Stack direction='row' spacing={2} sx={{ alignItems: 'center' }}>
                            <div className='right-nav' style={{ position: 'relative' }}>
                                <IconButton aria-label="cart" onClick={() => handleToggleCart()}>
                                    <StyledBadge badgeContent={0} color="error">
                                        <ShoppingCartIcon />
                                    </StyledBadge>
                                </IconButton>
                                {(toggleCart === true) ? <div className="cart-details">
                                    <Box className='cart-content' sx={{ textAlign: 'center' }}>
                                        <Box sx={{ margin: '50px 0' }}>
                                            <div className="img-empty-cart">
                                                <img src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png" alt="" />
                                            </div>
                                            <Typography style={{ marginTop: '20px' }} variant='body2'>Không có sản phẩm trong giỏ hàng!</Typography>
                                        </Box>
                                    </Box>
                                </div> : ""}
                            </div>
                            <div className='right-nav search-ic' onClick={handleToggleSearch}><SearchIcon /></div>
                            <div className="gr-search">
                                <input className={`searchbar ${(toggleSearch === true) ? 'searchbar-active' : ''} `} type="text" />
                                <button className="btn-search"><SearchIcon /></button>
                            </div>
                        </Stack>
                    </Toolbar>
                </AppBar>
            </div>
        </>
    )
}