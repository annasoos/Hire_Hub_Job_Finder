import styled from '@emotion/styled';

export const FeaturedSection = styled.section({
	width: "100%",
	height: "auto",
	position: "relative",
	margin: "9rem 0 0 0",
	padding: "10rem 0",

	backgroundColor: "hsl(218, 28%, 13%)",

	"@media only screen and (max-width: 1090px)": {
		padding: "15rem 0 0 0",
	},

	"@media only screen and (max-width: 400px)": {
		padding: "18rem 0 0 0",
	},
});

export const Title = styled.h1({
	width: "50%",
	fontSize: 40,
	fontWeight: 700,
	color: "white",
	textAlign: "center",
	paddingBottom: "1rem",

	position: "relative",
	left: "50%",
	transform: "translateX(-50%)",

	"@media only screen and (max-width: 1200px)": {
		width: "80%",
		fontSize: 40,
	},

	"@media only screen and (max-width: 1090px)": {
		width: "80%",
		fontSize: 30,
	}
});

export const Text = styled.p({
	width: "40%",
	fontSize: "1rem",
	color: "hsl(257, 7%, 63%)",
	textAlign: "center",

	position: "relative",
	left: "50%",
	transform: "translateX(-50%)",

	"@media only screen and (max-width: 1200px)": {
		width: "80%",
	}
});

export const CardContainer = styled.div({
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
	alignItems: "center",

	position: "relative",
	left: "50%",
	transform: "translateX(-50%)",

	width: "80%",
	height: "auto",
	marginTop: "5rem",
	zIndex: 1,

	"@media only screen and (max-width: 1100px)": {
		flexDirection: "column",
		width: "100%",
	},
});

export const BlueLine = styled.div({
	height: 6,
	width: "70%",
	backgroundColor: "hsl(180, 66%, 49%)",

	position: "absolute",
	left: "50%",
	transform: "translateX(-50%)",

	"@media only screen and (max-width: 1100px)": {
		width: 6,
		height: "70%",
		marginTop: "5rem",
	},
});