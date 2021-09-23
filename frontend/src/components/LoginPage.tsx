import { useState } from "react";
import axios from "axios";
import { Form, Input, Button, Checkbox } from "antd";
import { openNotificationWithIcon } from "../functions/Notification";
import styled from "@emotion/styled";
//import { LoginSuccessType } from "../types/LoginSuccessType";

export const LoginPage = () => {
  const [form] = Form.useForm();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const login = async () => {
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
          setEmail("");
          setPassword("");
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
        If you are not yet a user of the site, you can register by{" "}
        <a href="/signup">clicking here</a>!
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
            onChange={(e) => {
              setEmail(e.target.value);
            }}
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
            onChange={(e) => {
              setPassword(e.target.value);
            }}
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
});

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
    color: "hsl(180, 66%, 49%)",

    "&:hover": {
      fontStyle: "italic",
    },
  },
});
