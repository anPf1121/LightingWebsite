import { Button, FormControl, IconButton, Input, InputAdornment, InputLabel, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export default function LoginForm({ userNameValue, handleUserNameChange, passwordValue, handlePasswordChange, handleSignIn, data, toggleLoginForm, handleToggleLogin }) {

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <>
            <div className='right-nav' style={{ position: 'relative' }}>
                <div className={`login-form ${(toggleLoginForm === true) ? "login-form-active" : ""}`}>
                    <IconButton aria-label="cart" sx={{
                        position: 'absolute', top: '0', right: '0', color: 'white'
                    }} onClick={() => handleToggleLogin()}>
                        <CloseIcon />
                    </IconButton>
                    <div className="login-form-wrapper">
                        <div className="left-form">
                            <Typography variant='h6'>Xin chào, đăng nhập hoặc đăng kí</Typography>
                            <TextField
                                id="standard-multiline-flexible"
                                label="User Name Or Email"
                                multiline
                                maxRows={4}
                                variant="standard"
                                className='username-input'
                                sx={{ width: '25ch', margin: '10px' }}
                                value={userNameValue}
                                onChange={handleUserNameChange}
                            />
                            <div>
                                <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                    <Input
                                        id="standard-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={passwordValue}
                                        onChange={handlePasswordChange}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </div>
                            {data?.status === 'ERR' ? <span style={{color: 'red'}}>Invalid username or password</span> : ""}
                            <br />
                            <Button className='login-btn'
                                onClick={handleSignIn}
                                sx={{
                                    margin: '20px 0', color: 'white', bgcolor: 'gray',
                                    "&:hover": {
                                        bgcolor: 'black',
                                        transition: '.5s'
                                    }
                                }}>Đăng nhập</Button>
                            <div className="sign-up-option" >Tạo tài khoản?</div>
                        </div>
                        <div className="right-form">
                            <img src="https://static.wixstatic.com/media/5b4b7e_c00ddd98b00041df8389fb23d479c1c9~mv2.jpg/v1/fill/w_510,h_724,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5b4b7e_c00ddd98b00041df8389fb23d479c1c9~mv2.jpg" alt="btf" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
