import { Form, Input, Button, Checkbox, notification } from "antd";
import styled from "@emotion/styled";
import { LoginSuccessType } from "../types/LoginSuccessType";

export const LoginPage = () => {

	const openNotificationWithIcon = (type: string, message: string, description: string ): void => {
    if (type === "success" || type === "error")
      notification[type]({ message: message, description: description });
    return;
  };

  const onFinish = (values: LoginSuccessType) => {
    console.log("Success:", values);
		openNotificationWithIcon(
			"success",
			"Welcome back!",
			"Post a job and find your new teammate! Good luck!"
		);
  };

  const onFinishFailed = (errorInfo: object) => {
    console.log("Failed:", errorInfo);
		openNotificationWithIcon(
			"error",
			"Oops..something went wrong!",
			"Please enter a correct e-mail adress and password."
		);
  };

  return (
    <LoginContainer>
      <LoginTitle>
				If you are not yet a user of the site, you can register by <a href="/signup">clicking here</a>!
      </LoginTitle>
      <Form
				className="loginForm"
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        colon={false}
      >
        <Form.Item
          label={<label style={{ color: "white" }}>E-mail adress:</label>}
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your e-mail adress!",
            },
          ]}
        >
          <Input className="input" allowClear/>
        </Form.Item>

        <Form.Item
          label={<label style={{ color: "white" }}>Password:</label>}
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password className="input" allowClear />
        </Form.Item>

        <Form.Item
					className="rememberMe"
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 9,
            span: 8,
          }}
        >
          <Checkbox style={{ color: "white" }}>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 9,
            span: 8,
          }}
        >
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </LoginContainer>
  );
};

const LoginContainer = styled.div({
	width: "100%",
	margin: "2rem 0 5rem 0",

	"& .loginForm": {
		"& .ant-row": {
			display: "block",
			width: "40%",
			position: "relative",
			left: "50%",
			transform: "translateX(-50%)",
		},
	},
})

const LoginTitle = styled.h1({
  color: "white",
  width: "100%",
  textAlign: "center",
  fontSize: 25,
  fontWeight: 700,
  padding: "0 0 2rem 0",
  transition: "all 1s ease-in-out",

  "@media(max-width: 450px)": {
    fontSize: 20,
  },

	"& a": {
		color:  "hsl(180, 66%, 49%)",

		"&:hover": {
			fontStyle: "italic"
		}
	}
});

