import React from 'react'
import StickyNav from './../../../Components/stickyNav'
export default function HomeHeader() {
    return (
        <>
            <StickyNav/>
            <div className="header-img">
                <div className="header-img-title">
                    <div className="main-title">
                        This Is Main Title
                    </div>
                    <div className="sub-title">
                        This Is Sub Title
                    </div>
                </div>
                <img src="https://www.sensio.co.uk/images/kitchen-home-page-slider-2017.jpg" alt="" />
            </div>
        </>
    )
}