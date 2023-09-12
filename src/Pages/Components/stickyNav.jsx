import React from 'react'
import { Link } from "react-router-dom";
import './globalComponents.css';
import { IconButton, Toolbar, AppBar, Stack, Button, styled, Badge, Box, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ToggleSideBar from './toggleSidebar';

const StyledBadge = styled(Badge)(({ theme }) => ({
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
                <AppBar position='static' sx={{ backgroundColor: '#fff0', boxShadow: 'none' }}>
                    <Toolbar className="nav-wrapper">
                        <Stack direction='row' spacing={2} sx={{ flexGrow: 1 }}>
                            <ToggleSideBar />
                            <Button color='inherit' sx={{
                                display: { xs: 'none', md: 'flex' }, textTransform: 'none', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', "&.hover": {
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
                            <Button color='inherit' sx={{ display: { xs: 'none', md: 'flex' }, textTransform: 'none', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem' }}>
                                <Link to='/collections' className='nav-link'>
                                    <Typography sx={{
                                        borderBottom: '1px solid #000', color: '#000', fontFamily: "'Cormorant Garamond', serif", "&:hover": {
                                            color: '#000',
                                        }
                                    }}>BỘ SƯU TẬP</Typography>
                                </Link>
                            </Button>
                            <Button color='inherit' sx={{ display: { xs: 'none', md: 'flex' }, textTransform: 'none', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem' }}>
                                <Link to='/projects' className='nav-link'>
                                    <Typography sx={{
                                        borderBottom: '1px solid #000', color: '#000', fontFamily: "'Cormorant Garamond', serif", "&:hover": {
                                            color: '#000',
                                        }
                                    }}>DỰ ÁN</Typography>
                                </Link>
                            </Button>
                            <Button color='inherit' sx={{ display: { xs: 'none', md: 'flex' }, textTransform: 'none', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem' }}>
                                <Link to='/about-us' className='nav-link'>
                                    <Typography sx={{
                                        borderBottom: '1px solid #000', color: '#000', fontFamily: "'Cormorant Garamond', serif", "&:hover": {
                                            color: '#000',
                                        }
                                    }}>VỀ CHÚNG TÔI</Typography>
                                </Link>
                            </Button>
                        </Stack>
                        <IconButton size='large' aria-label='logo' sx={{ position: 'absolute', left: '50%', transform: 'translate(-50%)' }}>
                            <div>
                                <Link to='/' className="logo">
                                    logo
                                </Link>
                            </div>
                        </IconButton>
                        <Stack direction='row' spacing={2} sx={{ alignItems: 'center' }}>
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