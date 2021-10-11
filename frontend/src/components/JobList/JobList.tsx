import { useContext } from "react";
//design & components
import { FilterBar } from "../FilterBar/FilterBar";
import { CollapseBar } from "../Collapse/Collapse";
import { JobElementType } from "../../types/JobElementType";
import { cyan, lightgray, white } from "../../style_guide";
import { LoadingText, JobListSection,  JobContainer, JobContent, Position, Level, Location, Company, Skills, Description } from "../JobList/JobList.style";
//types & context
import { UserContext } from "../../context/UserContext";
import { JobContext } from "../../context/JobContext";

export const JobList = () => {

	const userContext = useContext(UserContext);
  const jobContext = useContext(JobContext);

  if (!jobContext.isLoaded) {
    return (
      <JobContainer>
        <LoadingText>Searching for the best carreer options...</LoadingText>
      </JobContainer>
    )
  } else {
    return (
      <JobListSection>
        <FilterBar />
        <JobContainer>
          {userContext.loggedInUser ? <CollapseBar /> : null}
          {jobContext.jobList.map((job: JobElementType, index: number) => (
            <JobContent key={index}>
              <Position color={white}>
                <b>{job.position}</b>
              </Position>
              {job.level.length > 0 ? (
                <Level color={lightgray}> - {job.level} </Level>
              ) : null}
              <Location color={cyan}> {job.location} </Location>
              <Company color={lightgray}> {job.company} </Company>
              <Skills color={cyan}>
                {job.skills.map((skill: string, index: number) => (
                  <span key={index}>{skill}&nbsp;&nbsp;&nbsp;</span>
                ))}
              </Skills>
              <Description color={white}> {job.description} </Description>
            </JobContent>
          ))}
        </JobContainer>
      </JobListSection>
    )
  }
}
