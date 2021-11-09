import { useContext, useState } from "react";
//design & components
import { Modal, Button, Form, Input } from "antd";
import { MailOutlined, UserOutlined, FrownOutlined } from "@ant-design/icons";
import { ProfileSection, ProfileName, ProfilePhoto, ErrorTitle, ErrorSubTitle, UserInfoSection, EditUserModalContent } from "./Profile.style";
import profilePhoto from "../../utils/images/Personal-data-pana.svg";
import profileEdit from "../../utils/images/ProfileEdit-pana.svg";
import { CollapseBar } from "../Collapse/Collapse";
//context & types
import { UserContext } from "../../utils/context/UserContext";
import { RegUserType } from "../../utils/types/RegUserType";

export const Profile = () => {
	const [form] = Form.useForm();
	const userContext = useContext(UserContext);
	const [isUserEditModalVisible, setIsUserEditModalVisible] = useState(false);

	const handleCancel = () => {
    setIsUserEditModalVisible(false);
  };

	const handleSubmit = (values: RegUserType) => {
    console.log("hahó", values)
  };

	if(!userContext.loggedInUser){
		return (
			<ProfileSection>
				<ErrorTitle> Ooops! Page not found </ErrorTitle>
				<FrownOutlined id="errorIcon"/>
				<ErrorSubTitle>Please try to login to reach this page!</ErrorSubTitle>
			</ProfileSection>
		)
	} else {
		return (
			<ProfileSection>
				<ProfileName>{userContext.loggedInUser!.firstName} {userContext.loggedInUser!.lastName}</ProfileName>
				<ProfilePhoto src={profilePhoto} alt="profile" />
				<UserInfoSection>
					<div>
						<UserOutlined className="profileIcon" />
						First Name:
					</div>
					<div>{userContext.loggedInUser.firstName}</div>
					<div>
						<UserOutlined className="profileIcon" />
						Last Name:
					</div>
					<div>{userContext.loggedInUser.lastName}</div>
					<div>
						<MailOutlined className="profileIcon" />
						E-mail adress:
					</div>
					<div id="profileEmail">{userContext.loggedInUser.email}</div>
					<Button id="userEditBtn" onClick={() => setIsUserEditModalVisible(true)}> Edit </Button>
				</UserInfoSection>

				<Modal
					title="Edit your personal information"
					visible={isUserEditModalVisible}
					onCancel={handleCancel}
					footer={[ 
					<Button onClick={handleCancel}> Cancel </Button>,
					<Button type="primary" htmlType="submit" onClick={() => {form.submit()}}> Save </Button> ]}
				>
					<EditUserModalContent>
						<img src={profileEdit} alt="profile_edit" />
						<Form	form={form} onFinish={handleSubmit}>
							<Form.Item name="firstName" initialValue={userContext.loggedInUser.firstName}>
								<Input allowClear placeholder="First Name" />
							</Form.Item>
							<Form.Item name="lastName" initialValue={userContext.loggedInUser.lastName}>
								<Input allowClear placeholder="Last Name" />
							</Form.Item>
							<Form.Item name="email" initialValue={userContext.loggedInUser.email}>
								<Input allowClear placeholder="E-mail" />
							</Form.Item>
							<Form.Item name="password" rules={[{ required: true, message: "Please input your password!" }]}>
								<Input.Password allowClear placeholder="Please type your password to confirm"/>
							</Form.Item>
						</Form>
					</EditUserModalContent>
				</Modal>

				<CollapseBar/>
			</ProfileSection>
		)
	}
}