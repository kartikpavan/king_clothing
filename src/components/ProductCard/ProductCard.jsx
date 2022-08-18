import React from "react";

const ProductCard = ({ product }) => {
	const { id, name, imageUrl, price, fakePrice } = product;
	return (
		<div
			id="product-card-container"
			className="w-full flex flex-col h-[350px] items-center relative group mb-4"
		>
			<img
				id="product-image"
				src={imageUrl}
				alt="/"
				className="w-full h-[95%] object-cover mb-3 hover:opacity-80"
			/>
			<div id="footer" className="w-full h-10 text-xl flex justify-between">
				<span id="product-name">{name}</span>
				<span id="product-price">
					<span className="bg-green-300 px-2 mx-2 text-sm">
						{Math.ceil((1 - price / fakePrice) * 100)}% OFF
					</span>
					<span className="mx-2">₹{price}</span>
					<span className="line-through text-red-600">₹{fakePrice}</span>
				</span>
			</div>
			<button className="text-2xl border border-black bg-black text-white p-2 hover:text-black hover:bg-white duration-300 w-[80%] opacity-70 absolute top-60 hidden hover:opacity-90 group-hover:block">
				Add to Cart
			</button>
		</div>
	);
};

export default ProductCard;
