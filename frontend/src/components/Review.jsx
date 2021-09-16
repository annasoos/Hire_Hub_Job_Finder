import React from 'react';
import styled from '@emotion/styled';

const Review = () => {
	return (
		<ReviewContainer>
	
				<ReviewTitle> Review your employer </ReviewTitle>
				<ReviewText>Review your current or former position. Write an anonymous review and help jobseekers find their next job!</ReviewText>
				<Button>Review</Button>

		</ReviewContainer>
	)
}

const ReviewContainer = styled.section`
	width: 100%;
	height: 250px;
	background-color: hsl(219, 30%, 18%);
	padding: 1rem;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	left: 50%;
	transform: translateX(-50%);
	transition: all 1s ease-in-out;
`

const ReviewTitle = styled.h1`
	color: white;
	font-size: 2rem;
	font-weight: 700;
	text-align: center;

	@media only screen and (max-width: 820px) {
		font-size: 1.3rem;
	};
`

const ReviewText = styled.p`
	color: hsl(0, 0%, 75%);
	text-align: center;
	width: 50%;
	
	@media only screen and (max-width: 820px) {
		width: 90%;
		font-size: 0.8rem;
	};

`

const Button = styled.button`
	font-size: 1rem;
	font-weight: 700;
	height: 2.5rem;

  color: white;
	background-color: hsl(180, 66%, 49%);
	border-radius: 20px;
	width: 10rem;

  &:hover{
		background-color: hsla(180, 66%, 49%, 0.5);
	}
`;

export default Review
