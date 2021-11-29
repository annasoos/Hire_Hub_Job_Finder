import styled from "@emotion/styled";
import { gray, cyan, footerBG, darkBlue, purple } from "../../style_guide";

export const CardContent = styled.div({
  width: "31%",
  minHeight: "14rem",
  height: "auto",
  backgroundColor: `${darkBlue}`,
  padding: "2rem 2rem",
  zIndex: 1,
  boxShadow: `${footerBG} 0px 8px 14px`,
  borderRadius: "15px 0",
  cursor: "pointer",

  "@media only screen and (max-width: 1100px)": {
    width: "80%",
    margin: "2rem",
  },
});

export const CardTitle = styled.h4({
  color: "white",
  fontSize: "1.2rem",
  position: "relative",
  top: "-2rem",
	height: "auto",

  "@media only screen and (max-width: 1100px)": {
    textAlign: "center",
  },

  "@media only screen and (max-width: 375px)": {
    fontSize: "1rem",
  },

  "@media only screen and (max-width: 300px)": {
    fontSize: "0.8rem",
  },
});

export const CardLocation = styled.h5({
  color: `${cyan}`,
  fontSize: "0.8rem",
  fontWeight: 500,
  position: "relative",
  top: "-1.8rem",

  "@media only screen and (max-width: 1100px)": {
    textAlign: "center",
  },
});

export const CardText = styled.p({
  fontSize: "0.8rem",
  color: `${gray}`,
  position: "relative",
  top: "-1rem",
	maxHeight: "12rem",
	whiteSpace: "pre-line",
	/* textOverflow: "ellipsis",  // csak nowrap whitespace esetén működik  */
	overflow: "hidden",
	display: "-webkit-box",
  "-webkit-line-clamp": "9",
  "-webkit-box-orient": "vertical", 

  "@media only screen and (max-width: 1100px)": {
    textAlign: "center",
		maxHeight: "6rem",
		"-webkit-line-clamp": "5",
  },

  "@media only screen and (max-width: 300px)": {
    fontSize: "0.7rem",
  },
});

export const CardLogo = styled.div({
  width: 50,
  height: 50,
  backgroundColor: `${purple}`,
  padding: "2%",
  borderRadius: 50,
  position: "relative",
  top: "-3.5rem",

  "@media only screen and (max-width: 1100px)": {
    left: "50%",
    transform: "translateX(-50%)",
  },

  "& .cardLogoImg": {
    fontSize: 30,
    position: "relative",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
});


export const DetailsModalContent = styled.div({
  "& h3, p": {
    textAlign: "center",
		fontWeight: 700,
  },

	"& h3, p.level": {
		margin: 0,
		padding: 0
	},

	"& p.details": {
		fontWeight: 500,
		whiteSpace: "pre-line",
	},

	"& p.location": {
		fontWeight: 500,
		color: `${cyan}`,
	}
});
