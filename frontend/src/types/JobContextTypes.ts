import { JobElementType } from "../types/JobElementType";

export type JobContextType = {
  jobList: JobElementType[],
	isLoaded: boolean,
	setIsLoaded: React.Dispatch<React.SetStateAction<boolean>>
};

export type ContextProviderProps = {
  children: React.ReactNode;
};