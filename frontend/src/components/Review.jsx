import React from 'react';
import styled from "styled-components";

const Review = () => {
	return (
		<ReviewContainer>
			<ReviewContent>
				<h1> Review your employer </h1>
				<p>Review your current or former position. Write an anonymous review and help jobseekers find their next job!</p>
				<Button>Review</Button>
			</ReviewContent>
		</ReviewContainer>
	)
}

const ReviewContainer = styled.section`
	width: 100%;
	height: 250px;

	background-color: hsl(219, 30%, 18%);
`

const ReviewContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	height: 100%;
	width: 80%;
	position: relative;
	left: 50%;
	transform: translateX(-50%);
	transition: all 1s ease-in-out;

	& h1{
		color: white;
		font-size: 2rem;
		text-align: center;
		padding-bottom: 1rem;

		@media only screen and (max-width: 820px) {
			font-size: 1.5rem;
		};
	}

	& p {
		color: hsl(0, 0%, 75%);
		text-align: center;
		padding-bottom: 1.2rem;
	}
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
