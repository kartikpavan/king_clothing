const CartItem = ({ cartItem }) => {
	const { name, quantity } = cartItem;
	return (
		<div>
			<li>
				<h2>NAME : {name}</h2>
				<span>Qty : {quantity}</span>
			</li>
		</div>
	);
};

export default CartItem;
