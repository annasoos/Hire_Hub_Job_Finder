import { useState, useEffect } from "react";
import { Button, Input, Form, Select, notification } from "antd";
import styled from "@emotion/styled";
import SearchImage from "../images/People search-rafiki.svg";
import { NewJobType } from "../types/NewJobType";

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

  const [form] = Form.useForm();

  const openNotificationWithIcon = (type: string, message: string, description: string ): void => {
    if (type === "success")
      notification[type]({ message: message, description: description });
    return;
  };

  const onFinish = (values: NewJobType): void => {
    setNewJob(values);
  };

  useEffect(() => {
    if (newJob !== undefined) {
      openNotificationWithIcon(
        "success",
        "Successful!",
        `Candidates can now apply the ${newJob.position} position at ${newJob.company}.`
      );
    }
  }, [newJob]);

  return (
    <PostFormContainer>
      <PostTitle>
        Post a job & find the newest member of your team with us!
      </PostTitle>
      <SearchImg src={SearchImage} alt="illustration" />
      <PostFormContent>
        <Form
          {...layout}
          form={form}
          name="nest-messages"
          onFinish={onFinish}
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
    </PostFormContainer>
  );
};

const PostFormContainer = styled.section({
  position: "relative",
  width: "100%",
  height: "auto",
  minHeight: "80vh",
  padding: "3%",
});

const PostTitle = styled.h1({
  color: "white",
  width: "70%",
  textAlign: "center",
  fontSize: 30,
  fontWeight: 700,
	margin: "auto",
  transition: "all 1s ease-in-out",

  "@media(max-width: 1090px)": {
    width: "100%",
    textAlign: "center",
  },

  "@media(max-width: 450px)": {
    fontSize: 25,
  },
});

const PostFormContent = styled.div({
  width: "80%",
  height: "80%",

  "& .ant-form-item-label": {
    "& label": {
      "& span.ant-form-item-optional": {
        color: "hsl(0, 0%, 75%)",
        fontSize: 14,
      },
    },
  },
  "@media(max-width: 1090px)": {
    marginTop: "55%",
  },
  "& .ant-input": {
    "@media(max-width: 1090px)": {
      width: "100%",
    },
  },
});

const SearchImg = styled.img({
  position: "relative",
	left: "50%",
	transform: "translateX(-50%)",
	width: "30%",
  transition: "all 1s ease-in-out",

  "@media(max-width: 1090px)": {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    width: "50%",
  },

  "@media(max-width: 450px)": {
    top: "10%",
  },
});
