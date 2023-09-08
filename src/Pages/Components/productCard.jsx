import React from 'react'
// import { Link } from "react-router-dom";
import './globalComponents.css';
import { GridMaximize2O } from "lovedicons/dist/gridO";
import { Box, Card, CardContent, CardMedia, Typography, Modal } from '@mui/material';

export default function ProductCard() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Card sx={{ cursor: 'pointer', border: '1px solid #f3f3f3' }} className='card'>
                <CardMedia alt='unsplash image' component="img" image="https://static.wixstatic.com/media/5b4b7e_ddb3c954e30d417f8bbc945e87896aca~mv2.jpg/v1/fill/w_429,h_429,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5b4b7e_ddb3c954e30d417f8bbc945e87896aca~mv2.jpg" />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant='h5'
                        sx={{ textAlign: 'center' }}
                    >Product Name</Typography>
                    <Typography variant='body1' sx={{
                        color: 'gray',
                        textAlign: 'center',
                    }}>20.000.000 VND</Typography>
                    <Box className="card-overlay">
                        {/* <Typography variant='h6' sx={{color: 'white', textAlign: 'center', alignItems: 'center', justifyContent: 'center', lineHeight: '450px', fontSize: '1.5rem'}}>
                            Xem Chi Tiết
                        </Typography>  */}
                        <div onClick={handleOpen} className='fastViewDetails'><GridMaximize2O className='iconFastView' /></div>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: 400,
                                bgcolor: 'background.paper',
                                border: '2px solid #000',
                                boxShadow: 24,
                                p: 4,
                            }}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Title
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2, margin: "20px" }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat non iste laboriosam ullam ab maxime quisquam, possimus totam officiis ratione perspiciatis veritatis unde beatae, nihil incidunt? Quo repellendus cupiditate fugit.
                                </Typography>
                            </Box>
                        </Modal>
                    </Box>
                </CardContent>
            </Card >
        </>
    )
}