import { Box, Button, Divider, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function createData(
    image, 
    name,
    type,
    unit_price,
    quantity,
    total_price,
) {
    return {
        image, 
        name, 
        type,
        unit_price,
        quantity,
        total_price
    };
}


export default function PaymentContent() {
    const orderSelector = useSelector((state) => state.order);
    console.log("orderSelector.orderItems ", orderSelector.orderItems);
        // orderSelector.orderItems.map((item, index) => {
        // })
    let rows = [];
    const newData = orderSelector.orderItems.map((item) => createData(
        item.main_image, 
        item.itemName, 
        "đèn",
        item.unit_price,  
        item.quantity,  
        item.unit_price * item.quantity,  
      ));
      rows = [...newData]
    console.log("orderSelector ", orderSelector.orderItems);
    return (
        <>
            <Box sx={{
                padding: {
                    xs: "5px",
                    md: "50px"
                },
                marginTop: '100px'
            }}>
                <Typography variant='h3' sx={{
                    padding: {
                        xs: "5px",
                        md: "20px"
                    },
                }}>Giỏ hàng</Typography>
                <Grid container spacing={2} sx={{
                    padding: {
                        xs: "5px",
                        md: "20px"
                    },
                }}>
                    <Grid item xs={12} sm={12} md={10} lg={10} xl={10} sx={{ borderRadius: '5px', objectFit: 'cover', overflow: 'hidden' }} >
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Chi tiết sản phẩm</TableCell>
                                        <TableCell align="right">Phân loại hàng</TableCell>
                                        <TableCell align="right">Đơn giá&nbsp;(VND)</TableCell>
                                        <TableCell align="right">Số lượng</TableCell>
                                        <TableCell align="right">Thành tiền&nbsp;(VND)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => { 
                                        console.log("row.main_image ", row);
                                        return <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row" style={{ display: "flex", alignItems: 'center', gap: '20px' }}>
                                                <img style={{ width: '50px', height: '50px' }} src={row.image} alt="" />
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.type}</TableCell>
                                            <TableCell align="right">{row.unit_price}</TableCell>
                                            <TableCell align="right">{row.quantity}</TableCell>
                                            <TableCell align="right">{row.total_price}</TableCell>
                                        </TableRow>
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                    <Grid item xs={12} sm={12} md={2} lg={2} xl={2} sx={{}} >
                        <Box className='continue-to-payment'>
                            <div className="tam-tinh">
                                <Typography variant='body2'>Tạm tính</Typography>
                                <Typography variant='body2'>0 đ</Typography>
                            </div>
                            <Divider sx={{ margin: '10px 0' }} />
                            <div className="total">
                                <Typography variant='body1'>Tổng cộng: </Typography>
                                <Typography variant='body1' style={{ color: '#e95353' }}>0 đ</Typography>
                            </div>
                            <Typography style={{ float: 'right' }} variant='body1'>(Đã bao gồm VAT)</Typography>
                            <Typography style={{ float: 'right' }} variant='body1'>Chưa bao gồm phí vận chuyển</Typography>
                        </Box>
                        <Link style={{ textDecoration: 'none' }} to='/payment/form'>
                            <Button color='primary' sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '20px 0px',
                                marginLeft: '50%',
                                transform: 'translateX(-50%)',
                                color: 'white',
                                padding: '8px 20px',
                                border: '1px solid black',
                                backgroundColor: 'rgba(50, 50, 50)',
                                borderRadius: '5px',
                                '&:hover': {
                                    backgroundColor: 'rgba(256, 256, 256)',
                                    border: '1px solid black',
                                    color: 'black',
                                    transition: '.3s',
                                },
                            }}>
                                Mua Ngay
                            </Button>
                        </Link>
                    </Grid>

                </Grid>
            </Box>
        </>
    )
}
