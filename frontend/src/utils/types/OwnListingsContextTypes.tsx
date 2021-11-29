import { JobElementType } from "./JobElementType";

export type OwnListingsContextType = {
  ownList: JobElementType[],
	setOwnList: React.Dispatch<React.SetStateAction<JobElementType[]>>,
	count: number,
	setCount: React.Dispatch<React.SetStateAction<number>>,
	page: number,
	setPage: React.Dispatch<React.SetStateAction<number>>,
};

export type ContextProviderProps = {
  children: React.ReactNode;
};