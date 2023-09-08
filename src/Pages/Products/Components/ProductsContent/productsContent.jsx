import { Box, Breadcrumbs, Typography } from "@mui/material";
import React from "react";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";
const theme = createTheme({
    typography: {
        fontFamily: "'Cormorant Garamond', serif", // Thay 'Your-Font-Family' bằng font bạn muốn sử dụng
    },
})

export default function ProductsContent() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Box sx={{ padding: '50px', marginTop: '60px' }}>
                    <Box>
                        <Typography variant="h1" sx={{ textAlign: "center" }}>Products</Typography>
                        <Typography variant="h5" sx={{ textAlign: "center" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed iste ex quae tempora eum quam neque consequuntur consectetur placeat molestiae quidem nesciunt, animi hic illum quia quo provident eveniet culpa.</Typography>
                    </Box>
                    <Box>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link to='/' underline="hover" color="inherit">
                                Trang chủ
                            </Link>
                            <Typography color="text.primary">Sản Phẩm</Typography>
                        </Breadcrumbs>
                    </Box>
                </Box>




            </ThemeProvider>
        </>
    )
}
