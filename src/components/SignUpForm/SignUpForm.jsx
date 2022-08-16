import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { customSignIn, createUserDocumentFromAuth } from "../../utils/firebase.config";
const defaultFormFields = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const SignUpForm = () => {
	const [err, setErr] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;
	let navigate = useNavigate();

	const handleChange = (e) => {
		const { value, name } = e.target;
		setFormFields({ ...formFields, [name]: value });
	};

	const submitHandler = async (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			//! password and confirm password check
			setErr("..........Password Did not match ");
			return;
		}
		try {
			const { user } = await customSignIn(email, password);
			console.log(user);
			await createUserDocumentFromAuth(user, { displayName });
			setFormFields(defaultFormFields);
			navigate("/", { replace: true });
		} catch (error) {
			setErr(error.message);
			console.log("error while registering user->", error.message);
		}
	};

	return (
		<div className="text-4xl max-w-sm w-full mb-4">
			<h1 className="mb-2"> I do not have an Account</h1>
			<p className="tracking-wider mb-2 text-[20px] text-gray-500">
				Sign up with Email and Password
			</p>
			{err ? (
				<span className="bg-red-300 p-1 text-red-900 text-[20px]">{err.slice(10)}</span>
			) : null}
			<form method="POST" onSubmit={submitHandler} className="flex flex-col gap-2 ">
				<label className="text-[20px]">Display Name</label>
				<input
					type="text"
					required
					className="border border-black p-2 max-w-sm w-full"
					onChange={handleChange}
					name="displayName"
					value={displayName}
				/>
				<label className="text-[20px]">Email</label>
				<input
					type="email"
					required
					className="border border-black p-2 max-w-sm w-full"
					onChange={handleChange}
					name="email"
					value={email}
				/>
				<label className="text-[20px]">Password</label>
				<div className="relative">
					<input
						type={showPassword ? "text" : "password"}
						required
						className="border border-black p-2 max-w-sm w-full"
						onChange={handleChange}
						name={"password"}
						value={password}
					/>
					{showPassword ? (
						<AiFillEye
							className="absolute top-4 right-4"
							size={28}
							onClick={() => setShowPassword(!showPassword)}
						/>
					) : (
						<AiFillEyeInvisible
							className="absolute top-4 right-4"
							size={28}
							onClick={() => setShowPassword(!showPassword)}
						/>
					)}
				</div>
				<label className="text-[20px]">Confirm Password</label>
				<input
					type="password"
					required
					className="border border-black p-2 max-w-sm w-full"
					onChange={handleChange}
					name={"confirmPassword"}
					value={confirmPassword}
				/>
				<button
					type={"submit"}
					className="border border-black py-2 mt-3 text-2xl max-w-sm w-full bg-black text-white hover:text-black hover:bg-white duration-200"
				>
					Sign up
				</button>
			</form>
		</div>
	);
};

export default SignUpForm;
