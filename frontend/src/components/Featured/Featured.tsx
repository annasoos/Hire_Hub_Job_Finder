import React from "react";
//design & components
import { Card } from "../Card/Card";
import { Search } from "../Search/Search";
import { FeaturedSection, Title, Text, CardContainer, BlueLine } from "./Featured.style";
//types & functions
import { FeaturedClassStateType } from '../../types/FeaturedClassStateType';
import { getData } from "../../functions/Fetch"
import { CardElementType } from "../../types/CardPropsType";


export class Featured extends React.Component<{}, FeaturedClassStateType> {
	constructor(props: {}) {
		super(props)
		this.state={
			jobs: []
		}
	}

	componentDidMount() {
		getData("http://localhost:8080/api/find-a-job").then(res => {
			const filtered = res.data.reverse().slice(0, 3);
			this.setState({jobs: filtered});
		});
	};
	
  render() {
    return (
		<FeaturedSection>
			<Search />

			<Title>Featured Positions</Title>
			<Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquid provident quasi possimus autem!</Text>

			<CardContainer>
				{this.state.jobs.map((card: CardElementType, index: number) => (<Card key={index} cardElement={card} position={index} /> ))}
				<BlueLine />
			</CardContainer>

		</FeaturedSection>
		)
  }
}
