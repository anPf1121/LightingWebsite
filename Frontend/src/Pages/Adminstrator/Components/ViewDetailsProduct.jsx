import React from 'react'
import { UseMutationHooks } from '../../../Hooks/UseMutationHook'
import * as ProductServices from '../../../Services/ProductServices'
import { Box } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
export default function ViewDetailsProduct(props) {
    return (
        <>
            <Box sx={{ position: 'fixed', bgcolor: 'white', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', padding: '20px', zIndex: '100', border: '1px solid gray', height: "400px", overflowY: "auto" }}>
                <div className="details-item-header">
                    <span>Sản Phẩm   |   Công xuất   |   Size   |   Màu Sắc | Giá tiền   | Chỉ số hoàn màu | kích thước | kích thước lỗ khoét | Chip led | Góc chiếu | Nhiệt độ màu | Quang thông | Bảo hành</span>
                </div>
                <div className="details-item">
                    {props.data?.data.map((item, id) => {
                        return <>
                        <div key={id}>{props.data?.data[id].CRI}</div>
                        </>
                    })}
                </div>
            </Box>
        </>
    )
}
