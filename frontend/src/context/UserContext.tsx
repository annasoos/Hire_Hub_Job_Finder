//cheat: https://www.youtube.com/watch?v=9726Yq3Scjk

import { createContext, useState } from 'react';
import { LoggedInUserType } from "../types/LoggedInUserType";

type UserContextType = {
    loggedInUser: LoggedInUserType | null;
    setLoggedInUser: React.Dispatch<React.SetStateAction<LoggedInUserType | null>>
}

type ContextProviderProps = {
	children: React.ReactNode
}

export const UserContext = createContext({} as UserContextType);

export const UserContextProvider = ({children}: ContextProviderProps) => {
	const [loggedInUser, setLoggedInUser] = useState<LoggedInUserType | null>(null)
	return (
	<UserContext.Provider value={{loggedInUser, setLoggedInUser}}>
		{children}
	</UserContext.Provider>
	)
}