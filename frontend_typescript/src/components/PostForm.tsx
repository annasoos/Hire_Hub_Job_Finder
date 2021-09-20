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

	const [form] = Form.useForm();

  const onFinish = () => {
    console.log("Posted");
  };

  return (
    <PostFormContainer>
			<PostTitle>Post a job & find the newest member of your team with us!</PostTitle>
      <PostFormContent>
        <Form form={form} {...layout} name="nest-messages" onFinish={onFinish} colon={false}>
          {/* POSITION NAME */}
          <Form.Item
            label={<label style={{ color: "white" }}>Position name:</label>}
            style={{ color: "white" }}
						required
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
						required
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
						required
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
              <label style={{ color: "white" }}>Detailed description:</label>
            }
						required
            rules={[
              {
                required: true,
                message:
                  "Please provide a description about the expactations and the compensation package",
              },
            ]}
          >
            <Input.TextArea rows={5} />
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
	color: 'white',
	width: "53%",
	textAlign: "right",
  fontSize: 30,
	fontWeight: 700,
	textIndent: "3rem",
	padding: '0 0 2rem 0',
	transition: 'all 1s ease-in-out',

	"@media(max-width: 1090px)": {
		width: "100%",
		textAlign: "center",
		textIndent: "unset",
	},

	"@media(max-width: 450px)": {
		fontSize: 25
	}
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
    top: "10%"
  },
});
