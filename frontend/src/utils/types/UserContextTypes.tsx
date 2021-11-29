import { LoggedInUserType } from "./LoggedInUserType";

export type UserContextType = {
  loggedInUser: LoggedInUserType | null;
  setLoggedInUser: React.Dispatch<React.SetStateAction<LoggedInUserType | null>>
}

export type ContextProviderProps = {
	children: React.ReactNode
}