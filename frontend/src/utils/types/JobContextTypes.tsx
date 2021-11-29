import { JobElementType } from "./JobElementType";

export type JobContextType = {
  jobList: JobElementType[],
	setJobList: React.Dispatch<React.SetStateAction<JobElementType[]>>,
	count: number,
	setCount: React.Dispatch<React.SetStateAction<number>>,
	page: number,
	setPage: React.Dispatch<React.SetStateAction<number>>,
	jobsPerPage: number,
	setJobsPerPage: React.Dispatch<React.SetStateAction<number>>,
};

export type ContextProviderProps = {
  children: React.ReactNode;
};