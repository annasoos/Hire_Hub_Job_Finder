import { Button, Input, Form, Select } from "antd";
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
  const onFinish = () => {
    console.log("Posted");
  };

  return (
    <PostFormContainer>
      <PostFormContent>
        <Form {...layout} name="nest-messages" onFinish={onFinish}>
          {/* POSITION NAME */}
          <Form.Item
            label={<label style={{ color: "white" }}>Position name:</label>}
            style={{ color: "white" }}
            rules={[
              {
                required: true,
                message: "Please provide a name for the position",
              },
            ]}
          >
            <Input />
          </Form.Item>

          {/* COMPANY NAME */}
          <Form.Item
            label={<label style={{ color: "white" }}>Company name:</label>}
            rules={[
              {
                required: true,
                message:
                  "Please provide the name of the company you are recruiting for",
              },
            ]}
          >
            <Input />
          </Form.Item>

          {/* LEVEL */}
          <Form.Item
            label={<label style={{ color: "white" }}>Level:</label>}
            rules={[
              {
                required: false,
              },
            ]}
            requiredMark="optional"
          >
            <Input.Group compact>
              <Form.Item noStyle>
                <Select placeholder="Select the level of the position">
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
            rules={[
              {
                required: true,
                message:
                  "Please provide the location of the office (if it is a remote position, you can clarify it in the description field.",
              },
            ]}
          >
            <Input placeholder="City name only" />
          </Form.Item>

          {/* DESCRIPTION */}
          <Form.Item
            label={
              <label style={{ color: "white" }}>
                Detailed description of the position:
              </label>
            }
            rules={[
              {
                required: true,
                message:
                  "Please provide a description about the expactations and the compensation package",
              },
            ]}
          >
            <Input.TextArea />
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

const PostFormContainer = styled.section`
	position: relative;
  width: 100%;
	height: auto;
	min-height: 80vh;
  padding: 5% 10%;
`;

const PostFormContent = styled.div`
  width: 80%;
  height: 80%;

  & .ant-form-item-label > label::after {
    content: "";
  }

  & .ant-form-item-label > label .ant-form-item-optional {
    color: hsl(0, 0%, 75%);
  }

	@media only screen and (max-width: 1090px) {
		margin-top: 78%;
	};

	& .ant-input{
		@media only screen and (max-width: 1090px) {
			width: 100%;
	};
	}
`;

const SearchImg = styled.img`
  position: absolute;
	width: 32%;
	right: 10%;
	top: -3%;
	z-index: 1;
	transition: all 1s ease-in-out;

	@media only screen and (max-width: 1090px) {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		width: 70%;
	};
`
