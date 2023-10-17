import { Box, Button, Checkbox, Typography } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';
import { Scrollbar } from 'swiper/modules';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function AddProductForm(props) {
    return (
        <>
            <Box sx={{ position: 'fixed', left: '50%', top: "50%", transform: "translate(-50%, -50%)", padding: '30px 20px', backgroundColor: 'white', zIndex: '100', border: '1px solid gray', height: "400px", overflowY: "auto" }}>
                <Typography variant='h4'>Thêm Sản Phẩm</Typography>
                <TextField sx={{ margin: '10px 0' }} fullWidth label="Tên Sản Phẩm" id="fullWidth" />
                <TextField sx={{ margin: '10px 0' }} fullWidth label="Số Lượng Sản Phẩm Tồn Kho" id="fullWidth" />
                <TextField sx={{ margin: '10px 0' }} fullWidth label="Giá Tiền Sản Phẩm" id="fullWidth" />
                <Box sx={{ bgcolor: 'white', padding: '5px', color: 'black' }}>
                    Kích Thước: <br />
                    <Checkbox {...label} defaultChecked color="default" /> Nhỏ
                </Box>
                <Box sx={{ bgcolor: 'white', padding: '5px', color: 'black' }}>
                    Màu Sắc: <br />
                    <Checkbox {...label} defaultChecked color="default" /> Vàng
                </Box>
                <Box sx={{ bgcolor: 'white', padding: '5px', color: 'black' }}>
                    Công Xuất: <br />
                    <Checkbox {...label} defaultChecked color="default" /> 7W
                </Box>
                <Box sx={{ bgcolor: 'white', padding: '5px', color: 'black' }}>
                    Loại: <br />
                    <Checkbox {...label} defaultChecked color="default" /> Đèn Led
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
                        }}>Thêm Sản Phẩm</Button>
                    </div>
                </div>
            </Box>
        </>
    )
}
