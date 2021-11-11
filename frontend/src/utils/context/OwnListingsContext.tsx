import { createContext, useState, useEffect } from "react";
import { useQuery } from '@apollo/client';
// types
import { JobElementType } from "../types/JobElementType";
import { OwnListingsContextType, ContextProviderProps } from "../types/OwnListingsContextTypes";
// queries
import { OWN_LISTINGS_QUERY } from "../GqlQueries";
import { openNotificationWithIcon } from "../functions/Notification";

export const OwnListingsContext = createContext({} as OwnListingsContextType);

export const OwnListingsContextProvider = ({ children }: ContextProviderProps) => {
  const [ownList, setOwnList] = useState<JobElementType[]>([] as JobElementType[]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
	const { data, loading, error, refetch } = useQuery(OWN_LISTINGS_QUERY);

  useEffect(() => {
		if (!loading && !error){
			setIsLoaded(true)
			setOwnList(data.ownListings.jobs)
		} else if (error) {
			openNotificationWithIcon("error", "Error", "Something went wrong and we couldn't load your own listings. Please try again later.")
		}
  }, [data, loading, error]);

	useEffect(() => {
		refetch()
	}, [isLoaded])

  return (
    <OwnListingsContext.Provider value={{ ownList, setOwnList, isLoaded, setIsLoaded }}>{children}</OwnListingsContext.Provider>
  );
};
