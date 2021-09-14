import React from 'react';
import styled from "styled-components";
import Card from "./Card";
import Shortener from "./Search";
import recognitionImage from "../images/icon-brand-recognition.svg";
import customizableImage from "../images/icon-fully-customizable.svg";
import recordsImage from "../images/icon-detailed-records.svg";

const Featured = () => {

	const cards = [
		{
			header: "Brand Recognition",
			text: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
			image: recognitionImage,
			id: "first"
		},
		{
			header: "Detailed Records",
			text: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps you make more informed decisions.",
			image: recordsImage,
			id: "second"
		},
		{
			header: "Fully Customizable",
			text: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
			image: customizableImage,
			id: "third"
		},
	];

	return (
		<StatSection>
			<Shortener />

			<Title>Featured Positions</Title>
			<Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquid provident quasi possimus autem!</Text>

			<CardContainer>
				{cards.map((card, index) => (
					<Card key={index} {...card} /> //pass an object with all the properties as separate prop
				))}
				<BlueLine />
			</CardContainer>

		</StatSection>
	);
};


const StatSection = styled.section`
  width: 100%;
	height: auto;
	position: relative;
  margin: 9rem 0 0 0;
	padding: 10rem 0;

	background-color: hsl(217, 28%, 15%);
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
