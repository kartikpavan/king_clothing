import React from "react";
import { BsGoogle } from "react-icons/bs";

import { firebaseApp, db } from "../utils/firebase.config";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

const Login = () => {
	const auth = getAuth(firebaseApp);
	const provider = new GoogleAuthProvider();

	const signIn = async () => {
		const { user } = await signInWithPopup(auth, provider);
		console.log("user", user);
		await createUserDocumentFromAuth(user);
	};

	const createUserDocumentFromAuth = async (user) => {
		const userDocRef = doc(db, "users", user.uid);
		const userSnapshot = await getDoc(userDocRef);

		if (!userSnapshot.exists()) {
			const { displayName, email } = user;
			const createdAt = new Date();
			try {
				await setDoc(userDocRef, {
					displayName,
					email,
					createdAt,
				});
			} catch (error) {
				console.log(error.message);
			}
		}
		return userDocRef;
	};

	return (
		<div className="p-6 w-screen h-[80vh]">
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
