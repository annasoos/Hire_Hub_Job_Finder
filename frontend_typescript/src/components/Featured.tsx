import { useState, useEffect } from "react";
import styled from '@emotion/styled';
import { Card } from "./Card";
import { Search } from "./Search";
import axios from "axios";
import {IJob} from "./JobList";

export const Featured = () => {

	const[featured, setFeatured] = useState<IJob[]>([]);

	const getCards = async (url: string) : Promise<void> => {
		let response = await axios.get(url);
		let res = await response;
		setFeatured(res.data)
	}

	useEffect(() => {getCards("./jobs.json")}, [])

	return (
		<FeaturedSection>
			<Search />

			<Title>Featured Positions</Title>
			<Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquid provident quasi possimus autem!</Text>

			<CardContainer>
				{featured.map((card: IJob, index: number) => (
					card.isFeatured === true && <Card key={index} cardElement={card} />
				))}
				<BlueLine />
			</CardContainer>

		</FeaturedSection>
	);
};


const FeaturedSection = styled.section`
  width: 100%;
	height: auto;
	position: relative;
  margin: 9rem 0 0 0;
	padding: 10rem 0;

	background-color: hsl(218, 28%, 13%);

	@media only screen and (max-width: 1090px) {
		padding: 15rem 0;
	};

	@media only screen and (max-width: 400px) {
		padding: 18rem 0;
	};
`;

const Title = styled.h1`
	width: 50%;
  font-size: 40px;
	font-weight: 700;
  color: white;
	text-align: center;
	padding-bottom: 1rem;

	position: relative;
	left: 50%;
	transform: translateX(-50%);

	@media only screen and (max-width: 1200px) {
		width: 80%;
		font-size: 40px;
	};

	@media only screen and (max-width: 1090px) {
		width: 80%;
		font-size: 30px;
	};

`;

const Text = styled.p`
	width: 40%;
  font-size: 1rem;
	color: hsl(257, 7%, 63%);
	text-align: center;

	position: relative;
	left: 50%;
	transform: translateX(-50%);

	@media only screen and (max-width: 1200px) {
		width: 80%;
	};
`;

const CardContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	position: relative;
	left: 50%;
	transform: translateX(-50%);

	width: 80%;
	height: auto;
	margin-top: 5rem;
	z-index: 1;

	@media only screen and (max-width: 1100px) {
		flex-direction: column;
		width: 100%;
	};
`

const BlueLine = styled.div`
	height: 6px;
	width: 70%;
	background-color: hsl(180, 66%, 49%);

	position: absolute;
	left: 50%;
	transform: translateX(-50%);

	@media only screen and (max-width: 1100px) {
		width: 6px;
		height: 70%;
		margin-top: 5rem;
	};
`