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
import ViewDetailsProduct from './ViewDetailsProduct';
import { useSelector } from 'react-redux';

export default function ProductTable() {
  const userSelector = useSelector((state) => state.user)

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
            onClick={() => viewDetailsHandle(params.row._id)} 
          />
          <EditIcon
            style={{ cursor: 'pointer', marginRight: '10px', color: '#e5a960' }}
            onClick={() => handleUpdate({ id: params.row._id, name: params.row.name, image: params.row.image, product_type: params.row.product_type, protection_rating: params.row.protection_rating })}
          />
          <DeleteIcon
            style={{ cursor: 'pointer', color: '#f16262' }}
            onClick={() => deleteHandle(params.row._id)} 
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
  const [viewDetailsItem, setViewDetailsItem] = useState(null);
  const [isOpenDetails, setIsOpenDetails] = useState(false);
  const handleOpenDetails = () => setIsOpenDetails(!isOpenDetails)

  const handleUpdate = (...rest) => {
    let result = { ...rest }
    setEditingItem(result[0])
    handleOpenEdit();
  }

  const mutationDelete = UseMutationHooks((data) => {
    const {
        id,
        access_token
    } = data
    
    return ProductServices.DeleteProduct({
        id,
        access_token
    })
})

  const deleteHandle = (id) => {
    mutationDelete.mutate({ id: id, access_token: userSelector?.access_token });
  }


  const viewDetailsHandle = (id) => {
    handleOpenDetails()
    setViewDetailsItem(id)
  }

  const GetProductDetails = async (id) => {
    const res = await ProductServices.GetProductDetails(id);
    return res;
  }

  const { isLoading: isLoadingDetails, data: dataDetails } = useQuery({ queryKey: ['product-details', viewDetailsItem], queryFn: () => GetProductDetails(viewDetailsItem) })

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
        {(isOpenEdit === true) ? <EditForm editingItem={editingItem} /> : ""}

        {(isOpenDetails === true) ? <Overlay func={handleOpenDetails} /> : ""}
        {(isOpenDetails === true) ? <ViewDetailsProduct data={dataDetails} /> : ""}

      </div>
    </>
  );
}