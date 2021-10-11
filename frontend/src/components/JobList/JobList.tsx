import { Component } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
//design & components
import { FilterBar } from "../FilterBar/FilterBar";
import { CollapseBar } from "../Collapse/Collapse";
import { CardElementType } from "../../types/CardPropsType";
import { cyan, lightgray, white } from "../../style_guide";
import { LoadingText, JobListSection, JobContainer, JobContent, Position, Level, Location, Company, Skills, Description } from "../JobList/JobList.style";
//types & functions & context
import { getData } from "../../functions/Fetch";
import { JobListClassStateType } from "../../types/JobListClassStateType";
import { UserContext } from "../../context/UserContext";

class JobList extends Component<RouteComponentProps<{}>, JobListClassStateType> {
  static contextType = UserContext;

  constructor(props: RouteComponentProps<{}>) {
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

		const userContext = this.context;

    if (!this.state.isLoaded) {
      return (
        <JobContainer>
          <LoadingText>Searching for the best carreer options...</LoadingText>
        </JobContainer>
      );
    } else {
      return (
        <JobListSection>
          <FilterBar />
          <JobContainer>
						{(userContext.loggedInUser) ? <CollapseBar list={this.state.data}/> : null }
            {this.state.data.map((job: CardElementType, index: number) => (
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
        </JobListSection>
      );
    }
  }
}

export default withRouter(JobList);
