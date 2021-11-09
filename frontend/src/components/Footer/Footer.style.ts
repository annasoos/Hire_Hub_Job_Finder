import styled from "@emotion/styled";
import FooterLogo from "../../utils/images/footer_logo.svg";
import FooterLogoHover from "../../utils/images/footer_logo_hover.svg";
import { footerBG, cyan } from '../../style_guide';

export const FooterContainer = styled.section({
  width: "100%",
  height: "auto",
  padding: "5rem 10%",

  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",

  backgroundColor: `${footerBG}`,
  transition: "all 1s ease-in-out",

  "@media only screen and (max-width: 1000px)": {
    height: "auto",
    gridTemplateColumns: "33% 33% 33%",
    gridColumnGap: "5%",
  },

  "@media only screen and (max-width: 600px)": {
    height: "auto",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "repeat(5, 1fr)",
    justifyItems: "center",
		alignItems: "center",
    padding: "0 10%",
    gridRowGap: "2%",
  },
});

export const LogoLink = styled.a({
  cursor: "auto",

  "& div": {
    backgroundImage: `url(${FooterLogo})`,
    height: 50,
    width: 50,
  },

  "& div:hover": {
    backgroundImage: `url(${FooterLogoHover})`,
    cursor: "pointer",
  }
});

export const LinkContainer = styled.ul({
  "& li": {
    color: "white",
    fontWeight: 300,
    paddingBottom: "1rem",

    "& a": {
      "&:hover": {
        color: `${cyan}`,
      },
    },
  },

  "& h3": {
    color: "white",
    fontWeight: 700,
    paddingBottom: "1.3rem",
  },

  "@media only screen and (max-width: 600px)": {
    textAlign: "center",
  },
});

export const SocialContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  width: "100%",
  transition: "all 1s ease-in-out",

  "@media only screen and (max-width: 1000px)": {
    gridColumnStart: "1",
    gridColumnEnd: "2",
    gridRowStart: "2",
    gridRowEnd: "3",
  },

  "@media only screen and (max-width: 600px)": {
    gridColumnStart: "1",
    gridColumnEnd: "2",
    gridRowStart: "5",
    gridRowEnd: "-1",
  },

  "& .socialIcon": {
    fontSize: 25,
    cursor: "pointer",
		color: "white",

    "&:hover": {
      filter: "invert(56%) sepia(76%) saturate(400%) hue-rotate(131deg) brightness(101%) contrast(94%)",
    },
  },
});
