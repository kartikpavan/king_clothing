import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);
	// const addCartItem = (cartItems, productToAdd) => {
	// 	// find if item already exists in the cart or not
	// 	// find() method return us a boolean i.e TRUE or FALSE
	// 	const existingItem = cartItems.find((item) => item.id === productToAdd.id);
	// 	// if item exists then increment the quantity
	// 	if (existingItem) {
	// 		// always return a new array , we do not mutate code
	// 		cartItems.map((item) => {
	// 			if (item.id === productToAdd.id) {
	// 				return { ...item, quantity: item.quantity + 1 };
	// 			} else {
	// 				return item;
	// 			}
	// 		});
	// 	}
	// 	//if item does not exists in the cart then create and return new array
	// 	return [...cartItems, { ...productToAdd, quantity: 1 }];
	// };

	const addItemToCart = (productToAdd) => {
		setCartItems((currentItem) => {
			if (currentItem.find((item) => item.id === productToAdd.id) == null) {
				return [...cartItems, { ...productToAdd, quantity: 1 }];
			} else {
				return currentItem.map((item) => {
					if (item.id === productToAdd.id) {
						return { ...item, quantity: item.quantity + 1 };
					} else {
						return item;
					}
				});
			}
		});
	};
	return (
		<CartContext.Provider value={{ cartItems, addItemToCart }}>{children}</CartContext.Provider>
	);
};
