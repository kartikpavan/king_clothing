import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import emptyCart from "../../assets/empty.png";

const Checkout = () => {
	const { cartItems, removeSingleItem, decreaseQuantity, addItemToCart, cartTotal } =
		useContext(CartContext);
	// const { id, name, imageUrl, price, fakePrice } = cartItems;

	return (
		<div className="mx-auto max-w-[80%]">
			{!cartItems.length == 0 ? (
				<div>
					<div className="overflow-x-auto border-b-4">
						<table className="table w-full text-xl">
							{/* <!-- head --> */}
							<thead>
								<tr>
									<th>Product </th>
									<th>Description</th>
									<th>Quantity</th>
									<th></th>
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
												<span onClick={() => decreaseQuantity(item)}>
													&#9665;
												</span>
												{quantity}
												<span onClick={() => addItemToCart(item)}>
													&#9655;
												</span>
											</td>
											<td className="text-sm">x</td>
											<td>₹{price}</td>
											<td onClick={() => removeSingleItem(item)}>
												<button className="btn btn-outline btn-error btn-sm">
													X
												</button>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
					<h1 className="text-right text-2xl font-semibold">TOTAL : {cartTotal}</h1>
				</div>
			) : (
				<div className="flex h-full w-full items-center justify-center">
					<img src={emptyCart} alt="/" />{" "}
				</div>
			)}
		</div>
	);
};

export default Checkout;
