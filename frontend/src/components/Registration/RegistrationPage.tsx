import axios from "axios";
//design & components
import { Form, Input, Button } from "antd";
import { RegContainer, RegTitle, RegImgContainer, RegText } from "./Registration.style";
import businessManIllustration from "../../images/Businessman-pana.svg";
import laptopGirlIllustration from "../../images/Startup life-pana.svg";
//types & functions
import { openNotificationWithIcon } from "../../functions/Notification";
import { RegUserType } from "../../types/RegUserType";

export const RegistrationPage = () => {
  const [form] = Form.useForm();

  const registration = async (values: RegUserType) => {
    const firstName = values.firstName;
    const lastName = values.lastName;
    const email = values.email;
    const password = values.password;

    const newUser = { firstName, lastName, email, password };

    await axios
      .post("http://localhost:8080/api/signup", newUser)
      .then((res) => {
        if (res.status === 201) {
          console.log("New user added", res);
          openNotificationWithIcon(
            "success",
            "Welcome!",
            "Post a job and find your new teammate! Good luck!"
          );
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
            "It looks like you've already registered in our system. Please try and login."
          );
        }
      });

    form.resetFields();
  };

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

        <Form.Item wrapperCol={{ offset: 10, span: 8 }} >
          <Button type="primary" htmlType="submit">
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </RegContainer>
  );
};
