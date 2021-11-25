import { createContext, useState, useEffect } from "react";
import { useQuery } from '@apollo/client';
// types
import { JobElementType } from "../types/JobElementType";
import { FavouritesContextType, ContextProviderProps } from "../types/FavouritesContextTypes";
// queries
import { FAVOURITES_QUERY } from "../GqlQueries";
import { getQueryVariables } from "../functions/getQueryVariable";

export const FavouritesContext = createContext({} as FavouritesContextType);

export const FavouritesContextProvider = ({ children }: ContextProviderProps) => {
  const [favList, setFavList] = useState<JobElementType[]>([] as JobElementType[]);
	const [count, setCount] = useState<number>(0);
	const [page, setPage] = useState<number>(1);
	const queryVariables = getQueryVariables(page, 4);
	const { data, loading, error } = useQuery(FAVOURITES_QUERY,{
    variables: queryVariables
  });

  useEffect(() => {
		if (!loading && !error){
			setFavList(data.favourites.jobs)
			setCount(data.favourites.count)
		}
  }, [data, loading, error]);

  return (
    <FavouritesContext.Provider value={{ favList, setFavList, count, setCount, page, setPage }}>{children}</FavouritesContext.Provider>
  );
};