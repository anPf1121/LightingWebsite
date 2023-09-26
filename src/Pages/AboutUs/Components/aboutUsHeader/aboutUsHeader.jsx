import React from "react";
import StickyNav from "../../../Components/stickyNav";
import { Typography } from "@mui/material";
export default function AboutUsHeader() {
    return (
        <>
            <StickyNav />
            <div className="header-img">
                <div className="header-img-title">
                    <Typography sx={{
                        fontSize: {
                            sm: '2.5rem',
                            md: '3rem',
                            lg: '3.5rem',
                            xl: '6rem',
                        }, fontFamily: "'Cormorant Garamond', serif",
                        color: '#000',
                        textAlign: 'center'
                    }}>
                        Về chúng tôi
                    </Typography>
                </div>
                <img src="https://png.pngtree.com/thumb_back/fh260/background/20201111/pngtree-grey-abstract-watercolor-paint-background-image_468924.jpg" alt="cutest kitten" />
            </div>
        </>
    );
}
