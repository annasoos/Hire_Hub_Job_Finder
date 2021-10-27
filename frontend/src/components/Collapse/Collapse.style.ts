import styled from "@emotion/styled";
import { cyan, footerBG } from "../../style_guide";

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

		background: "radial-gradient(circle, hsl(180, 66%, 49%) 20%, hsl(180, 66%, 49%, 0.5) 100%)",
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
