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
	const { data, loading, error } = useQuery(FEED_QUERY);

		/* This hook returns three items:
		loading: Is true as long as the request is still ongoing and the response hasn’t been received.
		error: In case the request fails, this field will contain information about what exactly went wrong.
		data: This is the actual data that was received from the server. */

  useEffect(() => {
		if (!loading && !error){
			setIsLoaded(true)
			setJobList(data.feed.jobs)
			console.log(data.feed.jobs)
		} else if (error) {
			openNotificationWithIcon('error', 'Error', 'Something went wrong. Please try again later.')
		}
  }, [data, loading, error]);

  return (
    <JobContext.Provider value={{ jobList, isLoaded, setIsLoaded }}>{children}</JobContext.Provider>
  );
};
