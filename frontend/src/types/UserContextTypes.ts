import { LoggedInUserType } from "../types/LoggedInUserType";

export type UserContextType = {
  loggedInUser: LoggedInUserType | null;
  setLoggedInUser: React.Dispatch<React.SetStateAction<LoggedInUserType | null>>
  setToken: React.Dispatch<React.SetStateAction<string | null>>
}

export type ContextProviderProps = {
	children: React.ReactNode
}