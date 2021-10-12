import { useContext } from "react";
//design & components
import { CollapseBar } from "../Collapse/Collapse";
import { ProfileSection, PhotoSection, ProfilePhoto, ErrorTitle, ErrorSubTitle } from "./Profile.style";
import profilePhoto from "../../images/profile-pana.png";
import squareIllustration from "../../images/squares.svg";
//context
import { UserContext } from "../../context/UserContext";

export const Profile = () => {
	const userContext = useContext(UserContext);

	if(!userContext.loggedInUser){
		return (
			<ProfileSection>
				<ErrorTitle> Ooops! Page not found </ErrorTitle>
				<ErrorSubTitle>Please try to login to reach this page!</ErrorSubTitle>
			</ProfileSection>
		)
	} else {
		return (
			<ProfileSection>
			<img id="circular" src={squareIllustration} alt="illustration" />

			<PhotoSection>
				<ProfilePhoto src={profilePhoto} alt="profile_photo" />
				<p>{userContext.loggedInUser!.firstName} {userContext.loggedInUser!.lastName}</p>
			</PhotoSection>

			<CollapseBar/>
			</ProfileSection>
		)
	}
}