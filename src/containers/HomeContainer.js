import React from 'react';
import Header from "../components/Header";
import Banner from "../components/Banner";
import "../components/main-banner.css";
import {Container} from "react-bootstrap";
import Slider from "../components/Slider";
import WhoSection from "../components/WhoSection";

const HomeContainer = () => {
    return  (
        <>
            <Container className="main-banner" fluid>
                <Header />
                <Banner />
            </Container>


            {/*<Banner />*/}
        </>
    )
}

export default HomeContainer;