import React from "react";
//design & components
import { FilterBar } from "../FilterBar/FilterBar";
import { CardElementType } from "../../types/CardPropsType";
import { cyan, lightgray, white } from "../../style_guide";
import { LoadingText, JobContainer, JobContent, Position, Level, Location, Company, Skills, Description } from "../JobList/JobList.style";
//types & functions
import { getData } from "../../functions/Fetch";
import { JobListClassStateType } from "../../types/JobListClassStateType";

export class MyComponent2 extends React.Component<any, JobListClassStateType> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    getData("http://localhost:8080/api/find-a-job").then((res) => {
      const newList = res.data.reverse();
      this.setState({ data: newList });
    });
    setTimeout(() => this.setState({ isLoaded: true }), 1500);
  }

  render() {
    if (!this.state.isLoaded) {
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
            {this.state.data.map((job: CardElementType, index: number) => (
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
        </>
      );
    }
  }
}

// ----------------FUNCTIONAL VERSION -------------------
/*
export const JobList = () => {
	const [data, setData] = useState<CardElementType[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
	
  useEffect(() => {
		getData("http://localhost:8080/api/find-a-job")
			.then((res) =>  setData(res.data.reverse()));
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
          {data.map((job: CardElementType, index: number) => (
						<JobContent key={index}>
              <Position color={white}>
                <b>{job.position}</b>
              </Position>
              {job.level.length > 0 ? <Level color={lightgray}> - {job.level} </Level> : null}
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
      </>
    );
  }
};
*/
