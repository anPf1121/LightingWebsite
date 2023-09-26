import { Box, Typography } from '@mui/material'
import React from 'react'

export default function PaymentFormContent() {
    return (
        <>
            <Box sx={{
                padding: {
                    xs: "5px",
                    md: "50px"
                },
                marginTop: '100px'
            }}>
                <Typography variant='h3'>Đặt hàng</Typography>
            </Box>
        </>
    )
}
