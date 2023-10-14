import { Button, FormControl, IconButton, Input, InputAdornment, InputLabel, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Overlay from './overlay'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useMutation } from '@tanstack/react-query';
import * as UserServices from './../../Services/UserServices';
import { UseMutationHooks } from '../../Hooks/UseMutationHook';
import jwt_decode from "jwt-decode";

export default function LoginForm() {
    let [toggleLoginForm, setToggleLoginForm] = useState(false);
    const handleToggleLogin = () => setToggleLoginForm(!toggleLoginForm);

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const [userNameValue, setUserNameValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const handleUserNameChange = (e) => {
        setUserNameValue(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPasswordValue(e.target.value);
    };

    const mutation = UseMutationHooks(data => UserServices.LoginUser(data))

    const handleSignIn = () => {
        mutation.mutate({
            email: userNameValue,
            password: passwordValue
        })
    }

    const { data, isLoading, isSuccess } = mutation
    useEffect(() => {
        if(isSuccess) {
            localStorage.setItem('access_token', data?.access_token);
            if(data?.access_token) {
                const decoded = jwt_decode(data?.access_token);
                if(decoded?.id) {
                    handleGetDetailsUser(decoded?.id, data?.access_token);
                }
            }
        }
    }, [isSuccess])

    const handleGetDetailsUser = async (id, token) => {
        const res = await UserServices.GetDetailsUser(id, token);
        console.log(res);
    }
    return (
        <>
            {(toggleLoginForm === true) ? <Overlay func={handleToggleLogin} /> : ""}
            <div className='right-nav' style={{ position: 'relative' }}>
                <IconButton aria-label="cart" onClick={() => handleToggleLogin()}>
                    <AccountCircleIcon />
                </IconButton>
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
                            
                            {data?.status === 'ERR' ? <span>invalid username or password</span> : <span>loging in</span>}
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
