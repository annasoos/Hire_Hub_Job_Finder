import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { Button, Input, Form, Select } from "antd";
import { PostFormContainer, PostFormContent, PostTitle, SearchImg } from "./PostPage.style";
import SearchImage from "../../images/People search-rafiki.svg";
import { NewJobType } from "../../types/NewJobType";
import { openNotificationWithIcon } from "../../functions/Notification";

const { Option } = Select;

const layout = {
  labelCol: {
    span: 10,
  },
  wrapperCol: {
    span: 11,
  },
};

export const PostForm = () => {

  const [newJob, setNewJob] = useState<NewJobType>();
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [form] = Form.useForm();
	const token = localStorage.getItem("token");

	useEffect(() => {
		if (token){
			//const decoded = jwt_decode(token);
			setIsLoggedIn(true);
		}
	},[token])

  const submit = (values: NewJobType): void => {
    setNewJob(values);
  };

/*   useEffect(() => {
    if (newJob !== undefined) {
      openNotificationWithIcon(
        "success",
        "Successful!",
        `Candidates can now apply the ${newJob.position} position at ${newJob.company}.`
      );
    }
  }, [newJob]); */

	const renderForm = () => {
		if(isLoggedIn){
			return (
				<PostFormContent>
        <Form
          {...layout}
          form={form}
          name="nest-messages"
          onFinish={submit}
          colon={false}
					autoComplete="off"
        >
          {/* POSITION NAME */}
          <Form.Item
            label={<label style={{ color: "white" }}>Position name:</label>}
            name="position"
            style={{ color: "white" }}
            required
            rules={[
              {
                required: true,
                message: "Please provide a name for the position.",
              },
            ]}
          >
            <Input id="positionInput" allowClear />
          </Form.Item>

          {/* COMPANY NAME */}
          <Form.Item
            label={<label style={{ color: "white" }}>Company name:</label>}
            name="company"
            required
            rules={[
              {
                required: true,
                message: "Please provide the name of the company.",
              },
            ]}
          >
            <Input id="companyInput" allowClear />
          </Form.Item>

          {/* LEVEL */}
          <Form.Item
            label={<label style={{ color: "white" }}>Level:</label>}
            name="level"
            rules={[
              {
                required: false,
              },
            ]}
            requiredMark="optional"
          >
            <Input.Group compact>
              <Form.Item noStyle>
                <Select
                  placeholder="Select the level of the position"
                  id="levelInput"
                >
                  <Option value="Junior">Junior</Option>
                  <Option value="Medior">Medior</Option>
                  <Option value="Senior">Senior</Option>
                </Select>
              </Form.Item>
            </Input.Group>
          </Form.Item>

          {/* LOCATION */}
          <Form.Item
            label={
              <label style={{ color: "white" }}>Location of the work:</label>
            }
            name="location"
            required
            rules={[
              {
                required: true,
                message:
                  "Please provide the location of the office (if it is a remote position, you can clarify it in the description field.)",
              },
            ]}
          >
            <Input placeholder="City name only" id="locationInput" allowClear />
          </Form.Item>

					{/* SKILLS */}
          <Form.Item
            label={
              <label style={{ color: "white" }}>Required skills/technologies:</label>
            }
            name="skills"
            rules={[
              {
                required: false,
              },
            ]}
						requiredMark="optional"
						extra={<div style={{color: "hsl(0, 0%, 75%)", fontSize: 14}}>Please provide keywords separated by comma (e.g: Java, Git, Agile)</div>}
          >
            <Input id="locationInput" allowClear />
          </Form.Item>

          {/* DESCRIPTION */}
          <Form.Item
            label={
              <label style={{ color: "white" }}>Detailed description:</label>
            }
            name="description"
            required
            rules={[
              {
                required: true,
                message: "Please provide a description.",
              },
            ]}
          >
            <Input.TextArea rows={5} id="descriptionInput" allowClear />
          </Form.Item>

          {/* BUTTON */}
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 14 }}>
            <Button type="primary" htmlType="submit">
              Post
            </Button>
          </Form.Item>
        </Form>
      </PostFormContent>
			)
		} else {
			return (
				<h2> Sorry, only registered users can post new positions. <br /> But don't worry, you can easily create a new account by <a href="/signup">clicking here</a>! </h2>
			)
		}
	}

  return (
    <PostFormContainer>
      <PostTitle>
        Post a job & find the newest member of your team with us!
      </PostTitle>
      <SearchImg src={SearchImage} alt="illustration" />

			{/* CONDITIONAL RENDERING BASED ON REGISTRATION */}
      {renderForm()}

    </PostFormContainer>
  );
};