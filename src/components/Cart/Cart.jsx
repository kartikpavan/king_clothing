import React from "react";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
	return (
		<div>
			<div className="h-[89vh] text-xl">{/* <CartItem/> */}</div>

			<button className="btn btn-lg max-w-sm w-full text-xl">Go to Checkout</button>
		</div>
	);
};

export default Cart;
