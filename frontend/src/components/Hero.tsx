import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import Illustration from "../images/Shared workspace-pana.svg";

export const Hero = () => {
	
	const history = useHistory();

	return (
		<HeroSection>
			<Title>Your career is our concern</Title>
			<Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. </Text>
			<Button onClick={() => history.push('/find-a-job')}>Find a job</Button>
			<HeroImg src={Illustration} alt="illustration" />
		</HeroSection>
	);
};

const HeroSection = styled.section({
	position: "relative",
	width: "100%",
	height: "auto",
	minHeight: "50%",
	padding: "0 10%",
	border: "1px solid hsl(218, 28%, 13%)",  /*need this line to got the right image position in mobile view -- TODO: reorganize and have relative position to image so it can be included in the auto height of the section */
})

const Title = styled.h1({
	width: "40%",
	fontSize: 70,
	fontWeight: 700,
	letterSpacing: "-0.05em",
	color: "white",
	transition: "all 1s ease-in-out",
	
	"@media only screen and (max-width: 1200px)": {
		fontSize: 65,
	},

	"@media only screen and (max-width: 1090px)": {
		fontSize: 50,
		width: "100%",
		textAlign: "center",
		marginTop: "55%",
		paddingTop: "5rem",
	},

	"@media only screen and (max-width: 425px)": {
		fontSize: 40,
	},

	"@media only screen and (max-width: 300px)": {
		fontSize: 35,
	},
})

const Text = styled.p({
	width: "40%",
	fontSize: 22,
	color: "hsl(257, 7%, 63%)",
	padding: "2rem 0",
	transition: "all 1s ease-in-out",

	"@media only screen and (max-width: 1090px)": {
		fontSize: 20,
		width: "100%",
		textAlign: "center",
	},
})

const Button = styled.button({
	fontSize: 18,
	fontWeight: 700,

	position: "relative",
	left: 0,
	height: "2.5rem",
	width: "10rem",
	marginTop: "1rem",
	
	color: "white",
	backgroundColor: "hsl(180, 66%, 49%)",
	borderRadius: 20,

	transition: "left 1s ease-in-out",
	
	"&:hover": {
		backgroundColor: "hsla(180, 66%, 49%, 0.5)",
	},
	
	"@media only screen and (max-width: 1090px)": {
		left: "50%",
		transform: "translateX(-50%)",
	},
})

const HeroImg = styled.img({
	position: "absolute",
	width: "40%",
	right: "10%",
	top: "5%",
	zIndex: 1,
	transition: "all 1s ease-in-out",

	"@media only screen and (max-width: 1090px)": {
		position: "absolute",
		left: "50%",
		transform: "translateX(-50%)",
		width: "70%",
	},
})