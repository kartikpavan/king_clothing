import React, { useContext } from "react";
import CartItem from "../CartItem/CartItem";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
const Cart = () => {
	const { cartItems, removeAllCartItems } = useContext(CartContext);
	const navigate = useNavigate();
	return (
		<div>
			<div className=" text-xl">
				<div className="h-[50px] w-full">
					<button
						className="btn btn-outline btn-error btn-sm absolute right-5 mb-2 rounded-none text-gray-500"
						onClick={removeAllCartItems}
					>
						Clear All
					</button>
				</div>

				{cartItems.map((item) => {
					return <CartItem key={item.id} cartItem={item} />;
				})}
			</div>
			<div className="fixed bottom-5 mx-auto w-[90%]">
				<button
					onClick={() => navigate("/checkout", { replace: true })}
					className="btn btn-outline btn-lg w-full max-w-sm rounded-none"
				>
					Go to Checkout
				</button>
			</div>
		</div>
	);
};

export default Cart;
