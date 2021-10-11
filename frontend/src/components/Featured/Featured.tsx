import { Component } from "react";
//design & components
import { Card } from "../Card/Card";
import { Search } from "../Search/Search";
import { FeaturedSection, Title, Text, CardContainer, BlueLine } from "./Featured.style";
//types & functions
import { JobElementType } from "../../types/JobElementType";
import { JobContext } from "../../context/JobContext";

export class Featured extends Component<{}, {}> {
	static contextType = JobContext;

  render() {

		const jobContext = this.context;

    return (
      <FeaturedSection>
        <Search />

        <Title>Featured Positions</Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          aliquid provident quasi possimus autem!
        </Text>

        <CardContainer>
          {jobContext.jobList
						.slice(0, 3)
						.map((card: JobElementType, index: number) => (
            <Card key={index} cardElement={card} position={index} />
          ))}
          <BlueLine />
        </CardContainer>
      </FeaturedSection>
    );
  }
}
