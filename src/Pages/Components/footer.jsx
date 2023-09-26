import { Box } from '@mui/material';
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css';

export default function GlobalFooter() {
    return (
        <>
            <Box sx={{
                backgroundColor: '#000000',
            }}>
                <Footer
                    maxColumnsPerRow={3}
                    columns={
                        [
                            {
                                title: 'Địa chỉ',
                                items: [
                                    {
                                        title: 'Số 22 Thanh Nhàn, phường Thanh Nhàn, Quận Hai Bà Trưng, Hà Nội'
                                    }
                                ]
                            },
                            {
                                title: 'Liên hệ',
                                items: [
                                    {
                                        title: '0913.201920 – 0978.116688'
                                    }
                                ]
                            },
                            {
                                title: 'Giờ Làm Việc',
                                items: [
                                    {
                                        title: 'Thứ 2 - Thứ 7 8h sáng - 5h chiều'
                                    },
                                ]
                            }
                        ]
                    }
                    bottom="Copyright 2023 © Công ty trách nhiệm hữu hạn điện chiếu sáng Tam Anh, thành lập ngày 6/5/2003"
                />
            </Box>
        </>
    )
}