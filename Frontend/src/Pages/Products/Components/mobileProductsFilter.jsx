import { Button, Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';
export default function MobileProductsFilter() {
    let [toggleFilter, setToggleFilter] = useState(false);
    const [open, setOpen] = React.useState(true);

    const handleToggleFilter = () => setToggleFilter(!toggleFilter);
    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <>
            <Button sx={{
                color: 'black', border: '1px solid gray', display: {
                    xs: 'block',
                    md: 'none'
                },
                position: 'absolute',
                right: '15px',
                top: '-50px',
                textTransform: 'none'
            }} onClick={handleToggleFilter}>Bộ lọc</Button>
            <div className={`filter-sidebar ${(toggleFilter === true) ? 'filter-active' : ''}`}>
                <div className="btn-close" onClick={handleToggleFilter}><CloseIcon /></div>
                <div className="filter-by-lighting-type">
                    <ListItemButton onClick={handleClick}>
                        <ListItemIcon>
                            Danh mục sản phẩm
                        </ListItemIcon>
                        <ListItemText primary="" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Đèn downlight" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Đèn ốp trần" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Đèn sân vườn" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Đèn rọi ray" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Đèn panel" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Đèn led dây" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Đèn bulb" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Đèn tuýp" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Đèn smart" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Đèn gắn tường" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Đèn sự cố - emergency" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Đèn pha" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                </div>
            </div>
        </>
    )
}
