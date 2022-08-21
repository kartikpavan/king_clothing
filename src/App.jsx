import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Authentication from "./pages/Authentication";
import Shop from "./pages/Shop";
import { Cart, Checkout, Footer, Navbar } from "./components/index.js";

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
						<Route path="/shop" element={<Shop />} />
						<Route path="/about" element={<About />} />
						<Route path="/login" element={<Authentication />} />
						<Route path="/checkout" element={<Checkout />} />
					</Routes>
					<Footer />
				</div>
				<div className="drawer-side">
					<label for="my-drawer" className="drawer-overlay"></label>
					<ul className="menu w-80 overflow-y-auto bg-base-100 p-4 text-base-content">
						{/* <!-- Sidebar content here --> */}
						<Cart />
					</ul>
				</div>
			</div>
		</div>
	);
};

export default App;
