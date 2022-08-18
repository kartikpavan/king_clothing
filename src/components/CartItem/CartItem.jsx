const CartItem = ({ cartItem }) => {
	const { name, quantity } = cartItem;
	return (
		<div>
			<li>
				<h2>{name}</h2>
				<span>{quantity}</span>
			</li>
		</div>
	);
};

export default CartItem;
