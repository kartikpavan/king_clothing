import React from "react";
import { LoginForm, SignUpForm } from "../components";
const Authentication = () => {
	return (
		<div className="p-6 w-screen md:h-[80vh] flex flex-col gap-10 md:flex-row items-center justify-around">
			<LoginForm />
			<SignUpForm />
		</div>
	);
};

export default Authentication;
