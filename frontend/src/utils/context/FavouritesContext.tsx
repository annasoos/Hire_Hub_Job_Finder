import { createContext, useState, useEffect } from "react";
import { useQuery } from '@apollo/client';
// types
import { JobElementType } from "../types/JobElementType";
import { FavouritesContextType, ContextProviderProps } from "../types/FavouritesContextTypes";
// queries
import { FAVOURITES_QUERY } from "../GqlQueries";

export const FavouritesContext = createContext({} as FavouritesContextType);

export const FavouritesContextProvider = ({ children }: ContextProviderProps) => {
  const [favList, setFavList] = useState<JobElementType[]>([] as JobElementType[]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
	const { data, loading, error, refetch } = useQuery(FAVOURITES_QUERY);

  useEffect(() => {
		if (!loading && !error){
			setIsLoaded(true)
			setFavList(data.favourites.jobs)
		}
  }, [data, loading, error]);

	useEffect(() => {
		refetch()
	}, [isLoaded, refetch])

  return (
    <FavouritesContext.Provider value={{ favList, setFavList, isLoaded, setIsLoaded }}>{children}</FavouritesContext.Provider>
  );
};