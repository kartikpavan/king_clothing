import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_APP_AUTHDOMAIN,
	projectId: import.meta.env.VITE_APP_PROJECT_ID,
	storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_APP_ID,
};

// initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);

//Google LOGIN
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

//Custom Sign Up
export const customSignIn = async (email, password) => {
	if (!email || !password) return;
	return await createUserWithEmailAndPassword(auth, email, password);
};

//Custom Login
export const customLogin = async (email, password) => {
	if (!email || !password) return;
	return await signInWithEmailAndPassword(auth, email, password);
};

//Creating User Document from Google Authentication
export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
	const userDocRef = doc(db, "users", userAuth.uid);
	const userSnapshot = await getDoc(userDocRef);

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalInfo,
			});
		} catch (error) {
			console.log("Error occoured while creating DOCUMENT:: ", error.message);
		}
		return userDocRef;
	}
};

//Sign Out User
export const signOutUser = async () => signOut(auth);
