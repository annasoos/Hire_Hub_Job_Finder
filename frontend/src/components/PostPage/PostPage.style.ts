import styled from "@emotion/styled";
import { lightgray, cyan, white, gray } from "../../style_guide";

export const PostFormContainer = styled.section({
  position: "relative",
  width: "100%",
  height: "auto",
  minHeight: "80vh",
  padding: "3%",

  "& h2": {
    color: `${white}`,
    fontSize: 25,
    fontWeight: 600,
    width: "80%",
    textAlign: "center",
    margin: "auto",
    padding: "1rem 0 3rem 0",

		"& h3": {
			color: `${gray}`,
			fontWeight: 500,
			fontSize: 20,
			paddingTop: "1rem",

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
  color: "white",
  width: "70%",
  textAlign: "center",
  fontSize: 30,
  fontWeight: 700,
  margin: "auto",
  transition: "all 1s ease-in-out",

  "@media(max-width: 1090px)": {
    width: "100%",
    textAlign: "center",
  },

  "@media(max-width: 450px)": {
    fontSize: 25,
  },
});

export const PostFormContent = styled.div({
  width: "80%",
  height: "80%",

  "& .ant-form-item-label": {
    "& label": {
      "& span.ant-form-item-optional": {
        color: `${lightgray}`,
        fontSize: 14,
      },
    },
  },
  "@media(max-width: 1090px)": {
    marginTop: "55%",
  },
  "& .input, .ant-input-affix-wrapper-textarea-with-clear-btn, .ant-select:not(.ant-select-customize-input) .ant-select-selector":
    {
      borderRadius: 10,
      "@media(max-width: 1090px)": {
        width: "100%",
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
    position: "absolute",
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
		color: `${cyan}`
	}
}) 