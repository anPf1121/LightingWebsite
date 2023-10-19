import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import * as ProductServices from '../../../Services/ProductServices'
import { useQuery } from '@tanstack/react-query';
import { UseMutationHooks } from '../../../Hooks/UseMutationHook';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from 'react';
import EditForm from './EditProductForm';
import Overlay from '../../Components/overlay';




export default function ProductTable() {
  const columns = [
    { field: 'idDisplay', headerName: 'ID', width: 70 },
    {
      field: 'image', // Tên cột chứa URL hình ảnh
      headerName: '',
      width: 150,
      renderCell: (params) => (
        <img
          src={params.value} // Truy cập URL hình ảnh từ dữ liệu của hàng
          alt="Product"
          style={{ width: '50px', height: '50px' }} // Tùy chỉnh kích thước hình ảnh
        />
      ),
    },
    { field: 'name', headerName: 'Tên Sản Phẩm', width: 130 },
    { field: 'product_type', headerName: 'Loại', width: 130 },
    { field: 'protection_rating', headerName: 'Đánh giá', width: 130 },
    {
      field: 'action',
      headerName: '',
      width: 200,
      renderCell: (params) => (
        <div>
          <VisibilityIcon
            style={{ cursor: 'pointer', marginRight: '10px', color: 'gray' }}
          // onClick={() => getDataUpdate(params.row._id, params.row.name, params.row.image, params.row.product_type, params.row.protection_rating)} // Thực hiện hành động xem chi tiết
          />
          <EditIcon
            style={{ cursor: 'pointer', marginRight: '10px', color: '#e5a960' }}
            onClick={() => handleUpdate({ id: params.row._id, name: params.row.name, image: params.row.image, product_type: params.row.product_type, protection_rating: params.row.protection_rating })}
          />
          <DeleteIcon
            style={{ cursor: 'pointer', color: '#f16262' }}
          // onClick={() => handleDelete(params.row.id)} // Thực hiện hành động xóa
          />
        </div>
      ),
    }
  ];
  const getRowId = (row) => row.idDisplay;




  const getAllProducts = async () => {
    const res = await ProductServices.GetAllProduct();
    return res;
  }

  const { isLoading, data } = useQuery({ queryKey: ['products'], queryFn: getAllProducts })
  let dataIdHandle = []
  if (data?.data.length > 0) {
    dataIdHandle = data?.data.map((product, index) => ({
      ...product,
      idDisplay: (index + 1).toString()
    }))
  }



  const [editingItem, setEditingItem] = useState(null);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const handleOpenEdit = () => setIsOpenEdit(!isOpenEdit)

  const handleUpdate = (...rest) => {
    let result = { ...rest }
    setEditingItem(result[0])
    handleOpenEdit();
  }

  return (
    <>
      <div style={{ height: "40vh", width: '80vw' }}>
        {(data?.data) ?
          <DataGrid
            rows={dataIdHandle}
            getRowId={getRowId}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
          : ""}
        {(isOpenEdit === true) ? <Overlay func={handleOpenEdit} /> : ""}
        {(isOpenEdit === true) ?
          <EditForm editingItem={editingItem}/>
          : ""}
      </div>
    </>
  );
}