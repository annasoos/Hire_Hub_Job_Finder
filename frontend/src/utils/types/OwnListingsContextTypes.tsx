import { JobElementType } from "./JobElementType";

export type OwnListingsContextType = {
  ownList: JobElementType[],
	setOwnList: React.Dispatch<React.SetStateAction<JobElementType[]>>,
	isLoaded: boolean,
	setIsLoaded: React.Dispatch<React.SetStateAction<boolean>>,
	count: number,
	setCount: React.Dispatch<React.SetStateAction<number>>,
	setPage: React.Dispatch<React.SetStateAction<number>>,
};

export type ContextProviderProps = {
  children: React.ReactNode;
};