import { useContext } from "react";
import { useHistory } from "react-router";
//design & components
import { Collapse, Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { CollapseSection } from "./Collapse.style";
import { Favourites } from "../Favourites/Favourites";
import { OwnListings } from "../OwnListings/OwnListings";
//context & function
import { JobElementType } from "../../types/JobElementType";
import { UserContext } from "../../context/UserContext";
import { JobContext } from "../../context/JobContext";

export const CollapseBar = () => {
	const history = useHistory();
  const userContext = useContext(UserContext);
  const jobContext = useContext(JobContext);
  const { Panel } = Collapse;

  return (
		<CollapseSection>
    	<Collapse className="collapse" ghost bordered={false} defaultActiveKey={['1', '2']}>

				{/* YOUR LISTINGS */}
    	  <Panel header="Your listings" key="1">
    	    {jobContext.jobList!
    	      .filter((job: JobElementType) => job.creator === userContext.loggedInUser!.email)
    	      .map((job: JobElementType, index: number) => (
    	        <OwnListings job={job} key={index}/>
    	      ))}
    	    <Button id="addBtn" onClick={() => history.push("/post-a-job")}>
    	      <PlusCircleOutlined />
    	      Post a new job
    	    </Button>
    	  </Panel>

				{/* YOUR FAVOURITES */}
    	  <Panel header="Your favourites" key="2">
				{jobContext.jobList!
    	      .filter((job: JobElementType) => job.creator === userContext.loggedInUser!.email)
    	      .map((job: JobElementType, index: number) => (
    	        <Favourites job={job} key={index}/>
    	      ))}
    	  </Panel>
				
    	</Collapse>
		</CollapseSection>
  );
};
