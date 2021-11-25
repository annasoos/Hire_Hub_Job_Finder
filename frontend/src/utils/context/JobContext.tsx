import { createContext, useState, useEffect } from "react";
import { useQuery } from '@apollo/client';
// types
import { JobElementType } from "../types/JobElementType";
import { JobContextType, ContextProviderProps } from "../types/JobContextTypes";
// queries
import { FEED_QUERY } from "../GqlQueries";
import { openNotificationWithIcon } from "../functions/Notification";
import { getQueryVariables } from "../functions/getQueryVariable";

export const JobContext = createContext({} as JobContextType);

export const JobContextProvider = ({ children }: ContextProviderProps) => {
  const [jobList, setJobList] = useState<JobElementType[]>([] as JobElementType[]);
  const [count, setCount] = useState<number>(0);
	const [page, setPage] = useState<number>(1);
	const [jobsPerPage, setJobsPerPage] = useState<number>(3);
	const queryVariables = getQueryVariables(page, jobsPerPage);
	const { data, loading, error } = useQuery(FEED_QUERY,{
    variables: queryVariables
  });

  useEffect(() => {
		if (!loading && !error){
			setJobList(data.feed.jobs)
			setCount(data.feed.count)
		} else if (error) {
			openNotificationWithIcon('error', 'Error', 'Something went wrong. Please try again later.')
		}
  }, [data, loading, error]);

  return (
    <JobContext.Provider value={{ jobList, setJobList, count, setCount, page, setPage, jobsPerPage, setJobsPerPage }}>{children}</JobContext.Provider>
  );
};
