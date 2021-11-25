import { createContext, useState } from 'react';
import { ValidLoginContextType, ContextProviderProps } from "../types/ValidLoginContextTypes";

export const ValidLoginContext = createContext<ValidLoginContextType>({
		validLogin: false,
		setValidLogin: () => { }
});

export const ValidLoginContextProvider = ({children}: ContextProviderProps) => {
	
	const [validLogin, setValidLogin] = useState(false)
	
	return (
	<ValidLoginContext.Provider value={{validLogin, setValidLogin}}>
		{children}
	</ValidLoginContext.Provider>
	)
}