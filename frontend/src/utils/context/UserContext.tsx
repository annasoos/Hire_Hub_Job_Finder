//cheat: https://www.youtube.com/watch?v=9726Yq3Scjk

import { createContext, useState, useEffect } from 'react';
import jwt from "jsonwebtoken";
import { UserContextType, ContextProviderProps } from "../types/UserContextTypes";
import { LoggedInUserType } from '../types/LoggedInUserType';

export const UserContext = createContext({} as UserContextType);

export const UserContextProvider = ({children}: ContextProviderProps) => {
	const [loggedInUser, setLoggedInUser] = useState<LoggedInUserType | null>(null)
	const [token, setToken] = useState<string | null>(localStorage.getItem("token"));
	const [isLoaded, setIsLoaded] = useState<boolean>(false);
	const tokenKey: string = process.env.REACT_APP_TOKEN_KEY!
	
  useEffect(() => {
		if (token) {
      jwt.verify(token, tokenKey, function (err, decoded) {
        if (decoded) {
          setLoggedInUser({
						userId: decoded.userId,
            firstName: decoded.firstName,
            lastName: decoded.lastName,
            email: decoded.email,
          })
					setIsLoaded(true)
        } else if (err) {
					console.log(err)
				}
      });
    } else {
			setLoggedInUser(null)
		}
  }, [token, tokenKey, isLoaded]);

	return (
	<UserContext.Provider value={{loggedInUser, setLoggedInUser, setToken, setIsLoaded}}>
		{children}
	</UserContext.Provider>
	)
}