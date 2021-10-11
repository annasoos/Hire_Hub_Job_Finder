import { FC, useContext } from "react";
import { Collapse, Tooltip, Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
//design & components
import { lightgray, white } from "../../style_guide";
import { CardElementType } from "../../types/CardPropsType";
import { JobContent, Position, Level, Company, DeleteIcon, EditIcon } from "../JobList/JobList.style";
import Delete from "../../images/delete_icon.svg";
import Edit from "../../images/edit_icon.svg";
//context
import { CollapsePropsType } from "../../types/CollapsePropsType"
import { UserContext } from "../../context/UserContext";
import { useHistory } from "react-router";

export const CollapseBar:FC<CollapsePropsType> = ({ list }) => {
  const userContext = useContext(UserContext);
	const { Panel } = Collapse;
	const history = useHistory();

  return (
    <Collapse className="collapse" ghost bordered={false}>
      <Panel header="Your Postings" key="1">
        {list
          .filter((job: CardElementType) => job.creator === userContext.loggedInUser!.email)
          .map((job: CardElementType, index: number) => (
            <JobContent className="inCollapse" key={index}>
              <Position className="myPostPosLev" color={white}>
                <b>{job.position}</b>
              </Position>{" "}
              <br />
              {job.level.length > 0 ? (
              <Level className="myPostPosLev" color={lightgray}>{job.level}</Level>) : null}
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
