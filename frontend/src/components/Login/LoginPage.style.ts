import styled from "@emotion/styled";
import { cyan, gray } from '../../style_guide';

export const LoginContainer = styled.div({
	position: "relative",
  width: "100%",
	minHeight: "50vh",
  margin: "2rem 0 5rem 0",

	transition: "all 1s ease-in-out",
	
	"@media screen and (max-width: 400px)":{
		minHeight: "100vh"
	},

	"& img":{
		position: "absolute",
		bottom: "-5.9rem",
		left: "5%",
		height: 320,
	},

  "& .loginForm": {
		"& .input": {
			borderRadius: 10,
		},
    "& .ant-row": {
      display: "block",
      width: "40%",
      position: "relative",
      left: "50%",
      transform: "translateX(-50%)",

			"@media screen and (max-width: 700px)":{
				width: "70%",
			}
    },
		"& .ant-btn": {
			position: "relative",
			left: "50%",
			transform: "translateX(-50%)",
			marginTop: 24,
		}
  },
});

export const LoginTitle = styled.h1({
	position: "relative",
  left: "50%",
  transform: "translateX(-50%)",
  width: "80%",
  padding: "0 0 2rem 0",

  color: `${gray}`,
  textAlign: "center",
  fontSize: 23,
  fontWeight: 500,

  transition: "all 1s ease-in-out",

	"@media(max-width: 800px)": {
    fontSize: 20,
  },

  "@media(max-width: 450px)": {
    fontSize: 20,
  },

  "& a": {
    color: `${cyan}`,

    "&:hover": {
      fontStyle: "italic",
    },
  },
});
