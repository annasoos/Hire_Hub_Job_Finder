//cheat: https://www.youtube.com/watch?v=9726Yq3Scjk

import { createContext, useState, useEffect, useContext } from 'react';
import { useQuery } from '@apollo/client';
import { UserContextType, ContextProviderProps } from "../types/UserContextTypes";
import { LoggedInUserType } from '../types/LoggedInUserType';
import { ValidLoginContext } from './ValidLoginContext';
import { GET_USER } from '../GqlQueries';

export const UserContext = createContext({} as UserContextType);

export const UserContextProvider = ({children}: ContextProviderProps) => {
	const { validLogin } = useContext(ValidLoginContext);
	const [loggedInUser, setLoggedInUser] = useState<LoggedInUserType | null>(null)
	const { refetch } = useQuery(GET_USER);

	useEffect(() => {
		if (validLogin === true) {
				refetch().then(res => setLoggedInUser({
					userId: res.data.currentUser.id,
					firstName: res.data.currentUser.firstName, 
					lastName: res.data.currentUser.lastName, 
					email: res.data.currentUser.email
				}))
			} else {
				setLoggedInUser(null)
			}
	}, [validLogin])

	return (
	<UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
		{children}
	</UserContext.Provider>
	)
}