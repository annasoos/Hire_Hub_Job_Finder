import { useState, useEffect } from "react";
import axios from "axios";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";
//design
import { Button, Input, Form, Select } from "antd";
import { PostFormContainer, PostFormContent, PostTitle, SearchImg } from "./PostPage.style";
import { lightgray } from "../../style_guide";
import SearchImage from "../../images/People search-rafiki.svg";
//types & functions
import { NewJobType } from "../../types/NewJobType";
import { PostFormValuesType } from "../../types/PostFormValuesType";
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
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [form] = Form.useForm();
  const token:string|null = localStorage.getItem("token");
	dotenv.config();
	const tokenKey:string = process.env.REACT_APP_TOKEN_KEY!

  //check whether token saved to local storage is expired
	useEffect(() => {
    if (token) {
			jwt.verify(token, tokenKey, function(err, decoded) {
				if (err) {
					console.log(err)
					setIsLoggedIn(false);
				} else {
					console.log(decoded);
					setIsLoggedIn(true);
				}
			});
    }
  }, [token, tokenKey]);


	//create new job object and send it to the server
  const submit = async (values: PostFormValuesType): Promise<void> => {
    const newID: string = uuidv4(); // generate random id
    const skillsArray: string[] = values.skills.replace(/,/g, "").split(" ");
    let levelOfJob: string = "";

    if (values.level !== undefined) {
      levelOfJob = values.level;
    }

    const newJob: NewJobType = {
      id: newID,
      position: values.position,
      company: values.company,
      level: levelOfJob,
      location: values.location,
      skills: skillsArray,
      description: values.description,
    };

		console.log(newJob)

    await axios
      .post("http://localhost:8080/api/post-a-job", newJob)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          openNotificationWithIcon(
            "success",
            "Successful!",
            `Candidates can now apply the ${newJob.position} position at ${newJob.company}.`
          );
        }
      })
      .catch((error) => {
        console.log("An error occured: ", error);
        openNotificationWithIcon(
          "error",
          "Oops...something went wrong!",
          "Please try again!"
        );
      });

		form.resetFields();
  };

	// conditional rendering based on user authentication
  const renderForm = () => {
    if (isLoggedIn) {
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
                  message: "Please provide a name for the position",
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
                  message: "Please provide the name of the company",
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
              <Select
                placeholder="Select the level of the position"
                id="levelInput"
              >
                <Option value="Junior">Junior</Option>
                <Option value="Medior">Medior</Option>
                <Option value="Senior">Senior</Option>
              </Select>
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
                    "Please provide the location of the office (if it is a remote position, you can add 'Remote')",
                },
              ]}
            >
              <Input
                placeholder="City name only"
                id="locationInput"
                allowClear
              />
            </Form.Item>

            {/* SKILLS */}
            <Form.Item
              label={
                <label style={{ color: "white" }}>
                  Required skills/technologies:
                </label>
              }
              name="skills"
              required
              rules={[
                {
                  required: true,
                  message:
                    "Please provide the most important skills expected from the applicants",
                },
              ]}
              extra={
                <div style={{ color: `${lightgray}`, fontSize: 14 }}>
                  Please provide keywords separated by comma (e.g: Java, Git,
                  Agile)
                </div>
              }
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
                  message: "Please provide a description",
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
      );
    } else {
      return (
        <h2>
          {" "}
          Sorry, only registered users can post new positions. <br /> But don't
          worry, you can easily create a new account by{" "}
          <a href="/signup">clicking here</a>!{" "}
        </h2>
      );
    }
  };

  return (
    <PostFormContainer>
      <PostTitle>
        Post a job & find the newest member of your team with us!
      </PostTitle>
      <SearchImg src={SearchImage} alt="illustration" />
      {renderForm()}
    </PostFormContainer>
  );
};
