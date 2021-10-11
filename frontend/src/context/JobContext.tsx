import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { JobResponseType } from "../types/JobResponseType";
import { JobElementType } from "../types/JobElementType";

type JobContextType = {
  jobList: JobElementType[]
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

  useEffect(() => {
    getData("http://localhost:8080/api/find-a-job").then((res) => {
      const newList = res.data.reverse();
      setJobList(newList);
    });
  }, []);

  return (
    <JobContext.Provider value={{ jobList }}>{children}</JobContext.Provider>
  );
};
