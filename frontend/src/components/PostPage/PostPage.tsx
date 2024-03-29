import { FC, useContext } from "react";
import { useMutation, useQuery } from "@apollo/client";
//design & components
import { Button, Input, Form, Select } from "antd";
import { PostFormContainer, PostFormContent, PostTitle, SearchImg, WelcomeTitle } from "./PostPage.style";
import { lightgray } from "../../style_guide";
import SearchImage from "../../utils/images/People search-rafiki.svg";
//types & functions & hoc
import { JobElementType } from "../../utils/types/JobElementType";
import { PostFormValuesType } from "../../utils/types/PostFormValuesType";
import { PostFormPropsType } from "../../utils/types/PostFormPropsType";
import { openNotificationWithIcon } from "../../utils/functions/Notification";
import withCurrentUser from "../HOC/withCurrentUser";
import { JobContext } from "../../utils/context/JobContext";
// queries
import { CREATE_JOB_MUTATION, FEED_QUERY } from "../../utils/GqlQueries";
import { getQueryVariables } from "../../utils/functions/getQueryVariable";

const { Option } = Select;

const PostForm: FC<PostFormPropsType> = ({ isLoggedIn, user }) => {
  const [form] = Form.useForm();
	const jobContext = useContext(JobContext);
	const queryVariables = getQueryVariables(jobContext.page, jobContext.jobsPerPage);
	const { refetch } = useQuery(FEED_QUERY,{
    variables: queryVariables
  })

	const [createJob] = useMutation(CREATE_JOB_MUTATION, {
		onCompleted: (data) => {
			openNotificationWithIcon(
				"success",
				"Successful!",
				`Candidates can now apply the ${data.post.position} position at ${data.post.company}.`
			);
			refetch()
			form.resetFields();
		}
	});

  const submit = async (values: PostFormValuesType): Promise<void> => {
    const newJob: Partial<JobElementType> = {
      position: values.position,
      company: values.company,
      level: values.level,
      location: values.location,
      skills: values.skills,
      description: values.description,
      creator: { 
				id: (user!.userId).toString(),
				email: user!.email },
			likes: []
    };
		createJob({ variables: newJob })
  };

  // conditional rendering based on user authentication (isLoggedIn and user props from HOC)
  const renderForm = () => {
    if (isLoggedIn) {
      return (
        <PostFormContent>
          <WelcomeTitle>
            Welcome <span>{user!.firstName}</span>!{" "}
          </WelcomeTitle>
          <Form
            className="postForm"
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
              rules={[{ required: true, message: "Please provide a name for the position" }]}
            >
              <Input id="positionInput" className="input" allowClear />
            </Form.Item>

            {/* COMPANY NAME */}
            <Form.Item
              label={<label style={{ color: "white" }}>Company name:</label>}
              name="company"
              required
              rules={[{ required: true, message: "Please provide the name of the company" }]}
            >
              <Input id="companyInput" className="input" allowClear />
            </Form.Item>

            {/* LEVEL */}
            <Form.Item
              className="input"
              label={<label style={{ color: "white" }}>Level:</label>}
              name="level"
              rules={[{ required: false }]}
              requiredMark="optional"
            >
              <Select
                placeholder="Select the level of the position"
                id="levelInput"
                className="input"
              >
                <Option value="Junior">Junior</Option>
                <Option value="Medior">Medior</Option>
                <Option value="Senior">Senior</Option>
              </Select>
            </Form.Item>

            {/* LOCATION */}
            <Form.Item
              label={ <label style={{ color: "white" }}>Location of the work:</label> }
              name="location"
              required
              rules={[{ required: true, message: "Please provide the location of the office (if it is a remote position, you can add 'Remote')" }]}
            >
              <Input
                placeholder="City name only"
                id="locationInput"
                className="input"
                allowClear
              />
            </Form.Item>

            {/* SKILLS */}
            <Form.Item
              label={ <label style={{ color: "white" }}> Required skills/technologies: </label>}
              name="skills"
              required
              rules={[{ required: true, message: "Please provide the most important skills expected from the applicants" }]}
              extra={
                <div style={{ color: `${lightgray}`, fontSize: 14 }}>
                  Please provide keywords separated by comma (e.g: Java, Git, Agile)
                </div>
              }
            >
              <Input id="locationInput" className="input" allowClear />
            </Form.Item>

            {/* DESCRIPTION */}
            <Form.Item
              label={ <label style={{ color: "white" }}>Detailed description:</label> }
              name="description"
              required
              rules={[{ required: true, message: "Please provide a description" }]}
            >
              <Input.TextArea
                rows={5}
                id="descriptionInput"
                className="input"
                allowClear
              />
            </Form.Item>

            {/* BUTTON */}
            <Form.Item>
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
          Sorry, only registered users can post new positions.
          <div>
            You can easily create a new account by <a href="/signup">clicking here</a>, <br /> or if you already have one please <a href="/login">login</a>!
          </div>
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

export default withCurrentUser(PostForm);
