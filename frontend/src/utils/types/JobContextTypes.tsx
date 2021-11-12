import { JobElementType } from "./JobElementType";

export type JobContextType = {
  jobList: JobElementType[],
	setJobList: React.Dispatch<React.SetStateAction<JobElementType[]>>,
	isLoaded: boolean,
	setIsLoaded: React.Dispatch<React.SetStateAction<boolean>>,
	count: number,
};

export type ContextProviderProps = {
  children: React.ReactNode;
};