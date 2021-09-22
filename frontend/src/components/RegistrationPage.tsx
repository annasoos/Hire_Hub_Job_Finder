import { useState } from 'react';
import axios from "axios";
import { Form, Input, Button, notification } from "antd";
import styled from "@emotion/styled";
import { RegUserType } from "../types/RegUserType";
import businessManIllustration from "../images/Businessman-pana.svg";
import laptopGirlIllustration from "../images/Startup life-pana.svg";

export const RegistrationPage = () => {

	const [form] = Form.useForm();

	const [firstName, setFirstName] = useState<string>("");
	const [lastName, setLastName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const registration = async () => {

		const newUser = { firstName, lastName, email, password };

		await axios.post("http://localhost:8080/api/signup", newUser)
			.then(res => {
				if (res.status === 201) {
					console.log("New user added", res);
					openNotificationWithIcon(
						"success",
						"Welcome!",
						"Post a job and find your new teammate! Good luck!"
					);
					setFirstName("");
					setLastName("");
					setEmail("");
					setPassword("");
				} 
			})
			.catch(error => {
				console.log("An error occured: ", error.response)
				if (error.response.status === 400) {
					openNotificationWithIcon(
						"error",
						"Oops..something went wrong!",
						"Please provide all the necessary data."
					);
				} 
				else if (error.response.status === 409) {
					openNotificationWithIcon(
						"error",
						"Oops..something went wrong!",
						"It looks like you've already registered in our system. Please try and login."
					);
				}
			})
		
		form.resetFields()  //nem működik, miért?????
	}

  const openNotificationWithIcon = (
    type: string,
    message: string,
    description: string
  ): void => {
    if (type === "success" || type === "error")
      notification[type]({ message: message, description: description });
    return;
  };


  /* const onFinish = (values: RegUserType) => {
    console.log("Success finish:", values);
  };

  const onFinishFailed = (errorInfo: object) => {
    console.log("Failed:", errorInfo);
    openNotificationWithIcon(
      "error",
      "Oops..something went wrong!",
      "Please try again."
    );
  }; */

  return (
    <RegContainer>
      <RegTitle>Why register?</RegTitle>
      <RegText>
        After logging in, you can create and post new job opportunities to our
        database. <br /> Let us help you find the newest member of your team!
      </RegText>
      <RegImgContainer>
        <img id="businessMan" src={businessManIllustration} alt="illustration" />
        <img id="laptopGirl" src={laptopGirlIllustration} alt="illustration" />
      </RegImgContainer>
      <Form
        className="regForm"
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={registration}
        autoComplete="off"
        colon={false}
      >
        {/* FIRST NAME*/}
        <Form.Item
          label={<label style={{ color: "white" }}>First Name:</label>}
          name="firstName"
          rules={[
            {
              required: true,
              message: "Please add your first name!",
            },
          ]}
        >
          <Input className="input" allowClear onChange={(e) => {setFirstName(e.target.value)}} />
        </Form.Item>

        {/* LAST NAME*/}
        <Form.Item
          label={<label style={{ color: "white" }}>Last Name:</label>}
          name="lastName"
          rules={[
            {
              required: true,
              message: "Please add your last name!",
            },
          ]}
        >
          <Input className="input" allowClear onChange={(e) => {setLastName(e.target.value)}} />
        </Form.Item>

        {/* EMAIL */}
        <Form.Item
          label={<label style={{ color: "white" }}>E-mail adress:</label>}
          name="email"
          rules={[
            {
              required: true,
              message: "Please add your e-mail adress!",
							type: "email"
            },
          ]}
        >
          <Input className="input" allowClear onChange={(e) => {setEmail(e.target.value)}} />
        </Form.Item>

        {/* PASSWORD */}
        <Form.Item
          label={<label style={{ color: "white" }}>Password:</label>}
          name="password"
          rules={[
            {
              required: true,
              message: "Please add a password!",
            },
          ]}
        >
          <Input.Password className="input" allowClear onChange={(e) => {setPassword(e.target.value)}}/>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 9,
            span: 8,
          }}
        >
          <Button type="primary" htmlType="submit">
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </RegContainer>
  );
};

const RegContainer = styled.div({
  width: "100%",
  margin: "0 0 5rem 0",
  position: "relative",

  "& .regForm": {
    "& .ant-row": {
      display: "block",
      width: "40%",
      position: "relative",
      left: "50%",
      transform: "translateX(-50%)",
    },
  },
	
	"@media(max-width: 1090px)": {
		minHeight: "55vh",
	},
});

const RegTitle = styled.h1({
  color: "white",
  width: "60%",
  textAlign: "center",
  fontSize: 25,
  fontWeight: 700,
  padding: "0 0 2rem 0",
  margin: "auto",
  transition: "all 1s ease-in-out",

  "@media(max-width: 450px)": {
    fontSize: 20,
  },
});

const RegText = styled.p({
  color: "white",
  width: "60%",
  textAlign: "center",
  fontSize: 20,
  fontWeight: 500,
  padding: "0 0 2rem 0",
  margin: "auto",
  transition: "all 1s ease-in-out",

  "@media(max-width: 450px)": {
    fontSize: 18,
  },
});

const RegImgContainer = styled.div({
  height: 500,
  width: "105%",
  position: "absolute",
  bottom: "-7rem",
  left: "-5%",

  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",

	"@media(max-width: 1090px)": {
		height: 350,
		bottom: "-6.5rem",
	},

	"@media(max-width: 500px)": {
		display: "none"
	},

});
