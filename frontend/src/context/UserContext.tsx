//cheat: https://www.youtube.com/watch?v=9726Yq3Scjk

import { createContext, useState, useEffect } from 'react';
import jwt from "jsonwebtoken";
import { LoggedInUserType } from "../types/LoggedInUserType";

type UserContextType = {
  loggedInUser: LoggedInUserType | null;
  setLoggedInUser: React.Dispatch<React.SetStateAction<LoggedInUserType | null>>
  setToken: React.Dispatch<React.SetStateAction<string | null>>
}

type ContextProviderProps = {
	children: React.ReactNode
}

export const UserContext = createContext({} as UserContextType);

export const UserContextProvider = ({children}: ContextProviderProps) => {
	const [loggedInUser, setLoggedInUser] = useState<LoggedInUserType | null>(null)
	const [token, setToken] = useState<string | null>(localStorage.getItem("token"));
	const tokenKey: string = process.env.REACT_APP_TOKEN_KEY!
	
  useEffect(() => {
		if (token) {
      jwt.verify(token, tokenKey, function (err, decoded) {
        if (decoded) {
          setLoggedInUser({
            firstName: decoded.firstName,
            lastName: decoded.lastName,
            email: decoded.email,
          });
        }
      });
    } else {
			setLoggedInUser(null)
		}
  }, [token]);

	return (
	<UserContext.Provider value={{loggedInUser, setLoggedInUser, setToken}}>
		{children}
	</UserContext.Provider>
	)
}