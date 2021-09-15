import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import Review from "./components/Review";
import Footer from "./components/Footer";
import './App.less';

function App() {
	return (
		<>
			<Header />
			<Hero />
			<Featured />
			<Review />
			<Footer />
		</>
	);
}

export default App;
