import React from 'react';
import styled from '@emotion/styled';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const Search = () => {

	return (
		<>
			<SearchContainer>
				<SearchContent>
					<div>
						<Label htmlFor="keyword">What is your dream job?</Label>
						<Input type="text" name="keyword" autoComplete="off" placeholder="Job title, keywords or company name" required></Input>
					</div>
					<div>
						<Label htmlFor="location">Where would you like to work?</Label>
						<Input type="text" name="location" autoComplete="off" placeholder="City, state or country (optional)"></Input>
					</div>
					<Button type="primary" size="default" className="searchBtn"> <SearchOutlined /> Find </Button>
				</SearchContent>
			</SearchContainer>
		</>
	)
}

const SearchContainer = styled.section`
	width: 80%;
	height: 10rem;
	padding: 0 2rem;
	position: absolute;
	left: 50%;
	top: -5rem;
	transform: translateX(-50%);

	background-color: hsl(219, 30%, 18%);
	box-shadow: hsl(216, 53%, 9%) 0px 8px 14px;
	border-radius: 10px;

	z-index: 1;

	@media only screen and (max-width: 1090px) {
		padding: 0 1.5rem;
	};
`

const SearchContent = styled.div`
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	transition: all 1s ease-in-out;

	@media only screen and (max-width: 1090px) {
		flex-direction: column;
	};

	& .searchBtn {
		font-size: 1rem;
		width: 10rem;
		margin: 1.4rem 1rem 0 1rem;
		border-radius: 25px;
		border: none;
		
  	&:hover{
			background-color: hsla(180, 66%, 49%, 0.5);
		}

		@media only screen and (max-width: 1090px) {
			width: 100%;
		};
	}
`

const Label = styled.label`
	color: hsl(0, 0%, 75%);
	font-size: 0.9rem;
	margin: 0 1rem;
	font-style: italic;
`

const Input = styled.input`
	font-size: 1rem;
	font-weight: 700;
	height: 2.5rem;
	text-indent: 1rem;

	border-radius: 10px;
	width: 90%;
	background-color: white;
	color: hsl(255, 11%, 22%);
	margin: 0.5rem 1rem;

	transition: all 1s ease-in-out;

		@media only screen and (max-width: 1090px) {
			text-align: center;
			width: 100%;
		};

		@media only screen and (max-width: 600px) {
			text-align: center;
			font-size: 0.7rem;
			text-indent: 0;
		};

	&::placeholder{
		width: 100%;
		color: hsl(0, 0%, 75%);
		font-weight: 500;

		@media only screen and (max-width: 1090px) {
			text-align: center
		};
	}

`

const OwnButton = styled.button`
	font-size: 1rem;
	font-weight: 700;
	height: 2.5rem;
	width: 10rem;

  color: white;
	background-color: hsl(180, 66%, 49%);
	border-radius: 10px;
	margin: 1.4rem 1rem 0 1rem;

  &:hover{
		background-color: hsla(180, 66%, 49%, 0.5);
	}

	@media only screen and (max-width: 1090px) {
		width: 100%;
	};
`;

export default Search
