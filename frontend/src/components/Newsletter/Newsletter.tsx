import { Input } from "antd";
import { NewsletterContainer, NewsletterTitle, Button, NewsletterText } from "./Newsletter.style";

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
