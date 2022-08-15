import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Authentication from "./pages/Authentication";
import About from "./pages/About";
import { Footer, Navbar, Shop } from "./components/index.js";
const App = () => {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/shop" element={<Shop />} />
				<Route exact path="/about" element={<About />} />
				<Route exact path="/login" element={<Authentication />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
