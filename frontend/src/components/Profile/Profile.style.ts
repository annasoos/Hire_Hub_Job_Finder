import styled from "@emotion/styled";
import { cyan, cyanHover, footerBG, gray } from "../../style_guide";

export const ProfileSection = styled.section({
  position: "relative",
  width: "100%",
  height: "auto",
  minHeight: "60vh",
  paddingBottom: "5rem",
  transition: "all 1s ease-in-out",

  "& #errorIcon": {
    width: "100%",
    padding: "2rem 0",
    color: "white",
    fontSize: 70,
    textAlign: "center",

    "@media screen and (max-width:600px)": {
      fontSize: 30,
    },
  },
});

export const ProfileName = styled.h1({
  position: "relative",
  width: "50%",
  margin: "5rem 6% 0 auto",
  color: "white",
  textAlign: "center",
  fontSize: "2.5rem",
  fontWeight: 700,
  letterSpacing: "0.05em",

  "@media screen and (max-width:1090px)": {
    width: "70%",
    left: "50%",
    transform: "translateX(-50%)",
    margin: "2rem 0",
    fontSize: "2rem",
  },
});

export const ProfilePhoto = styled.img({
  position: "relative",
  left: "10%",
  top: "-7rem",
  height: 500,

  "@media screen and (max-width:1090px)": {
    height: 250,
    left: "50%",
    top: "1rem",
    transform: "translateX(-50%)",
  },
});

export const UserInfoSection = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridTemplateRows: "repeat(3, 1fr)",
  gridRowGap: 10,

  width: "40%",
  position: "absolute",
  right: "10%",
  top: "10%",
  marginTop: "2rem",
  padding: "1rem",

  backgroundColor: `${cyanHover}`,
  boxShadow: `${footerBG} 0px 8px 14px`,
  border: "none",
  borderRadius: "15px 0",
  color: "white",
  fontSize: "1rem",
  fontWeight: 600,

  transition: "all 1s ease-in-out",

  "& div>.profileIcon": {
    paddingRight: "0.7rem",
  },

  "& div:nth-of-type(even)": {
    fontWeight: 300,
    textAlign: "right",

    "@media screen and (max-width:1090px)": {
      textAlign: "center",
    },
  },

	"& #userEditBtn": {
		position: "relative",
  	left: "50%",
		transform: "translateX(-50%)",
		gridColumn: "1 / span 2",
  	height: "2.5rem",
  	width: "5rem",

		"&:hover": {
			backgroundColor: `${cyan}`,
			color: "white",
		},

		"@media screen and (max-width:1090px)": {
			gridColumn: "1"
		},
	},

  "@media screen and (max-width:1090px)": {
    position: "relative",
    width: "70%",
    left: "50%",
    transform: "translateX(-50%)",
    marginTop: "4rem",
    gridTemplateColumns: "repeat(1, 1fr)",
    gridTemplateRows: "repeat(6, 1fr)",
    textAlign: "center",
  },

  "@media screen and (max-width:500px)": {
    fontSize: 16,

    "& #profileEmail": {
      fontSize: 14,
    },
  },
});

export const ErrorTitle = styled.h1({
  paddingTop: "5rem",
  color: "white",
  fontSize: "2rem",
  fontWeight: 700,
  textAlign: "center",
  transition: "all 1s ease-in-out",

  "@media screen and (max-width:600px)": {
    fontSize: "1.5rem",
  },
});

export const ErrorSubTitle = styled.p({
  paddingBottom: "5rem",
  fontSize: "1.5rem",
  color: `${gray}`,
  textAlign: "center",
  transition: "all 1s ease-in-out",

  "@media screen and (max-width:600px)": {
    fontSize: "1rem",
  },
});

export const EditUserModalContent = styled.div({
  "& img": {
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
    height: 220,
    marginBottom: 20,
  },

  "& p": {
    textAlign: "center",

    "&:first-of-type": {
      fontWeight: 700,
      fontSize: "1.2rem",
    },
  },
});
