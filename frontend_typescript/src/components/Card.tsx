import styled from '@emotion/styled';
import { BulbTwoTone } from '@ant-design/icons';
import { LikeTwoTone } from '@ant-design/icons';
import { SmileTwoTone } from '@ant-design/icons';

type CardType = {
	header: string,
	location: string,
	text: string,
	image: string,
	id: string
};

interface CardProps {
card: CardType,
}


export const Card = ({ card }: CardProps) => {
	return (
			<CardContent id={card.id}>
				<CardLogo> <SmileTwoTone className="smile" twoToneColor="hsl(180, 66%, 49%)" /> </CardLogo>
				<CardTitle> {card.header} </CardTitle>
				<CardLocation> {card.location} </CardLocation>
				<CardText>{card.text}</CardText>
			</CardContent>
	);
};

const CardContent = styled.div`
	width: 31%;
	min-height: 14rem;
	height: auto;
	background-color: hsl(219, 30%, 18%);
	padding: 2rem 2rem;
	z-index: 1;
	box-shadow: hsl(216, 53%, 9%) 0px 8px 14px;
	cursor: pointer;

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
	color: white;
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

const CardLocation = styled.h5`
	color: white;
	font-size: 0.8rem;
	font-weight: 500;
	position: relative;
	top: -1.8rem;

	@media only screen and (max-width: 1100px) {
		text-align: center;
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

const CardLogo = styled.div`
	width: 50px;
	height: 50px;
	background-color: hsl(257, 27%, 26%);
	padding: 2%;
	border-radius: 25px;
	position: relative;
	top: -3.5rem;

	@media only screen and (max-width: 1100px) {
		left: 50%;
		transform: translateX(-50%);
	};

	& .smile{
		font-size: 30px;
		position: relative;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
`