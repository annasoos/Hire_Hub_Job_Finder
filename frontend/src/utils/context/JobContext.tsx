import { createContext, useState, useEffect } from "react";
import { useQuery } from '@apollo/client';
// types
import { JobElementType } from "../types/JobElementType";
import { JobContextType, ContextProviderProps } from "../types/JobContextTypes";
// queries
import { FEED_QUERY } from "../GqlQueries";
import { openNotificationWithIcon } from "../functions/Notification";

export const JobContext = createContext({} as JobContextType);

export const JobContextProvider = ({ children }: ContextProviderProps) => {
  const [jobList, setJobList] = useState<JobElementType[]>([] as JobElementType[]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
	const { data, loading, error, refetch } = useQuery(FEED_QUERY);

  useEffect(() => {
		if (!loading && !error){
			setIsLoaded(true)
			setJobList(data.feed.jobs)
			setCount(data.feed.count)
		} else if (error) {
			openNotificationWithIcon('error', 'Error', 'Something went wrong. Please try again later.')
		}
  }, [data, loading, error]);

	useEffect(() => {
		refetch()
	}, [isLoaded])

  return (
    <JobContext.Provider value={{ jobList, setJobList, isLoaded, setIsLoaded, count }}>{children}</JobContext.Provider>
  );
};
