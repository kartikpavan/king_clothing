import React from "react";
import {firebaseApp} from "../utils/firebase.config";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {BsGoogle} from "react-icons/bs";

const Login = () => {
	const auth = getAuth(firebaseApp);
	const provider = new GoogleAuthProvider();

	const signIn = async () => {
		const { user } = await signInWithPopup(auth, provider);
		console.log("user", user);
	};

	return (
		<div className="p-6 w-screen">
			<div>
				<button
					className="border border-black p-2 hover:bg-black hover:text-white text-lg flex items-center gap-3 hover:scale-105 duration-150"
					onClick={signIn}
				>
					<BsGoogle size={22} />
					SIGN IN
				</button>
			</div>
		</div>
	);
};

export default Login;
