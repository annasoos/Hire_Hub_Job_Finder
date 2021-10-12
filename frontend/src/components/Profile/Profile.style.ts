import styled from "@emotion/styled";
import { gray } from "../../style_guide";

export const ProfileSection = styled.section({
	position: "relative",
	width: "100%",
	height: "auto",
	minHeight: "60vh",

	"& img#circular":{
		position: "absolute",
		left: "50%",
		transform: "translateX(-50%)",
		top: "-12%",
		height: 600,
	},
});

export const PhotoSection = styled.div({
	position: "relative",
	left: "50%",
	top: "20%",
	transform: "translateX(-50%)",
	height: 400,
	width: 400,
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",

  backgroundColor: "hsl(216, 53%, 9%, 0.9)",
  padding: "2rem 2rem",
  margin: "2rem 0",
  borderRadius: "50%",

	zIndex: 1,

	"& p":{
		color: "white",
		textAlign: "center",
		fontSize: "1.5rem",
		fontWeight: 700
	}
});

export const ProfilePhoto = styled.img({
	position: "relative",
	height: 250,
	borderRadius: "50%",
});

export const ErrorTitle = styled.h1({
	paddingTop: "5rem",
	color: "white",
	fontSize: "2rem",
	fontWeight: 700,
	textAlign: "center",

	"@media screen and (max-width:600px)": {
		fontSize: "1.5rem"
	},
});

export const ErrorSubTitle = styled.p({
	padding: "2rem 0 5rem 0",
	fontSize: "1.5rem",
	color: `${gray}`,
	textAlign: "center",

	"@media screen and (max-width:600px)": {
		fontSize: "1rem"
	},
});