import { createContext, useState } from 'react';
import { ValidLoginContextType, ContextProviderProps } from "../types/ValidLoginContextTypes";

export const ValidLoginContext = createContext<ValidLoginContextType>({} as ValidLoginContextType);

export const ValidLoginContextProvider = ({children}: ContextProviderProps) => {
	
	const [validLogin, setValidLogin] = useState(localStorage.getItem("token") !== null)
	
	return (
	<ValidLoginContext.Provider value={{validLogin, setValidLogin}}>
		{children}
	</ValidLoginContext.Provider>
	)
}