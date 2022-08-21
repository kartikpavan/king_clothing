import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);
	const [cartCount, setCartCount] = useState(0);

	// Calculate Cart Item Quantity everytime new item is added to cart
	useEffect(() => {
		setCartCount(cartItems.reduce((prev, current) => prev + current.quantity, 0));
	}, [cartItems]);

	// Add items to Cart
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

	// Decrement item from the cart
	const decreaseQuantity = () => {};

	//Remove Single Item from cart
	const removeSingleItem = (productToRemove) => {
		setCartItems((currentItem) => {
			return currentItem.filter((item) => item.id !== productToRemove.id);
		});
	};

	//Remove all items from the cart
	const removeAllCartItems = () => {
		setCartItems([]);
	};

	return (
		<CartContext.Provider
			value={{ cartItems, addItemToCart, cartCount, removeAllCartItems, removeSingleItem }}
		>
			{children}
		</CartContext.Provider>
	);
};
