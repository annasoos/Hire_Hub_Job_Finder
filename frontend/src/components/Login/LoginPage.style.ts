import styled from "@emotion/styled";
import { cyan } from '../../style_guide';

export const LoginContainer = styled.div({
  width: "100%",
  margin: "2rem 0 5rem 0",

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
    },
  },
});

export const LoginTitle = styled.h1({
  color: "white",
  width: "100%",
  textAlign: "center",
  fontSize: 25,
  fontWeight: 700,
  padding: "0 0 2rem 0",
  transition: "all 1s ease-in-out",

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
