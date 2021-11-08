import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useQuery } from '@apollo/client';
//design & components
import { Collapse, Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { CollapseSection } from "./Collapse.style";
import { Favourites } from "../Favourites/Favourites";
import { OwnListings } from "../OwnListings/OwnListings";
//context & function
import { JobElementType } from "../../utils/types/JobElementType";
// queries
import { FAVOURITES_QUERY, OWN_LISTINGS_QUERY } from "../../utils/GqlQueries";

export const CollapseBar = () => {
	const history = useHistory();
  const { Panel } = Collapse;
	const [ownList, setOwnList] = useState<JobElementType[]>([] as JobElementType[]);
	const [favList, setFavList] = useState<JobElementType[]>([] as JobElementType[]);
	const ownListings = useQuery(OWN_LISTINGS_QUERY);
	const favourites = useQuery(FAVOURITES_QUERY);

	useEffect(() => {
		if(!ownListings.loading && ownListings.data) {
			setOwnList(ownListings.data.ownListings.jobs);
		};
		if(!favourites.loading && favourites.data) {
			setFavList(favourites.data.favourites.jobs);
		};
		if(favourites.error || ownListings.error) {
			console.log(favourites.error, ownListings.error);
		};
	}, [ownListings, favourites]);

  return (
		<CollapseSection>
    	<Collapse className="collapse" ghost bordered={false} defaultActiveKey={['1', '2']}>

				{/* YOUR LISTINGS */}
    	  <Panel header="Your listings" key="1">
    	    {ownList.map((job: JobElementType, index: number) => (
    	        <OwnListings job={job} key={index}/>
    	      ))}
    	    <Button id="addBtn" onClick={() => history.push("/post-a-job")}>
    	      <PlusCircleOutlined />
    	      Post a new job
    	    </Button>
    	  </Panel>

				{/* YOUR FAVOURITES */}
    	 <Panel header="Your favourites" key="2">
				{favList.map((job: JobElementType, index: number) => (
    	      <Favourites job={job} key={index}/>
    	    ))}
    	  </Panel>
				
    	</Collapse>
		</CollapseSection>
  );
};
