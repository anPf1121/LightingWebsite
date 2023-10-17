import { Button } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import AddProductForm from './AddProductForm';
import Overlay from '../../Components/overlay';

export default function AddProductButton() {
    const [openForm, setOpenForm] = useState(false);
    const handleSetOpen = () => setOpenForm(!openForm)

    return (
        <>
            {((openForm === true) ? <AddProductForm func={handleSetOpen} /> : "")}
            {((openForm === true) ? <Overlay func={handleSetOpen} /> : "")}

            <Button sx={{ width: '200px', height: '200px', border: '1px solid #dfdfdff2', background: '#dfdfdf7a', margin: '20px 0' }} onClick={handleSetOpen}>
                <AddIcon sx={{ color: 'black' }} />
            </Button>
        </>
    )
}
