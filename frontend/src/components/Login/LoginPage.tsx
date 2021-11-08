import { FC, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useMutation } from "@apollo/client";
//design & components
import { Form, Input, Button } from "antd";
import { LoginTitle, LoginContainer } from "./LoginPage.style";
import loginIllustration from "../../utils/images/Fingerprint-pana.svg";
//types & functions & context
import { openNotificationWithIcon } from "../../utils/functions/Notification";
import { LoginSuccessType } from "../../utils/types/LoginSuccessType";
import { UserContext } from "../../utils/context/UserContext";
// queries
import { LOGIN_MUTATION } from "../../utils/GqlQueries";

export const LoginPage: FC = () => {
  const [form] = Form.useForm();
  const history = useHistory();
  const userContext = useContext(UserContext);
  const [loginUser, { data, loading, error }] = useMutation(LOGIN_MUTATION);

  const login = (values: LoginSuccessType) => {
    loginUser({
      variables: {
        email: values.email,
        password: values.password,
      },
    });
  };

	if(!loading && !error && data) {
		if (data.login.message === "User successfully logged in") {
      localStorage.setItem("token", data.login.token);
      userContext.setToken(data.login.token);
      openNotificationWithIcon(
        "success",
        "Welcome back!",
        "Good to see you again!"
      );
      history.push("/");
    } else if (data.login.message === "Invalid password" || data.login.message === "User not found") {
      openNotificationWithIcon(
        "error",
        "Oops..something went wrong!",
        "E-mail address or password is incorrect. Please try again!"
      );
      form.resetFields();
    }
	}

  return (
    <LoginContainer>
      <img id="fingerprint" src={loginIllustration} alt="illustration" />
      <LoginTitle>
        If you are not yet a user of the site, you can register by{" "}
        <a href="/signup">clicking here</a>!
      </LoginTitle>

      <Form
        className="loginForm"
        name="basic"
        form={form}
        onFinish={login}
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
          <Input className="input" allowClear />
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

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </LoginContainer>
  );
};
