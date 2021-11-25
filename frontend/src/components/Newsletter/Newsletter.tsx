import { Input, Form } from "antd";
import { openNotificationWithIcon } from "../../utils/functions/Notification";
import { NewsletterContainer, NewsletterTitle, Button, NewsletterText } from "./Newsletter.style";

export const Newsletter = () => {
	const [form] = Form.useForm();
	const submit = () => {
		openNotificationWithIcon(
			"success",
			"Yaaay!",
			"You subscribed to our weekly newsletter. Please check your emails for our confirmation."
		);
	}
  
	return (
    <NewsletterContainer>
      <NewsletterTitle> Be up to date with every opportunity </NewsletterTitle>
      <NewsletterText>
        Don't miss out on a single job offer by subscribing to our newsletter
        and join the Hire Hub community!
      </NewsletterText>
      <Form
        className="newsletterForm"
        form={form}
        onFinish={submit}
        colon={false}
        autoComplete="off"
      >
        <Form.Item
					className="input"
          name="email"
          required
          rules={[{ required: true, message: "Please provide a valid email address", type: "email" }]}
        >
          <Input className="input" allowClear placeholder="Add your e-mail adress" />
        </Form.Item>
        <Form.Item>
          <Button>
            Subscribe
          </Button>
        </Form.Item>
      </Form>
    </NewsletterContainer>
  );
};
