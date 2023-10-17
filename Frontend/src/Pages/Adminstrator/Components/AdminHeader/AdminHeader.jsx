import React from 'react'
import { Box, Typography } from '@mui/material'

export default function AdminHeader() {
    return (
        <>
            <Box sx={{ bgcolor: 'white', display: 'flex', justifyContent: 'space-between', padding: '30px' }}>
                <Typography variant='h5'>
                    Vision Led
                </Typography>
                Adminstrator
            </Box>
        </>
    )
}
