import { useContext, useEffect, useState } from "react";
import { useHistory } from 'react-router';
//design & components
import { Pagination } from 'antd';
import { FilterBar } from "../FilterBar/FilterBar";
import { FavButton } from "../FavButton/FavButton";
import { cyan, darkBlue, lightgray, white } from "../../style_guide";
import { LoadingText, JobListSection,  JobContainer, JobContent, Position, Level, Location, Company, Skills, Description } from "../JobList/JobList.style";
//types & context & function
import { JobObjectWithID } from "../../utils/types/JobElementType";
import { JobContext } from "../../utils/context/JobContext";
import { LINKS_PER_PAGE } from "../../utils/functions/getQueryVariable";
import { generateUniqueID } from "../../utils/functions/generateUniqueID";

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

	const items = jobContext.jobList.map(job => { 
    return {uid: generateUniqueID(), value: job};
  });

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
          {items.map((job: JobObjectWithID , index: number) => (
            <JobContent key={job.uid} color={darkBlue}>
							<FavButton job={job.value} />
              <Position color={white}>
                <b>{job.value.position}</b>
              </Position>
              {job.value.level ? (
                <Level color={lightgray}> - {job.value.level} </Level>
              ) : null}
              <Location color={cyan}> {job.value.location} </Location>
              <Company color={lightgray}> {job.value.company} </Company>
              <Skills color={cyan}> {job.value.skills} </Skills>
              <Description color={white}> {job.value.description} </Description>
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
