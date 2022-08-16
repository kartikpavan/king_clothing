import { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase.config";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		onAuthStateChangedListener((user) => {
			if (user) {
				createUserDocumentFromAuth(user);
			}
			setCurrentUser(user);
		});
		return () => {
			null;
		};
	}, []);

	return (
		<UserContext.Provider value={{ currentUser, setCurrentUser }}>
			{children}
		</UserContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(UserContext);
};
