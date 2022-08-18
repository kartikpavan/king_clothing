import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Authentication from "./pages/Authentication";
import Shop from "./pages/Shop";
import { Cart, Footer, Navbar } from "./components/index.js";

const App = () => {
	return (
		<div>
			<div className="drawer drawer-end">
				<input id="my-drawer" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content">
					{/* <!-- Page content here --> */}
					<Navbar />
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/shop" element={<Shop />} />
						<Route exact path="/about" element={<About />} />
						<Route exact path="/login" element={<Authentication />} />
					</Routes>
					<Footer />
				</div>
				<div className="drawer-side">
					<label for="my-drawer" className="drawer-overlay"></label>
					<ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
						{/* <!-- Sidebar content here --> */}
						<Cart />
					</ul>
				</div>
			</div>
		</div>
	);
};

export default App;
