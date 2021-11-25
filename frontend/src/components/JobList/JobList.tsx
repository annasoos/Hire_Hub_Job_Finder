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
import { generateUniqueID } from "../../utils/functions/generateUniqueID";

export const JobList = () => {
  const jobContext = useContext(JobContext);
	const history = useHistory();
	const [pageNum, setPageNum] = useState(1);
	const [spinner, setSpinner] = useState(true);

	setTimeout(function(){ setSpinner(false) }, 1500);

	useEffect(() => {
		jobContext.setPage(pageNum);
		history.push(`/find-a-job/${pageNum}`)
	}, [pageNum, jobContext]);

	const items = jobContext.jobList.map(job => { 
    return {uid: generateUniqueID(), value: job};
  });

  if (spinner) {
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
					showSizeChanger
					pageSize={jobContext.jobsPerPage}
					pageSizeOptions={['3', '5', '10', '20', '50']}
      		current={pageNum}
					onChange={(page: number) => setPageNum(page)}
					onShowSizeChange={(current: number, size: number) => jobContext.setJobsPerPage(size)}
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
					showSizeChanger
					pageSize={jobContext.jobsPerPage}
					pageSizeOptions={['3', '5', '10', '20', '50']}
      		current={pageNum}
					onChange={(page: number) => setPageNum(page)}
					onShowSizeChange={(current: number, size: number) => jobContext.setJobsPerPage(size)}
    		/>
      </JobListSection>
    )
  }
}
