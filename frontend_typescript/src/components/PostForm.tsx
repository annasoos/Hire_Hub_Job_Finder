import { useState, useEffect } from "react";
import { Button, Input, Form, Select, notification } from "antd";
import styled from "@emotion/styled";
import SearchImage from "../images/People search-rafiki.svg";

const { Option } = Select;

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 10,
  },
};

export const PostForm = () => {

  type newJobType = {
    position: string;
    company: string;
    level: string;
    location: string;
    description: string;
  };

  const [newJob, setNewJob] = useState<newJobType>();

  const [form] = Form.useForm();

  const openNotificationWithIcon = (
    type: string,
    message: string,
    description: string
  ): void => {
    if (type === "success")
      notification[type]({ message: message, description: description });
    return;
  };

  const onFinish = (values: newJobType): void => {
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
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 10 }}>
            <Button type="primary" htmlType="submit">
              Post
            </Button>
          </Form.Item>
        </Form>
      </PostFormContent>

      <SearchImg src={SearchImage} alt="illustration" />
    </PostFormContainer>
  );
};

const PostFormContainer = styled.section({
  position: "relative",
  width: "100%",
  height: "auto",
  minHeight: "80vh",
  padding: "0 10% 5% 10%",
});

const PostTitle = styled.h1({
  color: "white",
  width: "53%",
  textAlign: "right",
  fontSize: 30,
  fontWeight: 700,
  textIndent: "3rem",
  padding: "0 0 2rem 0",
  transition: "all 1s ease-in-out",

  "@media(max-width: 1090px)": {
    width: "100%",
    textAlign: "center",
    textIndent: "unset",
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
    marginTop: "78%",
  },
  "& .ant-input": {
    "@media(max-width: 1090px)": {
      width: "100%",
    },
  },
});

const SearchImg = styled.img({
  position: "absolute",
  width: "36%",
  right: "5%",
  top: "5%",
  transition: "all 1s ease-in-out",

  "@media(max-width: 1090px)": {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    width: "70%",
  },

  "@media(max-width: 450px)": {
    top: "10%",
  },
});
