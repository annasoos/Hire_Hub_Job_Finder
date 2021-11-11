import { LoggedInUserType } from "./LoggedInUserType";

export type UserContextType = {
  loggedInUser: LoggedInUserType | null;
  setLoggedInUser: React.Dispatch<React.SetStateAction<LoggedInUserType | null>>
  setToken: React.Dispatch<React.SetStateAction<string | null>>
	setIsLoaded: React.Dispatch<React.SetStateAction<boolean>>
}

export type ContextProviderProps = {
	children: React.ReactNode
}