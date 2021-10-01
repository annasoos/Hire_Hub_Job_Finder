import React from 'react';
//design & components
import { Card } from "../Card/Card";
import { Search } from "../Search/Search";
import { FeaturedSection, Title, Text, CardContainer, BlueLine } from "../Featured/Featured.style";
//types & functions
import { IJob } from "../../interfaces/IJob";
import { FeaturedClassStateType } from '../../types/FeaturedClassStateType';
import { getData } from "../../functions/Fetch";

export class MyComponent extends React.Component<any, FeaturedClassStateType> { // the first type argument is for defining the type of props, the other is for type of state of the component
	constructor(props:any) {
		super(props) //* explanation comment below
		this.state={
			jobs: []
		}
	}  // In class components state is always an object, with hooks it can be any type

	/*
	componentDidMount() {
		getData("http://localhost:8080/api/find-a-job").then(data => this.setState({jobs: data}, () => {console.log(this.state)}));
	}  
	*/
	//React updates state asynchronously, if you want to see the updated state when it's done, you should use the callback function of setState which gets fired as soon as the state gets updated
	

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


/*
When implementing the constructor() function inside a React component, super() is a requirement. MyComponent component is extending or borrowing functionality from the React.Component base class. This base class has a constructor() function of its own to setup our React component for us.
When we define a constructor() function inside our MyComponent class, we are overriding or replacing the constructor() function that is inside the React.Component class, but we still need to ensure that all the setup code inside of this constructor() function still gets called. super(props) is a reference to the parents constructor() function. The reason for defining this constructor() funciton is to initialize our state object.
*/



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