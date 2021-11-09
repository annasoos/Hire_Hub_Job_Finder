import styled from "@emotion/styled";
import { cyan } from "../../style_guide";

export const EyeIcon = styled.img({
  position: "absolute",
  right: "10%",
  top: "45%",
  cursor: "pointer",
  transition: "all 1s ease-in-out",

  "@media screen and (max-width: 500px)": {
    right: 0,
    left: "50%",
		transform: "translateX(-50%)",
    top: "auto",
    bottom: "9%",
  },
});

export const DetailsModalContent = styled.div({
  "& h3, p": {
    textAlign: "center",
		fontWeight: 700,
  },

	"& h3, p.level": {
		margin: 0,
		padding: 0
	},

	"& p.details": {
		fontWeight: 500
	},

	"& p.location": {
		fontWeight: 500,
		color: `${cyan}`,
	}
});