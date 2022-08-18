import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);

	const addItemToCart = (productToAdd) => {
		//Check whether item already exists
		// if yes then increment it
		// if no then create a new Product to add to cart
	};
	return <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
};
