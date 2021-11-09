import styled from "@emotion/styled";
import { footerBG, featuredBG, darkBlue } from "../../style_guide";

export const FilterContainer = styled.section({
  width: "70%",
  height: "6rem",
  padding: "0 2rem",
  position: "relative",
  left: "50%",
  transform: "translateX(-50%)",

  background: "radial-gradient(circle, hsl(180, 66%, 49%) 20%, hsl(180, 66%, 49%, 0.5) 100%)",
  boxShadow: `${footerBG} 0px 8px 14px`,
  borderRadius: "15px 0",

  zIndex: 1,

  "@media only screen and (max-width: 1090px)": {
    padding: "0 1.5rem",
    height: "16rem",
  },

  "@media only screen and (max-width: 400px)": {
    height: "20rem",
  },
});

export const FilterContent = styled.div({
	height: "100%",

	"& .searchForm": {
		height: "100%",
		display: "flex",
		flexDirection: "row",
		flexWrap: "nowrap",
		justifyContent: "space-evenly",
		alignItems: "center",
		transition: "all 1s ease-in-out",

		"@media only screen and (max-width: 1090px)": {
			flexDirection: "column",
			padding: "1rem",
		},

		"& .filterBtn": {
			fontSize: "1rem",
			width: "10rem",
			margin: "0 1rem 0 1rem",
			borderRadius: "15px 0",
			border: "none",
			color: `${featuredBG}`,
	
			"&:hover": {
				backgroundColor: `${darkBlue}`,
				color: "white",
			},
	
			"@media only screen and (max-width: 1090px)": {
				width: "100%",
			},
		},
	
		"& div": {	
			"& .input": {
				borderRadius: "15px 0",
				width: "95%",
				transition: "all 1s ease-in-out",
	
				"@media only screen and (max-width: 1090px)": {
					textAlign: "center",
					width: "100%",
					textIndent: 0,
					margin: "0.5rem 0",
				},
	
				"@media only screen and (max-width: 600px)": {
					textAlign: "center",
					fontSize: "0.7rem",
				},
			},
	
			"& .ant-switch": {
				marginLeft: "0.5rem",
			},
	
			"&.ant-switch-handle::before": {
				width: 18,
			},
		},
	},
});
