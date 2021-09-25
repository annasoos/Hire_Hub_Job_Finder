import styled from "@emotion/styled";

export const FilterContainer = styled.section({
  width: "70%",
  height: "6rem",
  padding: "0 2rem",
  position: "relative",
  left: "50%",
  transform: "translateX(-50%)",

  backgroundColor: "hsla(180, 66%, 45%, 0.6)",
  boxShadow: "hsl(216, 53%, 9%) 0px 8px 14px",
  borderRadius: 10,

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
  width: "100%",
  display: "flex",
  flexDirection: "row",
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
    borderRadius: 10,
    border: "none",
		color: "hsl(217, 28%, 15%)",

    "&:hover": {
      backgroundColor: "hsl(219, 30%, 18%)",
			color: "white",
    },

    "@media only screen and (max-width: 1090px)": {
      width: "100%",
    },
  },

  "& div": {
    width: "100%",

    "& .input": {
      borderRadius: 10,
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
});