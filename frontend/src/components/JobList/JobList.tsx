import { useState, useEffect } from "react";
import { getData } from "../../functions/Fetch";
import { FilterBar } from "../FilterBar/FilterBar";
import { IJob } from "../../interfaces/IJob";
import { cyan, lightgray, white} from "../../style_guide";
import { LoadingText, JobContainer, JobContent, Position, Level, Location, Company, Skills, Description } from "./JobList.style";


export const JobList = () => {
	const [data, setData] = useState<IJob[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
	
  useEffect(() => {
		getData("http://localhost:8080/api/find-a-job").then(setData);
    setTimeout(() => setIsLoaded(true), 1500);
  }, []);
	
	
  if (!isLoaded) {
		return (
			<JobContainer>
        <LoadingText>Searching for the best carreer options...</LoadingText>
      </JobContainer>
    );
  } else {
		return (
			<>
        <FilterBar />
        <JobContainer>
          {data.map((job: IJob, index: number) => (
						<JobContent key={index}>
              <Position color={white}>
                <b>{job.position}</b>
              </Position>
              <Level color={lightgray}> - {job.level} </Level>
              <Location color={cyan}> {job.location} </Location>
              <Company color={lightgray}> {job.company} </Company>
              <Skills color={cyan}>
                {job.skills.map((skill: string, index: number) => (
									<span key={index}> {skill} </span>
									))}
              </Skills>
              <Description color={white}> {job.description} </Description>
            </JobContent>
          ))}
        </JobContainer>
      </>
    );
  }
};