import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
const CartItem = ({ cartItem }) => {
	const { name, quantity, imageUrl, price } = cartItem;
	const { removeSingleItem } = useContext(CartContext);
	return (
		<div>
			<div className="mb-4 flex gap-2 border-2 border-black p-2">
				<img src={imageUrl} alt={name} className="w-20" />
				<div>
					<h2> {name}</h2>
					<span className="text-[17px] text-gray-500">
						{quantity} x ₹{price}
					</span>
					<button
						className="text-sm italic text-red-600"
						onClick={() => removeSingleItem(cartItem)}
					>
						Remove
					</button>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
