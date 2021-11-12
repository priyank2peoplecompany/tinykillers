import React from 'react';

import Header from "../components/Header";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import "../components/main-banner.css";

const HomeContainer = () => {
	return (
		<>
			<Header/>
			<Slider/>
			<Footer/>
		</>
	)
}

export default HomeContainer;