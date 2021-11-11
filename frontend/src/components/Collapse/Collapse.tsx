import { useContext } from "react";
import { useHistory } from "react-router";
//design & components
import { Collapse, Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { CollapseSection } from "./Collapse.style";
import { Favourites } from "../Favourites/Favourites";
import { OwnListings } from "../OwnListings/OwnListings";
//types & functions & context
import { JobElementType } from "../../utils/types/JobElementType";
import { OwnListingsContext } from "../../utils/context/OwnListingsContext";
import { FavouritesContext } from "../../utils/context/FavouritesContext";

export const CollapseBar = () => {
	const history = useHistory();
  const { Panel } = Collapse;
	const ownContext = useContext(OwnListingsContext);
	const favContext = useContext(FavouritesContext);

  return (
		<CollapseSection>
    	<Collapse className="collapse" ghost bordered={false} defaultActiveKey={['1', '2']}>

				{/* YOUR LISTINGS */}
    	  <Panel header="Your listings" key="1">
    	    {ownContext.ownList.map((job: JobElementType, index: number) => (
    	        <OwnListings job={job} key={index}/>
    	      ))}
    	    <Button id="addBtn" onClick={() => history.push("/post-a-job")}>
    	      <PlusCircleOutlined />
    	      Post a new job
    	    </Button>
    	  </Panel>

				{/* YOUR FAVOURITES */}
    	 <Panel header="Your favourites" key="2">
				{favContext.favList.map((job: JobElementType, index: number) => (
    	      <Favourites job={job} key={index}/>
    	    ))}
    	  </Panel>
				
    	</Collapse>
		</CollapseSection>
  );
};
