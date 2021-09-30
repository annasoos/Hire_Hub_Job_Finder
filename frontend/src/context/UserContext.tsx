//cheat: https://www.youtube.com/watch?v=9726Yq3Scjk

import { createContext, useState } from 'react';
import { LoggedInUserType } from "../types/LoggedInUserType";

type UserContextType = {
    loggedInUser: LoggedInUserType;
    setLoggedInUser: React.Dispatch<React.SetStateAction<LoggedInUserType>>
}

type ContextProviderProps = {
	children: React.ReactNode
}

export const UserContext = createContext({} as UserContextType);

export const UserContextProvider = ({children}: ContextProviderProps) => {
	const [loggedInUser, setLoggedInUser] = useState({} as LoggedInUserType)
	return (
	<UserContext.Provider value={{loggedInUser, setLoggedInUser}}>
		{children}
	</UserContext.Provider>
	)
}