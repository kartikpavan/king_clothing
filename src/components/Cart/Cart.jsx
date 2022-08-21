import React, { useContext } from "react";
import CartItem from "../CartItem/CartItem";
import { CartContext } from "../../context/CartContext";
const Cart = () => {
	const { cartItems } = useContext(CartContext);
	return (
		<div>
			<div className="h-[89vh] text-xl">
				{cartItems.map((item) => {
					return <CartItem key={item.id} cartItem={item} />;
				})}
			</div>

			<button className="btn btn-lg w-full max-w-sm text-xl">Go to Checkout</button>
		</div>
	);
};

export default Cart;
