export type ValidLoginContextType = {
	validLogin: boolean
	setValidLogin: React.Dispatch<React.SetStateAction<boolean>>
}

export type ContextProviderProps = {
	children: React.ReactNode
}