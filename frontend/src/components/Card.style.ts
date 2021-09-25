import styled from "@emotion/styled";

export const CardContent = styled.div({
  width: "31%",
  minHeight: "14rem",
  height: "auto",
  backgroundColor: "hsl(219, 30%, 18%)",
  padding: "2rem 2rem",
  zIndex: 1,
  boxShadow: "hsl(216, 53%, 9%) 0px 8px 14px",
  cursor: "pointer",

  "@media only screen and (max-width: 1100px)": {
	  width: "80%",
		margin: "2rem",
  }
});

export const CardTitle = styled.h4({
  color: "white",
  fontSize: "1.2rem",
  position: "relative",
  top: "-2rem",

  "@media only screen and (max-width: 1100px)": {
    textAlign: "center",
  },

  "@media only screen and (max-width: 375px)": {
    fontSize: "1rem",
  },

  "@media only screen and (max-width: 300px)": {
    fontSize: "0.8rem",
  }
});

export const CardLocation = styled.h5({
  color: "hsl(180, 66%, 49%)",
  fontSize: "0.8rem",
  fontWeight: 500,
  position: "relative",
  top: "-1.8rem",

  "@media only screen and (max-width: 1100px)": {
    textAlign: "center",
  }
});

export const CardText = styled.p({
  fontSize: "0.8rem",
  color: "hsl(257, 7%, 63%)",
  position: "relative",
  top: "-1rem",

  "@media only screen and (max-width: 1100px)": {
    textAlign: "center",
  },

  "@media only screen and (max-width: 300px)": {
    fontSize: "0.7rem",
  }
});

export const CardLogo = styled.div({
  width: 50,
  height: 50,
  backgroundColor: "hsl(257, 27%, 26%)",
  padding: "2%",
  borderRadius: 25,
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