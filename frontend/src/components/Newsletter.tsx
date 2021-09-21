import styled from "@emotion/styled";
import { Input } from "antd";

export const Newsletter = () => {
  return (
    <NewsletterContainer>
      <NewsletterTitle> Be up to date with every opportunity </NewsletterTitle>
      <NewsletterText>
        Don't miss out on a single job offer by subscribing to our newsletter
        and join the Hire Hub community!
      </NewsletterText>
      <Input
        className="input"
        placeholder="Add your e-mail adress"
        allowClear
        type="email"
        name="email"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
        autoComplete="on"
      ></Input>
      <Button>Subscribe</Button>
    </NewsletterContainer>
  );
};

const NewsletterContainer = styled.section({
  width: "100%",
  height: 350,
  backgroundColor: "hsl(219, 30%, 18%)",
  padding: "2rem",

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",
  left: "50%",
  transform: "translateX(-50%)",
  transition: "all 1s ease-in-out",

  "& .input": {
    borderRadius: 10,
    width: "50%",
    transition: "all 1s ease-in-out",

    "@media only screen and (max-width: 1090px)": {
      textAlign: "center",
      width: "80%",
      textIndent: 0,
      margin: "0.5rem 0",
    },

    "@media only screen and (max-width: 600px)": {
      textAlign: "center",
      fontSize: "0.7rem",
    },
  },
});

const NewsletterTitle = styled.h1({
  color: "white",
  fontSize: "2rem",
  fontWeight: 700,
  textAlign: "center",

  "@media only screen and (max-width: 820px)": {
    fontSize: "1.3rem",
  },
});

const NewsletterText = styled.p({
  color: "hsl(0, 0%, 75%)",
  textAlign: "center",
  width: "50%",

  "@media only screen and (max-width: 820px)": {
    width: "90%",
    fontSize: "0.8rem",
  },
});

const Button = styled.button({
  fontSize: "1rem",
  fontWeight: 700,
  height: "2.5rem",

  color: "white",
  backgroundColor: "hsl(180, 66%, 49%)",
  borderRadius: 20,
  width: "10rem",
  marginTop: "1rem",

  "&:hover": {
    backgroundColor: "hsla(180, 66%, 49%, 0.5)",
  },
});
