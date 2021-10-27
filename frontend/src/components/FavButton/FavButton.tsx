import { FC, useState, useContext } from "react";
import { useHistory } from "react-router";
// design
import { Tooltip, Modal, Button } from "antd";
import { HeartFilled } from '@ant-design/icons';
import { HeartButton, LikeModalContent } from "./FavButton.style";
// types
import { CollapseContentPropsType } from "../../types/CollapseContentPropsType";
import { JobElementType } from "../../types/JobElementType";
import { UserContext } from "../../context/UserContext";

export const FavButton:FC<Omit<CollapseContentPropsType, "key">> = ({job}) => {

	const userContext = useContext(UserContext);
	const history = useHistory();
	const [isLiked, setIsLiked] = useState<"liked" | "unliked">("unliked");
	const [isLikeModalVisible, setIsLikeModalVisible] = useState(false);

	const addToFavourites = (job:JobElementType) => {
		if (userContext.loggedInUser) {
			if (isLiked === "liked") { setIsLiked("unliked") }
			else { setIsLiked("liked")}
			// IDE JÖN MAJD A KEDVENCEK LISTA SZERKESZTÉSE //
		} else {
			setIsLikeModalVisible(true);
		}
	};

	const handleCancel = () => {
    setIsLikeModalVisible(false);
  };

	return (
		<>
		<HeartButton onClick={() => addToFavourites(job)}> 
			<Tooltip title="Add to favourites"> 
				<HeartFilled className={isLiked}/> 
			</Tooltip>
		</HeartButton>
		
		<Modal
		title="Add to favourite"
		visible={isLikeModalVisible}
		onCancel={handleCancel}
		footer={[
			<>
			<Button type="primary" onClick={() => history.push("/login")}> Login </Button>
			<Button type="primary" onClick={() => history.push("/signup")}> Signup </Button>
			<Button onClick={handleCancel}> Close </Button>
			</>
		]}
	>
		<LikeModalContent>
			<HeartFilled id="inModalHeart"/>
			<p>Sorry, only registered users can add favourite listings to their profile!</p>
			<p>Are you a member yet?</p>
		</LikeModalContent>
	</Modal>
	</>
	)
}
