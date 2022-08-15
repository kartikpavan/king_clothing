import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);

	return (
		<UserContext.Provider value={{ currentUser, setCurrentUser }}>
			{children}
		</UserContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(UserContext);
};