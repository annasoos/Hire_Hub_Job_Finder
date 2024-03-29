import styled from "@emotion/styled";
import { cyan, cyanHover, darkBlue, lightgray } from "../../style_guide";

export const NewsletterContainer = styled.section({
  width: "100%",
  backgroundColor: `${darkBlue}`,
  padding: "2rem",

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",
  left: "50%",
  transform: "translateX(-50%)",
  transition: "all 1s ease-in-out",

	"& .newsletterForm": {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		width: "40%",

		"@media only screen and (max-width: 1090px)": {
			width: "80%"
		},

		"& .input": {
			position: "relative",
			borderRadius: "15px 0",
			transition: "all 1s ease-in-out",
			width: "100%",
	
			"@media only screen and (max-width: 1090px)": {
				textAlign: "center",
				textIndent: 0,
				margin: "0.5rem 0",
			},
	
			"@media only screen and (max-width: 600px)": {
				textAlign: "center",
				fontSize: "0.7rem",
			},
		},
	}
});

export const NewsletterTitle = styled.h1({
  color: "white",
  fontSize: "2rem",
  fontWeight: 700,
  textAlign: "center",

  "@media only screen and (max-width: 820px)": {
    fontSize: "1.3rem",
  },
});

export const NewsletterText = styled.p({
  color: `${lightgray}`,
  textAlign: "center",
  width: "50%",

  "@media only screen and (max-width: 820px)": {
    width: "90%",
    fontSize: "0.8rem",
  },
});

export const Button = styled.button({
	position: "relative",
	left: "50%",
	transform: "translateX(-50%)",
  fontSize: "1rem",
  fontWeight: 700,
  height: "2.5rem",

  color: "white",
  backgroundColor: `${cyan}`,
  borderRadius: 50,
  marginTop: "1rem",
	padding: "0 1rem",

  "&:hover": {
    backgroundColor: `${cyanHover}`,
  },
});
