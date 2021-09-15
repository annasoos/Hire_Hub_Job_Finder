import React from 'react';
import styled from '@emotion/styled';
import Card from "./Card";
import Search from "./Search";
import companyLogo1 from "../images/be.svg";
import companyLogo2 from "../images/greenpoint.svg";
import companyLogo3 from "../images/encirca.svg";

const Featured = () => {

	const cards = [
		{
			header: "Senior QA Engineer",
			location: "London",
			text: "Webdriver.IO | Cypress | Java | JavaScript | React | Rest Assured | Kafka |AWS | £75,000",
			image: companyLogo1,
			id: "first"
		},
		{
			header: "Marketing Expert",
			location: "Budapest",
			text: "Strategic planning with the team leader to all social and digital platforms in terms of content (blog, app, social channels, website); Leading and coordinating social media campaigns...",
			image: companyLogo2,
			id: "second"
		},
		{
			header: "Logistics Manager",
			location: "Amsterdam",
			text: "As an Area Manager, you’ll have responsibility for the day to day management of a Delivery Station, providing leadership to Shift Managers, Operations Supervisors...",
			image: companyLogo3,
			id: "third"
		},
	];

	return (
		<FeaturedSection>
			<Search />

			<Title>Featured Positions</Title>
			<Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquid provident quasi possimus autem!</Text>

			<CardContainer>
				{cards.map((card, index) => (
					<Card key={index} {...card} /> //pass an object with all the properties as separate prop
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

	background-color: hsl(217, 28%, 15%);

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


export default Featured
