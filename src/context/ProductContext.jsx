import { createContext, useContext, useEffect, useState } from "react";
import shop_data from "../data/shop-data.json";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
	const [products, setProducts] = useState(shop_data);
	return (
		<ProductContext.Provider value={{ products, setProducts }}>
			{children}
		</ProductContext.Provider>
	);
};
