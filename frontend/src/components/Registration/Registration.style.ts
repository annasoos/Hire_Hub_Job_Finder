import styled from "@emotion/styled";
import { gray } from "../../style_guide";

export const RegContainer = styled.div({
  width: "100%",
  margin: "0 0 5rem 0",
  position: "relative",

  transition: "all 1s ease-in-out",

  "@media screen and (max-width: 1090px)": {
    margin: "2rem 0 5rem 0",
  },

  "& .regForm": {
    "& .input": {
      borderRadius: "15px 0",
    },

    "& .ant-row": {
      display: "block",
      width: "40%",
      position: "relative",
      left: "50%",
      transform: "translateX(-50%)",

      "@media screen and (max-width: 600px)": {
        width: "70%",
      },
    },

    "& .ant-btn": {
      position: "relative",
      left: "50%",
      transform: "translateX(-50%)",
      marginTop: 24,
    },
  },

  "@media(max-width: 1090px)": {
    minHeight: "55vh",
  },
});

export const RegTitle = styled.h1({
  width: "60%",
  padding: "0 0 2rem 0",
  margin: "auto",

  color: "white",
  textAlign: "center",
  fontSize: 25,
  fontWeight: 700,

  transition: "all 1s ease-in-out",

  "@media(max-width: 450px)": {
    fontSize: 20,
  },
});

export const RegText = styled.p({
  width: "60%",
  padding: "0 0 2rem 0",
  margin: "auto",

  color: `${gray}`,
  textAlign: "center",
  fontSize: 20,
  fontWeight: 500,

  transition: "all 1s ease-in-out",

  "@media(max-width: 1090px)": {
    fontSize: 18,
    width: "80%",
  },

  "@media(max-width: 600px)": {
    fontSize: 16,
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

  transition: "all 1s ease-in-out",

  "@media(max-width: 1090px)": {
    height: 350,
    bottom: "-6.5rem",
  },

  "@media screen and (max-width: 800px)": {
    width: "110%",
    left: "-10%",
  },

  "@media(max-width: 500px)": {
    display: "none",
  },
});
