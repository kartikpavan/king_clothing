import { useContext } from "react";
import { ProductCard } from "../components";
import { ProductContext } from "../context/ProductContext";

const Shop = () => {
	const { products } = useContext(ProductContext);
	return (
		<div className="p-6 w-full h-[80vh] mx-auto ">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-10 overflow-hidden">
				{products.map((item) => {
					return <ProductCard key={item.id} product={item} />;
				})}
			</div>
		</div>
	);
};

export default Shop;
