import { useContext, useEffect, useState } from "react";
import { useHistory } from 'react-router';
//design & components
import { Pagination } from 'antd';
import { FilterBar } from "../FilterBar/FilterBar";
import { FavButton } from "../FavButton/FavButton";
import { cyan, darkBlue, lightgray, white } from "../../style_guide";
import { LoadingText, JobListSection,  JobContainer, JobContent, Position, Level, Location, Company, Skills, Description } from "../JobList/JobList.style";
//types & context & function
import { JobElementType } from "../../utils/types/JobElementType";
import { JobContext } from "../../utils/context/JobContext";
import { LINKS_PER_PAGE } from "../../utils/functions/getQueryVariable";

export const JobList = () => {
  const jobContext = useContext(JobContext);
	const history = useHistory();
	const [pageNum, setPageNum] = useState(1);
	/* const pageIndexParams = history.location.pathname.split('/');
  setPageNum(parseInt(pageIndexParams[pageIndexParams.length - 1])); */

	useEffect(() => {
		jobContext.setPage(pageNum);
		history.push(`/find-a-job/${pageNum}`)
	}, [pageNum, jobContext]);

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
      		defaultPageSize={LINKS_PER_PAGE}
      		defaultCurrent={1}
					current={pageNum}
					onChange={(page: number) => setPageNum(page)}
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
      		defaultPageSize={LINKS_PER_PAGE}
      		defaultCurrent={1}
					current={pageNum}
					onChange={(page: number) => setPageNum(page)}
    		/>
      </JobListSection>
    )
  }
}
