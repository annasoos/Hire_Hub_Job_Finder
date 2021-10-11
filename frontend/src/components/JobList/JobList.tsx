import { Component } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Collapse, Tooltip, Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
//design & components
import { FilterBar } from "../FilterBar/FilterBar";
import { CardElementType } from "../../types/CardPropsType";
import { cyan, lightgray, white } from "../../style_guide";
import { LoadingText, JobListSection, JobContainer, JobContent, Position, Level, Location, Company, Skills, Description, DeleteIcon, EditIcon } from "../JobList/JobList.style";
import Delete from "../../images/delete_icon.svg";
import Edit from "../../images/edit_icon.svg";
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
    const { Panel } = Collapse;
    const userContext = this.context;

    const collapseRender = () => {
      if (userContext.loggedInUser) {
        return (
          <Collapse className="collapse" ghost bordered={false}>
            <Panel header="Your Postings" key="1">
              {this.state.data
                .filter((job: CardElementType) => job.creator === userContext.loggedInUser.email)
                .map((job: CardElementType, index: number) => (
                  <JobContent className="inCollapse" key={index}>
                    <Position className="myPostPosLev" color={white}>
                      <b>{job.position}</b>
                    </Position> <br />
                    {job.level.length > 0 ? (
                      <Level className="myPostPosLev" color={lightgray}> {job.level} </Level>
                    ) : null}
                    <Company color={lightgray}> {job.company} </Company>
										<Tooltip title="Edit">
											<EditIcon src={Edit} alt="edit_logo"/>
										</Tooltip>	
										<Tooltip title="Delete">
											<DeleteIcon src={Delete} alt="delete_logo"/>
										</Tooltip>	
                  </JobContent>
                ))}
							<Button id="addBtn" onClick={() => this.props.history.push('/post-a-job')}><PlusCircleOutlined />Post a new job</Button>
            </Panel>
          </Collapse>
        );
      }
    };

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
            {collapseRender()}

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
        </JobListSection>
      );
    }
  }
}

export default withRouter(JobList);
