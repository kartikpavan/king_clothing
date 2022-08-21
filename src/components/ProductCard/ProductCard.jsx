import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ProductCard = ({ product }) => {
	const { id, name, imageUrl, price, fakePrice } = product;
	const { addItemToCart } = useContext(CartContext);
	return (
		<div className="group relative mb-4 flex h-[350px] w-full flex-col items-center ">
			<img
				src={imageUrl}
				alt="/"
				className="mb-3 h-[95%] w-full object-cover hover:opacity-80"
			/>
			<div id="footer" className="flex h-10 w-full justify-between text-xl">
				<span>{name}</span>
				<span>
					<span className="mx-2 bg-green-300 px-2 text-sm">
						{Math.ceil((1 - price / fakePrice) * 100)}% OFF
					</span>
					<span className="mx-2">₹{price}</span>
					<span className="text-red-600 line-through">₹{fakePrice}</span>
				</span>
			</div>
			<button
				className="add-to-cart-btn"
				onClick={() => {
					addItemToCart(product);
				}}
			>
				Add to Cart
			</button>
		</div>
	);
};

export default ProductCard;
