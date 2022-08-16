import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import {
	signInWithGooglePopUp,
	createUserDocumentFromAuth,
	customLogin,
} from "../../utils/firebase.config";

const defaultFormFields = {
	email: "",
	password: "",
};

const LoginForm = () => {
	const [err, setErr] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;
	//State coming from Context API
	let navigate = useNavigate();

	const handleChange = (e) => {
		const { value, name } = e.target;
		setFormFields({ ...formFields, [name]: value });
	};

	//CUSTOM SIGN IN METHOD
	const submitHandler = async (e) => {
		e.preventDefault();
		try {
			const { user } = await customLogin(email, password);
			setFormFields(defaultFormFields);
			navigate("/", { replace: true });
		} catch (error) {
			setErr(error.message);
			console.log("error while registering user->", error.message);
		}
	};

	//GOOGLE SIGN IN METHOD
	const googleSignIn = async () => {
		const { user } = await signInWithGooglePopUp();
		navigate("/", { replace: true });
		await createUserDocumentFromAuth(user);
	};

	return (
		<div className="max-w-sm w-full">
			<div className="text-4xl max-w-md w-full mb-4">
				<h1 className="mb-2">Already have an Account ?</h1>
				<p className="tracking-wider mb-2 text-[20px] text-gray-500">
					Sign In with your Email and Password
				</p>
				{err ? (
					<span className="bg-red-300 p-1 text-red-900 text-[20px]">{err}</span>
				) : null}
				<form method="POST" onSubmit={submitHandler} className="flex flex-col gap-2 ">
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

					<button
						type={"submit"}
						className="border border-black py-2 mt-3 text-2xl max-w-sm   w-full bg-black text-white hover:text-black hover:bg-white duration-200"
					>
						Sign In
					</button>
				</form>
			</div>
			<div className="divider">OR</div>
			<div className="flex items-center justify-around max-w-sm w-full">
				<button
					className="btn btn-info max-w-sm w-full rounded-none flex items-center gap-3 hover:scale-105 duration-150"
					onClick={googleSignIn}
				>
					<BsGoogle size={22} />
					SIGN IN
				</button>
			</div>
		</div>
	);
};

export default LoginForm;
