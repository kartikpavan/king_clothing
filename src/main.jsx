import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./context/userContext";
import { ProductContextProvider } from "./context/ProductContext";
import { CartContextProvider } from "./context/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<UserContextProvider>
			<ProductContextProvider>
				<CartContextProvider>
					<App />
				</CartContextProvider>
			</ProductContextProvider>
		</UserContextProvider>
	</BrowserRouter>
);
