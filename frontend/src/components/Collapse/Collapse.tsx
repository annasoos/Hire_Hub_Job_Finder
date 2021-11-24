import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
//design & components
import { Collapse, Button, Pagination } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { CollapseSection } from "./Collapse.style";
import { Favourites } from "../Favourites/Favourites";
import { OwnListings } from "../OwnListings/OwnListings";
//types & functions & context
import { JobObjectWithID } from "../../utils/types/JobElementType";
import { OwnListingsContext } from "../../utils/context/OwnListingsContext";
import { FavouritesContext } from "../../utils/context/FavouritesContext";
import { generateUniqueID } from "../../utils/functions/generateUniqueID";

export const CollapseBar = () => {
	const history = useHistory();
  const { Panel } = Collapse;
	const [ownPageNum, setOwnPageNum] = useState(1);
	const [favPageNum, setFavPageNum] = useState(1);
	const ownContext = useContext(OwnListingsContext);
	const favContext = useContext(FavouritesContext);
	const ownItems = ownContext.ownList.map(job => { 
		return {uid: generateUniqueID(), value: job};
	});
	const favItems = favContext.favList.map(job => { 
		return {uid: generateUniqueID(), value: job};
	});

	useEffect(() => {
		ownContext.setPage(ownPageNum);
		favContext.setPage(favPageNum);
	}, [ownPageNum, ownContext, favPageNum, favContext]);

  return (
		<CollapseSection>
    	<Collapse className="collapse" ghost bordered={false} defaultActiveKey={['1', '2']}>

				{/* YOUR LISTINGS */}
    	  <Panel header="Your listings" key="1">
				<Pagination
					className="pagination"
					size="small"
      		total={ownContext.count}
      		defaultPageSize={4}
      		defaultCurrent={1}
					current={ownPageNum}
					onChange={(page: number) => setOwnPageNum(page)}
    		/>
    	    {ownItems.map((job: JobObjectWithID, index: number) => (
    	        <OwnListings job={job.value} key={job.uid}/>
    	      ))}
    	    <Button id="addBtn" onClick={() => history.push("/post-a-job")}>
    	      <PlusCircleOutlined />
    	      Post a new job
    	    </Button>
    	  </Panel>

				{/* YOUR FAVOURITES */}
    	 <Panel header="Your favourites" key="2">
			 <Pagination
					className="pagination"
					size="small"
      		total={favContext.count}
      		defaultPageSize={4}
      		defaultCurrent={1}
					current={favPageNum}
					onChange={(page: number) => setFavPageNum(page)}
    		/>
				{favItems.map((job: JobObjectWithID, index: number) => (
    	      <Favourites job={job.value} key={job.uid}/>
    	    ))}
    	  </Panel>
				
    	</Collapse>
		</CollapseSection>
  );
};
