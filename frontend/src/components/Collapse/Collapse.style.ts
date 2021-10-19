import styled from "@emotion/styled";
import { cyan, cyanHover, footerBG } from "../../style_guide";

export const CollapseSection = styled.div({
  position: "relative",
  height: "auto",
  transition: "all 1s ease-in-out",

  "& .collapse": {
    width: "70%",
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
    margin: "1rem 0",

    backgroundColor: `${cyanHover}`,
    boxShadow: `${footerBG} 0px 8px 14px`,
    border: "none",
    borderRadius: "15px 0",

    "& .ant-collapse-header": {
      color: "white",
      fontWeight: 700,
    },

    "& .ant-collapse-content": {
      padding: 0,
      border: "none",
      borderRadius: "15px 0",
      backgroundColor: "transparent",

      "& #addBtn": {
        margin: "0.5rem 0",

        "&:hover": {
          backgroundColor: `${cyan}`,
          color: "white",
        },
      },
    },
  },
});

export const ModalContent = styled.div({
  "& img": {
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
    height: 60,
    marginBottom: 20,
    filter:
      "invert(53%) sepia(22%) saturate(1974%) hue-rotate(317deg) brightness(102%) contrast(87%)",
  },

  "& p": {
    textAlign: "center",

    "&:first-of-type": {
      fontWeight: 700,
      fontSize: "1.2rem",
    },
  },

	"& p.details": {
		fontWeight: 500
	}
});
