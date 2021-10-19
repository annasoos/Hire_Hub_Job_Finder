import styled from "@emotion/styled";
import { darkBlue, footerBG, red } from "../../style_guide";

export const LoadingText = styled.div({
  height: "50%",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  fontSize: 35,
  fontWeight: 700,
  color: "white",
  textAlign: "center",

  transition: "all 1s ease-in-out",

  "@media(max-width: 1090px)": {
    fontSize: "1.5rem",
  },
});

export const JobListSection = styled.div({
  "@media screen and (max-width: 1090px)": {
    marginTop: "2rem",
  },
});

export const JobContainer = styled.div({
  position: "relative",
  height: "auto",
  minHeight: "50vh",
  padding: "1rem 0 5rem 0",

  transition: "all 1s ease-in-out",
});

export const JobContent = styled.div(
  {
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
    fontSize: "1rem",
    width: "70%",
    height: "auto",
    backgroundColor: `${darkBlue}`,
    padding: "2rem 2rem",
    margin: "2rem 0",
    boxShadow: `${footerBG} 0px 8px 14px`,
    borderRadius: "15px 0",

    transition: "all 1s ease-in-out",

    "&.inCollapse": {
      width: "100%",
      margin: "1rem 0",
      cursor: "default",

      "@media screen and (max-width: 500px)": {
        paddingBottom: "3rem",
      },
    },

    "& .myPostPosLev": {
      padding: 0,
      transition: "all 1s ease-in-out",

      "@media screen and (max-width: 500px)": {
        fontSize: 18,
      },
    },
  },
  (props) => ({ backgroundColor: props.color })
);

export const Position = styled.span(
  {
    fontSize: 20,
  },
  (props) => ({ color: props.color })
);

export const Level = styled.span(
  {
    paddingLeft: 10,
  },
  (props) => ({ color: props.color })
);

export const Location = styled.h5(
  {
    paddingTop: 20,
  },
  (props) => ({ color: props.color })
);

export const Company = styled.h5(
  {
    margin: 0,
  },
  (props) => ({ color: props.color })
);

export const Skills = styled.div(
  {
    transition: "all 1s ease-in-out",

    "& span": {
      "@media(max-width: 1000px)": {
        display: "block",
        fontSize: "0.8rem",
      },
    },
  },
  (props) => ({ color: props.color })
);

export const Description = styled.p(
  {
    fontSize: 18,
    fontWeight: 300,
    paddingTop: 20,
    textAlign: "justify",
  },
  (props) => ({ color: props.color })
);

export const DeleteIcon = styled.img({
  position: "absolute",
  right: "10%",
  top: "60%",
  cursor: "pointer",
  transition: "all 1s ease-in-out",

  "@media screen and (max-width: 500px)": {
    right: "30%",
    top: "auto",
    bottom: "9%",
  },
});

export const EditIcon = styled.img({
  position: "absolute",
  right: "10%",
  top: "30%",
  cursor: "pointer",
  transition: "all 1s ease-in-out",

  "@media screen and (max-width: 500px)": {
    right: 0,
    left: "30%",
    top: "auto",
    bottom: "9%",
  },
});

export const EyeIcon = styled.img({
  position: "absolute",
  right: "10%",
  top: "45%",
  cursor: "pointer",
  transition: "all 1s ease-in-out",

  "@media screen and (max-width: 500px)": {
    right: 0,
    left: "30%",
    top: "auto",
    bottom: "9%",
  },
});

export const FavButton = styled.button({
  position: "absolute",
  right: 36,
  top: 36,
  cursor: "pointer",
  height: 36,
  width: 36,
  transition: "all 1s ease-in-out",

  "& .unliked": {
    fontSize: 32,
    color: "white",
  },

  "& .liked": {
    fontSize: 32,
    color: `${red}`,
  },
});
