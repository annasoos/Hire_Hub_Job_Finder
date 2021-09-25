import styled from "@emotion/styled";

export const PostFormContainer = styled.section({
  position: "relative",
  width: "100%",
  height: "auto",
  minHeight: "80vh",
  padding: "3%",
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
        color: "hsl(0, 0%, 75%)",
        fontSize: 14,
      },
    },
  },
  "@media(max-width: 1090px)": {
    marginTop: "55%",
  },
  "& .ant-input": {
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
