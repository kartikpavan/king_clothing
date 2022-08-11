import React from "react";
import { Categories } from "../components";

const Home = () => {
	return (
		<div className="p-6 w-screen flex justify-between flex-wrap gap-8">
			<Categories />
		</div>
	);
};

export default Home;
