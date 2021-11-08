import { useMutation } from '@apollo/client';
import { useHistory } from "react-router";
//design & components
import { Form, Input, Button } from "antd";
import { RegContainer, RegTitle, RegImgContainer, RegText } from "./Registration.style";
import businessManIllustration from "../../utils/images/Businessman-pana.svg";
import laptopGirlIllustration from "../../utils/images/Startup life-pana.svg";
//types & functions
import { openNotificationWithIcon } from "../../utils/functions/Notification";
import { RegUserType } from "../../utils/types/RegUserType";
// queries
import { SIGNUP_MUTATION } from "../../utils/GqlQueries";
import { useEffect, useState } from 'react';

export const RegistrationPage = () => {
  const [form] = Form.useForm();
	const history = useHistory();
	const [isLoaded, setIsLoaded] = useState(false);
	const [isError, setIsError] = useState(false);
	const [signupUser, { data, loading, error }] = useMutation(SIGNUP_MUTATION);

  const registration = async (values: RegUserType) => {
		signupUser({
      variables: {
				firstName: values.firstName,
				lastName: values.lastName,
        email: values.email,
        password: values.password,
      }
    })
		.then(() => {
			if(!loading) {
				setIsLoaded(true);
			}
		})
		.catch((error) => {
			setIsError(true)
		})
  }

	useEffect(() => {
		if (isLoaded && !isError) {
			openNotificationWithIcon(
				"success",
				"Welcome!",
				"You can now log in and post new jobs to our database!"
			);
			history.push('/login');
		} else if (isError) {
			console.log(JSON.stringify(error, null, 2));
			openNotificationWithIcon(
				"error",
        "Oops..something went wrong!",
        "It looks like you've already registered in our system. Please try and login."
			);
			form.resetFields();
			setIsLoaded(false);
			setIsError(false);
		}
  }, [isLoaded, isError]);

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
        form={form}
        onFinish={registration}
        autoComplete="off"
        colon={false} >

        {/* FIRST NAME*/}
        <Form.Item
          label={<label style={{ color: "white" }}>First Name:</label>}
          name="firstName"
          rules={[{ required: true, message: "Please add your first name!" }]} >
          <Input className="input" allowClear />
        </Form.Item>

        {/* LAST NAME*/}
        <Form.Item
          label={<label style={{ color: "white" }}>Last Name:</label>}
          name="lastName"
          rules={[{ required: true, message: "Please add your last name!" }]} >
          <Input className="input" allowClear />
        </Form.Item>

        {/* EMAIL */}
        <Form.Item
          label={<label style={{ color: "white" }}>E-mail address:</label>}
          name="email"
          rules={[{ required: true, message: "Please add your e-mail address!", type: "email" }]} >
          <Input className="input" allowClear />
        </Form.Item>

        {/* PASSWORD */}
        <Form.Item
          label={<label style={{ color: "white" }}>Password:</label>}
          name="password"
          rules={[{ required: true, message: "Please add a password!" }]} >
          <Input.Password className="input" allowClear />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </RegContainer>
  );
};
