import React from "react";
//design & components
import { Card } from "../Card/Card";
import { Search } from "../Search/Search";
import { FeaturedSection, Title, Text, CardContainer, BlueLine } from "./Featured.style";
//types & functions
import { IJob } from "../../interfaces/IJob";
import { FeaturedClassStateType } from '../../types/FeaturedClassStateType';
import { getData } from "../../functions/Fetch"


export class Featured extends React.Component<any, FeaturedClassStateType> {
	constructor(props:any) {
		super(props)
		this.state={
			jobs: []
		}
	}

	componentDidMount() {
		getData("http://localhost:8080/api/find-a-job").then(data => {
			const filtered = data.slice(0, 3);
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
				{this.state.jobs.map((card: IJob, index: number) => (<Card key={index} cardElement={card} position={index} /> ))}
				<BlueLine />
			</CardContainer>

		</FeaturedSection>
		)
  }
}



// ----------------FUNCTIONAL VERSION -------------------

/* 
export const Featured = () => {

	const[data, setData] = useState<IJob[]>([]);

	useEffect(() => {	
		getData("http://localhost:8080/api/find-a-job").then(setData);
	}, []);

	const filtered:IJob[] = data.slice(0, 3);

	return (
		<FeaturedSection>
			<Search />

			<Title>Featured Positions</Title>
			<Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquid provident quasi possimus autem!</Text>

			<CardContainer>
				{filtered.map((card: IJob, index: number) => (<Card key={index} cardElement={card} position={index} /> ))}
				<BlueLine />
			</CardContainer>

		</FeaturedSection>
	);
};

*/
