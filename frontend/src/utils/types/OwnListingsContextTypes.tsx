import { JobElementType } from "./JobElementType";

export type OwnListingsContextType = {
  ownList: JobElementType[],
	setOwnList: React.Dispatch<React.SetStateAction<JobElementType[]>>,
	isLoaded: boolean,
	setIsLoaded: React.Dispatch<React.SetStateAction<boolean>>
};

export type ContextProviderProps = {
  children: React.ReactNode;
};