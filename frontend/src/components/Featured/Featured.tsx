import { Component } from "react";
//design & components
import { Card } from "../Card/Card";
import { Search } from "../Search/Search";
import { FeaturedSection, Title, Text, CardContainer, BlueLine } from "./Featured.style";
//types & functions
import { JobElementType, JobObjectWithID } from "../../utils/types/JobElementType";
import { JobContext } from "../../utils/context/JobContext";
import { generateUniqueID } from "../../utils/functions/generateUniqueID";


export class Featured extends Component<{}, {}> {
	static contextType = JobContext;

  render() {

		const jobContext = this.context;
		const items = jobContext.jobList.slice(0, 3).map((job: JobElementType) => { 
			return {uid: generateUniqueID(), value: job};
		});

    return (
      <FeaturedSection>
        <Search />

        <Title>Featured Positions</Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          aliquid provident quasi possimus autem!
        </Text>

        <CardContainer>
          {items.map((card: JobObjectWithID, index: number) => (
            <Card key={card.uid} cardElement={card.value} position={index} />
          ))}
          <BlueLine />
        </CardContainer>
      </FeaturedSection>
    );
  }
}
