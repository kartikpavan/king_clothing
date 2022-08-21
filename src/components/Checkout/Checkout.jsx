import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
const Checkout = () => {
	const { cartItems, removeSingleItem, decreaseQuantity, addItemToCart } =
		useContext(CartContext);
	// const { id, name, imageUrl, price, fakePrice } = cartItems;

	return (
		<div className="mx-auto max-w-[80%]">
			<div className="overflow-x-auto">
				<table className="table w-full text-xl">
					{/* <!-- head --> */}
					<thead>
						<tr>
							<th>Product </th>
							<th>Description</th>
							<th>Quantity</th>
							<th>Price</th>
							<th>Remove</th>
						</tr>
					</thead>
					<tbody>
						{/* <!-- row 1 --> */}
						{cartItems.map((item) => {
							const { id, name, imageUrl, price, quantity } = item;
							return (
								<tr key={id}>
									<td className="w-32">
										<img src={imageUrl} alt="/" />
									</td>
									<td>{name}</td>
									<td className="cursor-pointer">
										<span onClick={() => decreaseQuantity(item)}>&#9665;</span>
										{quantity}
										<span onClick={() => addItemToCart(item)}>&#9655;</span>
									</td>
									<td>₹{price}</td>
									<td onClick={() => removeSingleItem(item)}>
										<button className="btn btn-outline btn-sm">X</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Checkout;
