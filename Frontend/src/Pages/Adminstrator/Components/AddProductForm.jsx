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

export default function AddProductForm(props) {
   
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
        product: "",
        countInStock: "",
        unit_price: "",
        product_type: "",
        size: "",
        color: "",
        power: "",
        voltage: "",
        CRI: "",
        dimension: "",
        hole_dimension: "",
        projection_angle: "",
        chip_led: "",
        lumens_color_temperature: "",
        luminous_flux: "",
        image: "",
        warranty: "",
    });

    const onChangeValue = (e) => {
        setproductState({
            ...productState,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = () => {
        mutation.mutate(productState);
        props.func();
    }
    const mutation = UseMutationHooks(
        (data) => {
            const {
                product,
                power,
                size,
                color,
                voltage,
                CRI,
                dimension,
                hole_dimension,
                chip_led,
                projection_angle,
                lumens_color_temperature,
                warranty,
                luminous_flux,
                unit_price,
                product_type,
                image,
                countInStock: countInStock,
            } = data
            return ProductServices.CreateProduct({
                product,
                countInStock,
                unit_price,
                product_type,
                size,
                color,
                power,
                voltage,
                CRI,
                dimension,
                hole_dimension,
                projection_angle,
                chip_led,
                lumens_color_temperature,
                luminous_flux,
                image,
                warranty,
            })
        })
    const [imageBase64, setImageBase64] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const fileInputRef = useRef(null);
    const handleFileInputChange = async (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                const base64String = e.target.result;
                setImageBase64(base64String);
                setSelectedImage(file);
                setproductState({
                    ...productState,
                    image: base64String
                })
            };

            reader.readAsDataURL(file);
        }
    };
    const { data, isSuccess } = mutation
    return (
        <>
            {(isOpen === true) ?
                <Box style={{ position: 'fixed', left: '50%', top: "50%", transform: "translate(-50%, -50%)", padding: '30px 20px', backgroundColor: 'white', zIndex: '100', border: '1px solid gray', height: "400px", overflowY: "auto" }}>
                    <Typography variant='h4'>Thêm Sản Phẩm</Typography>
                    <Typography variant='h6' sx={{ color: 'gray' }}>Sản Phẩm</Typography>
                    <InputInForm label="*Tên Sản Phẩm" name="product" value={productState.product} onChangeValue={onChangeValue} />
                    <InputInForm label="*Số Lượng Tồn Kho" name="countInStock" value={productState.countInStock} onChangeValue={onChangeValue} />
                    <InputInForm label="*Giá Tiền (VND)" name="unit_price" value={productState.unit_price} onChangeValue={onChangeValue} />
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
                                <FormControlLabel value="Downlight" control={<Radio />} label="Downlight" />
                                <FormControlLabel value="Chùm" control={<Radio />} label="Chùm" />
                                <FormControlLabel value="Sân" control={<Radio />} label="Sân Vườn" />
                            </RadioGroup>
                        </FormControl>
                    </Box>
                    <div className="group-input-image" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                        <Button component="label" variant="contained" sx={{ bgcolor: 'black', '&:hover': { bgcolor: 'white !important', color: 'black !important' } }} startIcon={<CloudUploadIcon />}>
                            Hình Ảnh Sản Phẩm
                            <VisuallyHiddenInput ref={fileInputRef} onChange={handleFileInputChange} type="file" />
                        </Button>
                        {imageBase64 && (
                            <img src={imageBase64} alt="Selected Image" style={{ maxWidth: '60px' }} />
                        )}
                    </div>

                    <Typography variant='h6' sx={{ color: 'gray' }}>Thông Số Kĩ Thuật</Typography>
                    <Box sx={{ display: 'flex', gap: '10px' }}>
                        <InputInForm label="Điện Áp" name="voltage" value={productState.voltage} onChangeValue={onChangeValue} />
                        <InputInForm label="Chỉ Số Hoàn Màu" name="CRI" value={productState.CRI} onChangeValue={onChangeValue} />
                    </Box>
                    <Box sx={{ display: 'flex', gap: '10px' }}>
                        <InputInForm label="Kích Thước" name="dimension" value={productState.dimension} onChangeValue={onChangeValue} />
                        <InputInForm label="Kích Thước Lỗ Khoét" name="hole_dimension" value={productState.hole_dimension} onChangeValue={onChangeValue} />
                    </Box>
                    <Box sx={{ display: 'flex', gap: '10px' }}>
                        <InputInForm label="Chip Led" name="chip_led" value={productState.chip_led} onChangeValue={onChangeValue} />
                        <InputInForm label="Góc Chiếu" name="projection_angle" value={productState.projection_angle} onChangeValue={onChangeValue} />
                    </Box>
                    <Box sx={{ display: 'flex', gap: '10px' }}>
                        <InputInForm label="Nhiệt Độ Màu" name="lumens_color_temperature" value={productState.lumens_color_temperature} onChangeValue={onChangeValue} />
                        <InputInForm label="Quang Thông" name="luminous_flux" value={productState.luminous_flux} onChangeValue={onChangeValue} />
                    </Box>
                    <InputInForm label="Thời Gian Bảo Hành" name="warranty" value={productState.warranty} onChangeValue={onChangeValue} />
                    <Box sx={{ bgcolor: 'white', padding: '5px', color: 'black' }}>
                        <FormControl>
                            <FormLabel sx={{ display: 'flex', alignItems: 'center' }} id="demo-row-radio-buttons-group-label">Kích Thước
                                <Box sx={{ cursor: 'pointer', marginLeft: '10px', color: 'gray !important', bgcolor: '#efefef', borderRadius: '100%', width: '30px', height: '30px', padding: '3px' }}><AddIcon /></Box></FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="size"
                                value={productState.size}
                                onChange={handleRadioChange}
                            >
                                <FormControlLabel value="Nhỏ" control={<Radio />} label="Nhỏ" />
                                <FormControlLabel value="Vừa" control={<Radio />} label="Vừa" />
                                <FormControlLabel value="Lớn" control={<Radio />} label="Lớn" />
                                <FormControlLabel value="Khác" control={<Radio />} label="Khác" />
                            </RadioGroup>
                        </FormControl>
                    </Box>
                    <Box sx={{ bgcolor: 'white', padding: '5px', color: 'black' }}>
                        <FormControl>
                            <FormLabel sx={{ display: 'flex', alignItems: 'center' }} id="demo-row-radio-buttons-group-label">Màu Sắc
                                <Box sx={{ cursor: 'pointer', marginLeft: '10px', color: 'gray !important', bgcolor: '#efefef', borderRadius: '100%', width: '30px', height: '30px', padding: '3px' }}><AddIcon /></Box></FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="color"
                                value={productState.color}
                                onChange={handleRadioChange}
                            >
                                <FormControlLabel value="Vàng" control={<Radio />} label="Vàng" />
                                <FormControlLabel value="Trắng" control={<Radio />} label="Trắng" />
                            </RadioGroup>
                        </FormControl>
                    </Box>
                    <Box sx={{ bgcolor: 'white', padding: '5px', color: 'black' }}>
                        <FormControl>
                            <FormLabel sx={{ display: 'flex', alignItems: 'center' }} id="demo-row-radio-buttons-group-label">Công Xuất
                                <Box sx={{ cursor: 'pointer', marginLeft: '10px', color: 'gray !important', bgcolor: '#efefef', borderRadius: '100%', width: '30px', height: '30px', padding: '3px' }}><AddIcon /></Box></FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="power"
                                value={productState.power}
                                onChange={handleRadioChange}
                            >
                                <FormControlLabel value="7W" control={<Radio />} label="7W" />
                                <FormControlLabel value="9W" control={<Radio />} label="9W" />
                                <FormControlLabel value="12W" control={<Radio />} label="12W" />
                            </RadioGroup>
                        </FormControl>
                    </Box>

                    <div className="group-button" style={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}>
                        <div></div>
                        <div>
                            <Button onClick={props.func} sx={{
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
