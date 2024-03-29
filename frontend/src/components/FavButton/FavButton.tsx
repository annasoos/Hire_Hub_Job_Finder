import { FC, useState, useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { useMutation, useQuery } from "@apollo/client";
// design
import { Tooltip, Modal, Button } from "antd";
import { HeartFilled } from '@ant-design/icons';
import { HeartButton, LikeModalContent } from "./FavButton.style";
// types & context
import { CollapseContentPropsType } from "../../utils/types/CollapseContentPropsType";
import { UserContext } from "../../utils/context/UserContext";
import { openNotificationWithIcon } from "../../utils/functions/Notification";
import { FavouritesContext } from "../../utils/context/FavouritesContext";
import { ValidLoginContext } from "../../utils/context/ValidLoginContext";
// queries
import { CREATE_LIKE_MUTATION, FAVOURITES_QUERY } from "../../utils/GqlQueries";
import { DELETE_LIKE_MUTATION } from "../../utils/GqlQueries";
import { getQueryVariables } from "../../utils/functions/getQueryVariable";

export const FavButton:FC<Omit<CollapseContentPropsType, "key">> = ({job}) => {
	const userContext = useContext(UserContext);
	const favContext = useContext(FavouritesContext);
	const { validLogin } = useContext(ValidLoginContext);
	const history = useHistory();
	const queryVariables = getQueryVariables(favContext.page, 4);
	const { refetch } = useQuery(FAVOURITES_QUERY,{
    variables: queryVariables
  })
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
			refetch()
		},
		onError: (error) => {
			console.log(JSON.stringify(error, null, 2));
		}
	});

	useEffect(() => {
		if (validLogin && favContext.favList) {
			const array = favContext.favList.filter((favElement) => favElement.position === job.position)
			array.length === 0 ? setIsLiked("unliked") : setIsLiked("liked")
		}
	}, [validLogin, favContext.favList, job.position])

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
				<Button key="addFavLogin" type="primary" onClick={() => history.push("/login")}> Login </Button>,
				<Button key="addFavSignup" type="primary" onClick={() => history.push("/signup")}> Signup </Button>,
				<Button key="addFavClose" onClick={() => setIsLikeModalVisible(false) }> Close </Button>
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
