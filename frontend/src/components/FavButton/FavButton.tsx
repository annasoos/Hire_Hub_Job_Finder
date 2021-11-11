import { FC, useState, useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { useMutation } from "@apollo/client";
// design
import { Tooltip, Modal, Button } from "antd";
import { HeartFilled } from '@ant-design/icons';
import { HeartButton, LikeModalContent } from "./FavButton.style";
// types & context
import { CollapseContentPropsType } from "../../utils/types/CollapseContentPropsType";
import { UserContext } from "../../utils/context/UserContext";
import { openNotificationWithIcon } from "../../utils/functions/Notification";
import { FavouritesContext } from "../../utils/context/FavouritesContext";
// queries
import { CREATE_LIKE_MUTATION } from "../../utils/GqlQueries";
import { DELETE_LIKE_MUTATION } from "../../utils/GqlQueries";

export const FavButton:FC<Omit<CollapseContentPropsType, "key">> = ({job}) => {
	const userContext = useContext(UserContext);
	const favContext = useContext(FavouritesContext);
	const history = useHistory();
	const [isLiked, setIsLiked] = useState<"liked" | "unliked">("unliked");  // set as classname used for css styling
	const [isLikeModalVisible, setIsLikeModalVisible] = useState(false);
	const [likeListing] = useMutation(CREATE_LIKE_MUTATION, {
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
	const [deleteLike] = useMutation(DELETE_LIKE_MUTATION, {
		onCompleted: (data) => {
			openNotificationWithIcon(
				"success",
				"Removed from favourites!",
				`Succesfully removed listing from favourites.`
			);
			favContext.setIsLoaded(false)
		},
		onError: (error) => {
			console.log(JSON.stringify(error, null, 2));
		}
	});

	useEffect(() => {
		if (favContext.favList) {
			const array = favContext.favList.filter((favElement) => favElement.position === job.position)
			array.length === 0 ? setIsLiked("unliked") : setIsLiked("liked")
		}
	}, [favContext.favList, job.position])

	const handleHeartClick = () => {
		if (isLiked === "unliked") {
			userContext.loggedInUser ? likeListing({ variables: {	jobId: job.id	}}) : setIsLikeModalVisible(true)
		} else {
			deleteLike({ variables: { userId: userContext.loggedInUser!.userId , jobId: job.id } });
			setIsLiked("unliked") 
		}
	}

	return (
		<>
		<HeartButton onClick={handleHeartClick}> 
			<Tooltip title="Add to favourites"> 
				<HeartFilled className={isLiked}/> 
			</Tooltip>
		</HeartButton>
		
		<Modal
			title="Add to favourite"
			visible={isLikeModalVisible}
			onCancel={() => setIsLikeModalVisible(false) }
			footer={[
				<Button type="primary" onClick={() => history.push("/login")}> Login </Button>,
				<Button type="primary" onClick={() => history.push("/signup")}> Signup </Button>,
				<Button onClick={() => setIsLikeModalVisible(false) }> Close </Button>
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
