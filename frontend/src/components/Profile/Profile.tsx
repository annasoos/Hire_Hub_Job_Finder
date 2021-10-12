import { useContext } from "react";
//design & components
import { MailOutlined, UserOutlined, FrownOutlined } from "@ant-design/icons";
import { ProfileSection, ProfileName, ProfilePhoto, ErrorTitle, ErrorSubTitle, UserInfoSection } from "./Profile.style";
import profilePhoto from "../../images/Personal-data-pana.svg";
import { CollapseBar } from "../Collapse/Collapse";
//context
import { UserContext } from "../../context/UserContext";

export const Profile = () => {
	const userContext = useContext(UserContext);

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
				</UserInfoSection>

				<CollapseBar/>
			</ProfileSection>
		)
	}
}