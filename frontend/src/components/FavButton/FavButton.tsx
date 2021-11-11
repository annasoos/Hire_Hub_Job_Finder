import { FC, useState, useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { useMutation } from "@apollo/client";
// design
import { Tooltip, Modal, Button } from "antd";
import { HeartFilled } from '@ant-design/icons';
import { HeartButton, LikeModalContent } from "./FavButton.style";
// types & context
import { CollapseContentPropsType } from "../../utils/types/CollapseContentPropsType";
import { JobElementType } from "../../utils/types/JobElementType";
import { UserContext } from "../../utils/context/UserContext";
import { openNotificationWithIcon } from "../../utils/functions/Notification";
import { FavouritesContext } from "../../utils/context/FavouritesContext";
// queries
import { CREATE_LIKE_MUTATION } from "../../utils/GqlQueries";

export const FavButton:FC<Omit<CollapseContentPropsType, "key">> = ({job}) => {
	const userContext = useContext(UserContext);
	const favContext = useContext(FavouritesContext);
	const history = useHistory();
	const [isLiked, setIsLiked] = useState<"liked" | "unliked">("unliked");  // set as classname used for css styling
	const [isLikeModalVisible, setIsLikeModalVisible] = useState(false);
	const [likedListing] = useMutation(CREATE_LIKE_MUTATION, {
		onError: (error) => {
			console.log(error);
			openNotificationWithIcon(
				"error",
				"Oops..something went wrong!",
				"Sorry, an unexpected error happened. Please try again!"
			);
		},
		onCompleted: (data) => {
			setIsLiked("liked");
			openNotificationWithIcon(
				"success",
				"Added to favourites!",
				`You can find ${data.like.job.position} position among your favourites now.`
			);
		}
	});

	useEffect(() => {
		const array = favContext.favList.filter((favElement) => favElement.position === job.position)
		if(array.length === 0) {
			setIsLiked("unliked");
		} else {
			setIsLiked("liked");
		}
	}, [favContext.favList])

	const handleCancel = () => { setIsLikeModalVisible(false) };
	const addToFavourites = (job:JobElementType) => {
		if (userContext.loggedInUser) {
			likedListing({ variables: {	jobId: job.id	}});
		} else {
			setIsLikeModalVisible(true);
		}
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
			<Button type="primary" onClick={() => history.push("/login")}> Login </Button>,
			<Button type="primary" onClick={() => history.push("/signup")}> Signup </Button>,
			<Button onClick={handleCancel}> Close </Button>
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
