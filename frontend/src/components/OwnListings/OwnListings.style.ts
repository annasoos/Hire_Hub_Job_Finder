import styled from "@emotion/styled";

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
  top: "20%",
  cursor: "pointer",
  transition: "all 1s ease-in-out",

  "@media screen and (max-width: 500px)": {
    right: 0,
    left: "30%",
    top: "auto",
    bottom: "9%",
  },
});

export const DeleteModalContent = styled.div({
  "& img": {
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
    height: 60,
    marginBottom: 20,
    filter: "invert(53%) sepia(22%) saturate(1974%) hue-rotate(317deg) brightness(102%) contrast(87%)",
  },

  "& p": {
    textAlign: "center",

    "&:first-of-type": {
      fontWeight: 700,
      fontSize: "1.2rem",
    },
  },
});

export const EditModalContent = styled.div({
  "& img": {
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
    height: 250,
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