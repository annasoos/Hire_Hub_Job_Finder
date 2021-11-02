import styled from "@emotion/styled";
import { lightgray, cyan, white, gray } from "../../style_guide";

export const PostFormContainer = styled.section({
  position: "relative",
  width: "100%",
  height: "auto",
  minHeight: "60vh",
  padding: "3%",

  "& h2": {
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
    width: "80%",
    padding: "1rem 0 3rem 0",

    color: `${white}`,
    fontSize: 25,
    fontWeight: 600,
    textAlign: "center",

    "@media screen and (max-width: 700px)": {
      fontSize: 20,
    },

    "& div": {
      color: `${gray}`,
      fontWeight: 500,
      fontSize: 20,
      paddingTop: "1rem",

      "@media screen and (max-width: 700px)": {
        fontSize: 16,
      },

      "& a": {
        color: `${cyan}`,

        "&:hover": {
          fontStyle: "italic",
        },
      },
    },
  },
});

export const PostTitle = styled.h1({
  position: "relative",
  left: "50%",
  transform: "translateX(-50%)",
  width: "70%",

  color: "white",
  textAlign: "center",
  fontSize: 30,
  fontWeight: 700,
  transition: "all 1s ease-in-out",

  "@media(max-width: 1090px)": {
    marginTop: "2rem",
    textAlign: "center",
    fontSize: 25,
  },

  "@media(max-width: 450px)": {
    fontSize: 23,
  },
});

export const PostFormContent = styled.div({
  width: "100%",
  height: "80%",

  "& .postForm": {
    "& .input": {
      borderRadius: "15px 0",
    },

    "& .ant-row": {
      position: "relative",
      left: "50%",
      display: "block",
      width: "50%",
      transform: "translateX(-50%)",

      "@media screen and (max-width: 1090px)": {
        width: "70%",
      },
    },

    "& .ant-btn": {
      position: "relative",
      left: "50%",
      transform: "translateX(-50%)",
      marginTop: 24,
    },

    "& .ant-input-affix-wrapper-textarea-with-clear-btn, .ant-select:not(.ant-select-customize-input) .ant-select-selector":
      {
        borderRadius: "15px 0",
      },

    "& .ant-form-item-label": {
      "& label": {
        "@media screen and (max-width: 420px)": {
          margin: "0.3rem 0",
        },
        "& span.ant-form-item-optional": {
          color: `${lightgray}`,
          fontSize: 14,
        },
      },
    },
  },
});

export const SearchImg = styled.img({
  position: "relative",
  left: "50%",
  transform: "translateX(-50%)",
  width: "30%",
  transition: "all 1s ease-in-out",

  "@media(max-width: 1090px)": {
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
    width: "50%",
  },

  "@media(max-width: 450px)": {
    top: "10%",
  },
});

export const WelcomeTitle = styled.h2({
  color: "white",
  fontSize: 25,
  fontWeight: 700,
  position: "relative",
  left: "50%",
  transform: "translateX(-50%)",
  width: "30%",
  transition: "all 1s ease-in-out",

  "& span": {
    color: `${cyan}`,
  },
});
