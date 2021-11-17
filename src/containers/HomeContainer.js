import React from 'react';

import Header from "../components/Header";
import SliderMain from "../components/SliderMain";
import Footer from "../components/Footer";
import "../components/main-banner.css";

const HomeContainer = () => {
	return (
		<>
			<Header/>
			<SliderMain/>
			<Footer/>
		</>
	)
}

export default HomeContainer;
