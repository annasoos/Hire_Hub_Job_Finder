import axios from "axios";
import { LoginTitle, LoginContainer } from "./LoginPage.style";
import { Form, Input, Button, Checkbox } from "antd";
import { openNotificationWithIcon } from "../../functions/Notification";
import { LoginSuccessType } from "../../types/LoginSuccessType";

export const LoginPage = () => {
  const [form] = Form.useForm();

  const login = async (values:LoginSuccessType) => {
		const email = values.email;
		const password = values.password;
		const remember = values.remember;

    const loginUser = { email, password, remember };

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
					localStorage.setItem("token", res.data.token)
        }
      })
      .catch((error) => {
        console.log("An error occured: ", error.response);

        if (error.response.status === 400) {
          openNotificationWithIcon(
            "error",
            "Oops..something went wrong!",
            "Please provide all the necessary data."
          );
        } else if (error.response.status === 409) {
          openNotificationWithIcon(
            "error",
            "Oops..something went wrong!",
            "E-mail address or password is incorrect. Please try again!"
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
        initialValues={{
          remember: true,
        }}
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
          <Input
            className="input"
            allowClear
          />
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
          <Input.Password
            className="input"
            allowClear
          />
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