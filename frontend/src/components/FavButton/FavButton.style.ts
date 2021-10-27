import styled from "@emotion/styled";
import { red } from "../../style_guide";

export const HeartButton = styled.button({
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
		animation: "heartbeat .3s alternate",
		animationIterationCount: 4,
    fontSize: 32,
    color: `${red}`,
  },
});

export const LikeModalContent = styled.div({
  "& #inModalHeart": {
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
    fontSize: 60,
    marginBottom: 20,
    color: `${red}`,
  },

  "& p": {
    textAlign: "center",

    "&:first-of-type": {
      fontWeight: 700,
      fontSize: "1.2rem",
    },
  },
});