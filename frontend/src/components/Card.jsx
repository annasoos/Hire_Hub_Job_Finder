import React from "react";
import styled from "styled-components";

const Card = ({ header, text, image, id }) => {
	return (
			<CardContent id={id}>
				<CardImg src={image} alt="icon" />
				<CardTitle> {header} </CardTitle>
				<CardText>{text}</CardText>
			</CardContent>
	);
};

const CardContent = styled.div`
	width: 31%;
	min-height: 14rem;
	height: auto;
	background-color: white;
	padding: 2rem 2rem;
	z-index: 1;


	&#second{
		position: relative;
		top: 2rem;
	}

	&#third{
		position: relative;
		top: 4rem;
	}

	@media only screen and (max-width: 1100px) {
		width: 80%;
	};
`

const CardTitle = styled.h4`
	color: hsl(257, 27%, 26%);
	font-size: 1.2rem;
	position: relative;
	top: -2rem;

	@media only screen and (max-width: 1100px) {
		text-align: center;
	};

	@media only screen and (max-width: 375px) {
		font-size: 1rem;
	};

	@media only screen and (max-width: 300px) {
		font-size: 0.8rem;
	};
`

const CardText = styled.p`
	font-size: 0.8rem;
	color: hsl(257, 7%, 63%);
	position: relative;
	top: -1rem;

	@media only screen and (max-width: 1100px) {
		text-align: center;
	};

	@media only screen and (max-width: 300px) {
		font-size: 0.7rem;
	};
`

const CardImg = styled.img`
	background-color: hsl(257, 27%, 26%);
	border-radius: 100%;
	padding: 5%;

	position: relative;
	top: -3.5rem;

	@media only screen and (max-width: 1100px) {
		left: 50%;
		transform: translateX(-50%);
	};
`

export default Card;

