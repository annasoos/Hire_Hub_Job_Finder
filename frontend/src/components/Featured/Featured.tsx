import { useState, useEffect } from "react";
//design & components
import { Card } from "../Card/Card";
import { Search } from "../Search/Search";
import { FeaturedSection, Title, Text, CardContainer, BlueLine } from "./Featured.style";
//types & functions
import { IJob } from "../../interfaces/IJob";
import { getData } from "../../functions/Fetch"

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
