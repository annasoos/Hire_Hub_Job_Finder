import styled from '@emotion/styled';
import { Input } from "antd";

export const Newsletter = () => {
	return (
		<NewsletterContainer>
	
				<NewsletterTitle> Be up to date with every opportunity </NewsletterTitle>
				<NewsletterText>Don't miss out on a single job offer by subscribing to our newsletter and join the Hire Hub community!</NewsletterText>
				<Input
              className="input"
              placeholder="Add your e-mail adress"
              allowClear
              type="email"
              name="email"
							pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
              autoComplete="on"
            ></Input>
				<Button>Subscribe</Button>

		</NewsletterContainer>
	)
}

const NewsletterContainer = styled.section`
	width: 100%;
	height: 350px;
	background-color: hsl(219, 30%, 18%);
	padding: 2rem;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	position: relative;
	left: 50%;
	transform: translateX(-50%);
	transition: all 1s ease-in-out;

	& .input {
      border-radius: 10px;
      width: 50%;
      transition: all 1s ease-in-out;

      @media only screen and (max-width: 1090px) {
        text-align: center;
        width: 80%;
        text-indent: 0;
        margin: 0.5rem 0;
      }

      @media only screen and (max-width: 600px) {
        text-align: center;
        font-size: 0.7rem;
      }
    }
`

const NewsletterTitle = styled.h1`
	color: white;
	font-size: 2rem;
	font-weight: 700;
	text-align: center;

	@media only screen and (max-width: 820px) {
		font-size: 1.3rem;
	};
`

const NewsletterText = styled.p`
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
	margin-top: 1rem;

  &:hover{
		background-color: hsla(180, 66%, 49%, 0.5);
	}
`