import styled from "@emotion/styled";
import { gray } from "../../style_guide";

export const RegContainer = styled.div({
  width: "100%",
  margin: "0 0 5rem 0",
  position: "relative",

  "& .regForm": {
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

  "@media(max-width: 1090px)": {
    minHeight: "55vh",
  },
});

export const RegTitle = styled.h1({
  color: "white",
  width: "60%",
  textAlign: "center",
  fontSize: 25,
  fontWeight: 700,
  padding: "0 0 2rem 0",
  margin: "auto",
  transition: "all 1s ease-in-out",

  "@media(max-width: 450px)": {
    fontSize: 20,
  },
});

export const RegText = styled.p({
  color: `${gray}`,
  width: "60%",
  textAlign: "center",
  fontSize: 20,
  fontWeight: 500,
  padding: "0 0 2rem 0",
  margin: "auto",
  transition: "all 1s ease-in-out",

  "@media(max-width: 450px)": {
    fontSize: 18,
  },
});

export const RegImgContainer = styled.div({
  height: 500,
  width: "105%",
  position: "absolute",
  bottom: "-7rem",
  left: "-5%",

  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",

  "@media(max-width: 1090px)": {
    height: 350,
    bottom: "-6.5rem",
  },

  "@media(max-width: 500px)": {
    display: "none",
  },
});