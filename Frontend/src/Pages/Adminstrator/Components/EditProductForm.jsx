import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import InputInForm from './InputInForm';
import { UseMutationHooks } from '../../../Hooks/UseMutationHook';
import * as ProductServices from '../../../Services/ProductServices'
import { useSelector } from "react-redux"

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export default function EditForm(props) {
    const userSelector = useSelector((state) => state.user)
    const handleRadioChange = (event) => {
        setproductState({
            ...productState,
            [event.target.name]: event.target.value
        })
    };
    const [isOpen, setIsOpen] = useState(true);
    const handleClose = () => {
        setIsOpen(!isOpen)
    }

    const [productState, setproductState] = useState({
        id: props.editingItem.id,
        name: props.editingItem.name,
        image: props.editingItem.image,
        product_type: props.editingItem.product_type,
        protection_rating: props.editingItem.protection_rating,
    });

    const onChangeValue = (e) => {
        setproductState({
            ...productState,
            [e.target.name]: e.target.value
        })
    }

    const fileInputRef = useRef(null);
    const handleFileInputChange = async (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                const base64String = e.target.result;
                setproductState({
                    ...productState,
                    image: base64String
                })
            };

            reader.readAsDataURL(file);
        }
    };

    const mutation = UseMutationHooks((data) => {
        const {
            id,
            access_token,
            productState
        } = data
        return ProductServices.UpdateProduct({
            id,
            access_token,
            data: productState
        })
    })
    const handleSubmit = () => {
        mutation.mutate({ id: productState?.id, access_token: userSelector?.access_token, productState: productState });
    }
    return (
        <>
            {(isOpen === true) ?
                <Box style={{ position: 'fixed', left: '50%', top: "50%", transform: "translate(-50%, -50%)", padding: '30px 20px', backgroundColor: 'white', zIndex: '100', border: '1px solid gray', height: "400px", overflowY: "auto" }}>
                    <Typography variant='h4'>Cập Nhật Sản Phẩm</Typography>
                    <Typography variant='h6' sx={{ color: 'gray' }}>Sản Phẩm</Typography>
                    <InputInForm label="*Tên Sản Phẩm" name="name" value={productState.name} onChangeValue={onChangeValue} />
                    <Box sx={{ bgcolor: 'white', padding: '5px', color: 'black' }}>
                        <FormControl>
                            <FormLabel sx={{ display: 'flex', alignItems: 'center' }} id="demo-row-radio-buttons-group-label">Loại
                                <Box sx={{ cursor: 'pointer', marginLeft: '10px', color: 'gray !important', bgcolor: '#efefef', borderRadius: '100%', width: '30px', height: '30px', padding: '3px' }}><AddIcon /></Box></FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="product_type"
                                value={productState.product_type}
                                onChange={handleRadioChange}
                            >
                                <FormControlLabel value="Đèn Downlight" control={<Radio />} label="Downlight" />
                                <FormControlLabel value="Đèn Chùm" control={<Radio />} label="Chùm" />
                                <FormControlLabel value="Đèn Sân Vườn" control={<Radio />} label="Sân Vườn" />
                            </RadioGroup>
                        </FormControl>
                    </Box>
                    <div className="group-input-image" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                        <Button component="label" variant="contained" sx={{ bgcolor: 'black', '&:hover': { bgcolor: 'white !important', color: 'black !important' } }} startIcon={<CloudUploadIcon />}>
                            Hình Ảnh Sản Phẩm
                            <VisuallyHiddenInput
                                ref={fileInputRef} onChange={handleFileInputChange} type="file"
                            />
                        </Button>
                        {productState.image && (
                            <img src={productState.image} alt="Selected Image" style={{ maxWidth: '60px' }} />
                        )}
                    </div>
                    <div className="group-button" style={{
                        display: "flex",
                        justifyContent: "space-between",
                        position: "absolute",
                        right: '20px',
                        bottom: '20px'
                    }}>
                        <div></div>
                        <div>
                            <Button sx={{
                                background: 'black', margin: '5px', color: 'white', "&:hover": {
                                    background: 'white',
                                    color: 'black',
                                    transition: '.5s'
                                }
                            }}>Huỷ</Button>
                            <Button sx={{
                                background: 'black', margin: '5px', color: 'white', "&:hover": {
                                    background: 'white',
                                    color: 'black',
                                    transition: '.5s'
                                }
                            }} onClick={handleSubmit}>Thêm Sản Phẩm</Button>
                        </div>
                    </div>
                </Box>
                : ""}
        </>
    )
}
