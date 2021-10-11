import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { JobResponseType } from "../types/JobResponseType";
import { JobElementType } from "../types/JobElementType";

type JobContextType = {
  jobList: JobElementType[],
	isLoaded: boolean,
	setIsLoaded: React.Dispatch<React.SetStateAction<boolean>>
};

type ContextProviderProps = {
  children: React.ReactNode;
};

export const JobContext = createContext({} as JobContextType);

async function getData(url: string): Promise<JobResponseType> {
  let response = await axios.get(url);
  let res = await response;
  return res.data;
}

export const JobContextProvider = ({ children }: ContextProviderProps) => {
  const [jobList, setJobList] = useState<JobElementType[]>([] as JobElementType[]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
		if(!isLoaded){
			getData("http://localhost:8080/api/find-a-job").then((res) => {
				const newList = res.data.reverse();
				setJobList(newList);
				setIsLoaded(true);
			});
		}
  }, [isLoaded]);

  return (
    <JobContext.Provider value={{ jobList, isLoaded, setIsLoaded }}>{children}</JobContext.Provider>
  );
};
