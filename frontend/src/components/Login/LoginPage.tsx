import { FC } from "react";
import { useHistory } from 'react-router';
import axios from "axios";
//design & components
import { Form, Input, Button } from "antd";
import { LoginTitle, LoginContainer } from "./LoginPage.style";
//types & functions & context
import { openNotificationWithIcon } from "../../functions/Notification";
import { LoginSuccessType } from "../../types/LoginSuccessType";
import { TokenSetterPropsType } from "../../types/TokenSetterPropsType";

export const LoginPage:FC<TokenSetterPropsType> = ({tokenSetter}) => {
  const [form] = Form.useForm();
	const history = useHistory();

  const login = async (values:LoginSuccessType) => {
		const email = values.email;
		const password = values.password;

    const loginUser = { email, password };

    await axios
      .post("http://localhost:8080/api/login", loginUser)
      .then((res) => {
        if (res.status === 200) {
          console.log("User logged in", res);
          openNotificationWithIcon(
            "success",
            "Welcome back!",
            "Good to see you again!"
          );
					localStorage.setItem("token", res.data.token);
					tokenSetter(res.data.token);
					history.push("/")
        } else {
					console.log(res)
				}
      })
      .catch((error) => {
        console.log("An error occured: ", error.response);
				if (error.response.status === 409) {
          openNotificationWithIcon(
            "error",
            "Oops..something went wrong!",
            "E-mail address or password is incorrect. Please try again!"
          );
        } else {
					openNotificationWithIcon(
            "error",
            "Oops..something went wrong!",
            "An error occured. Please try again!"
          );
				}
      });
    form.resetFields();
  };

  return (
    <LoginContainer>
      <LoginTitle>
        If you are not yet a user of the site, you can register by <a href="/signup">clicking here</a>!
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