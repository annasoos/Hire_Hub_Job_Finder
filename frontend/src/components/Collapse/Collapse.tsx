import { useContext } from "react";
import { Collapse, Tooltip, Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
//design & components
import { lightgray, white } from "../../style_guide";
import { JobElementType } from "../../types/JobElementType";
import { JobContent, Position, Level, Company, DeleteIcon, EditIcon } from "../JobList/JobList.style";
import Delete from "../../images/delete_icon.svg";
import Edit from "../../images/edit_icon.svg";
//context
import { UserContext } from "../../context/UserContext";
import { JobContext } from "../../context/JobContext";
import { useHistory } from "react-router";

export const CollapseBar = () => {
  const userContext = useContext(UserContext);
  const jobContext = useContext(JobContext);
  const { Panel } = Collapse;
  const history = useHistory();

  return (
    <Collapse className="collapse" ghost bordered={false}>
      <Panel header="Your Postings" key="1">
        {jobContext.jobList!
          .filter((job: JobElementType) => job.creator === userContext.loggedInUser!.email)
          .map((job: JobElementType, index: number) => (
            <JobContent className="inCollapse" key={index}>
              <Position className="myPostPosLev" color={white}>
                <b>{job.position}</b>
              </Position>{" "}
              <br />
              {job.level.length > 0 ? (
                <Level className="myPostPosLev" color={lightgray}>
                  {job.level}
                </Level>
              ) : null}
              <Company color={lightgray}> {job.company} </Company>
              <Tooltip title="Edit">
                <EditIcon src={Edit} alt="edit_logo" />
              </Tooltip>
              <Tooltip title="Delete">
                <DeleteIcon src={Delete} alt="delete_logo" />
              </Tooltip>
            </JobContent>
          ))}
        <Button id="addBtn" onClick={() => history.push("/post-a-job")}>
          <PlusCircleOutlined />
          Post a new job
        </Button>
      </Panel>
    </Collapse>
  );
};
