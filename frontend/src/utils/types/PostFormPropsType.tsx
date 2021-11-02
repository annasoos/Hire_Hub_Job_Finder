import { LoggedInUserType } from "./LoggedInUserType"

export type PostFormPropsType = {
	isLoggedIn: boolean,
	user: LoggedInUserType | null
}