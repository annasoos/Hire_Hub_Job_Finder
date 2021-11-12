import { useContext } from "react";
//design & components
import { Pagination } from 'antd';
import { FilterBar } from "../FilterBar/FilterBar";
import { FavButton } from "../FavButton/FavButton";
import { cyan, darkBlue, lightgray, white } from "../../style_guide";
import { LoadingText, JobListSection,  JobContainer, JobContent, Position, Level, Location, Company, Skills, Description } from "../JobList/JobList.style";
//types & context
import { JobElementType } from "../../utils/types/JobElementType";
import { JobContext } from "../../utils/context/JobContext";

export const JobList = () => {

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
				<Pagination
					className="pagination up"
      		total={jobContext.count}
      		defaultPageSize={5}
      		defaultCurrent={1}
    		/>

        <JobContainer>
          {jobContext.jobList.map((job: JobElementType, index: number) => (
            <JobContent key={index} color={darkBlue}>
							<FavButton job={job} />
              <Position color={white}>
                <b>{job.position}</b>
              </Position>
              {job.level ? (
                <Level color={lightgray}> - {job.level} </Level>
              ) : null}
              <Location color={cyan}> {job.location} </Location>
              <Company color={lightgray}> {job.company} </Company>
              <Skills color={cyan}> {job.skills} </Skills>
              <Description color={white}> {job.description} </Description>
            </JobContent>
          ))}
        </JobContainer>

				<Pagination
					className="pagination down"
      		total={jobContext.count}
      		defaultPageSize={5}
      		defaultCurrent={1}
    		/>
      </JobListSection>
    )
  }
}
