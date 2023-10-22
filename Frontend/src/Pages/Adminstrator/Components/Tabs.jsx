import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Container } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ProductTable from './ProductTable';
import AddProductButton from './AddProductButton';
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography component={'span'}>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    }

}

export default function VerticalTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: "80vh", marginTop: '50px' }}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                <Tab label="Đơn Hàng" {...a11yProps(0)} />
                <Tab label="Sản Phẩm" {...a11yProps(1)} />
                <Tab label="Người Dùng" {...a11yProps(2)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <Typography component={'div'} variant='h5' sx={{ fontFamily: 'initial' }}>
                    Quản lý đơn hàng
                </Typography>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Typography component={'div'} variant='h5' sx={{ fontFamily: 'initial' }}>Quản lý sản phẩm</Typography>
                <AddProductButton handleCloseForm={handleClick} isOpen={open} />
                <ProductTable />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Container fixed>
                    <Typography component={'div'} variant='h5' sx={{ fontFamily: 'initial' }}>
                        Quản lý người dùng
                    </Typography>
                    <Button sx={{ width: '200px', height: '200px', border: '1px solid #dfdfdff2', background: '#dfdfdf7a', margin: '20px 0' }}>
                        <AddIcon sx={{ color: 'black' }} />
                    </Button>
                </Container>
            </TabPanel>
        </Box>
    );
}