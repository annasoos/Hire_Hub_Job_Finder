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