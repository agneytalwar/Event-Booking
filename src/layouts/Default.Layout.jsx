import React from "react";
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.Component";
import Navbar from "../components/Navbar/Navbar.Component";

const DefaultLayout = (props) => {
    return (
        <div>
            <Navbar />
            {/* <HeroCarousel />
            <EntertainmentCardSlider /> */}
            {props.children}
            <div>Footer</div>
        </div>
    );
};

export default DefaultLayout;