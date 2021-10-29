import React from 'react';

import Header from "../components/Header";
import WhoSection from "../components/WhoSection";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import "../components/main-banner.css";

const HomeContainer = () => {
	return (
		<>
			<Header/>
			<WhoSection/>
			<Slider/>
			<Footer/>
		</>
	)
}

export default HomeContainer;