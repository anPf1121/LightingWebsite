import { Check } from '@mui/icons-material';
import { Box, Button, Divider, Grid, Paper, Step, StepLabel, Stepper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, styled } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
function createData(
    name,
    calories,
    fat,
    carbs,
    protein,
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Đèn LED Ốp Trần Đổi Màu 490/40W Điều Khiển Remote LN19.RF', 'Đèn led', '10000000 đ', 2, '20000000 đ'),
];

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
        color: '#000000',
    }),
    '& .QontoStepIcon-completedIcon': {
        color: '#000000',
        zIndex: 1,
        fontSize: 18,
    },
    '& .QontoStepIcon-circle': {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
    },
}));



function QontoStepIcon(props) {
    const { active, completed, className } = props;

    return (
        <QontoStepIconRoot ownerState={{ active }} className={className}>
            {completed ? (
                <Check className="QontoStepIcon-completedIcon" />
            ) : (
                <div className="QontoStepIcon-circle" />
            )}
        </QontoStepIconRoot>
    );
}

const steps = [
    'Chọn sản phẩm',
    'Xác nhận đơn hàng',
    'Đặt hàng',
];

export default function PaymentContent() {
    return (
        <>

            <Box sx={{
                padding: {
                    xs: "5px",
                    md: "50px"
                },
                marginTop: '100px'
            }}>
                <Box sx={{ margin: '25.5px 0' }}>
                    <Stepper activeStep={1} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box>
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
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.calories}</TableCell>
                                            <TableCell align="right">{row.fat}</TableCell>
                                            <TableCell align="right">{row.carbs}</TableCell>
                                            <TableCell align="right">{row.protein}</TableCell>
                                        </TableRow>
                                    ))}
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
