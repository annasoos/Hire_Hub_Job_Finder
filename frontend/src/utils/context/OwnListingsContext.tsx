import { createContext, useState, useEffect } from "react";
import { useQuery } from '@apollo/client';
// types
import { JobElementType } from "../types/JobElementType";
import { OwnListingsContextType, ContextProviderProps } from "../types/OwnListingsContextTypes";
// queries
import { OWN_LISTINGS_QUERY } from "../GqlQueries";
import { getQueryVariables } from "../functions/getQueryVariable";

export const OwnListingsContext = createContext({} as OwnListingsContextType);

export const OwnListingsContextProvider = ({ children }: ContextProviderProps) => {
  const [ownList, setOwnList] = useState<JobElementType[]>([] as JobElementType[]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
	const [count, setCount] = useState<number>(0);
	const [page, setPage] = useState<number>(1);
	const queryVariables = getQueryVariables(page, 4);
	const { data, loading, error, refetch } = useQuery(OWN_LISTINGS_QUERY,{
    variables: queryVariables
  });

  useEffect(() => {
		if (!loading && !error){
			setIsLoaded(true)
			setOwnList(data.ownListings.jobs)
			setCount(data.ownListings.count)
		}
  }, [data, loading, error]);

	useEffect(() => {
		refetch()
	}, [isLoaded])

  return (
    <OwnListingsContext.Provider value={{ ownList, setOwnList, isLoaded, setIsLoaded, count, setCount, setPage }}>{children}</OwnListingsContext.Provider>
  );
};
