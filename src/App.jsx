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
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Authentication />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/about" element={<About />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
