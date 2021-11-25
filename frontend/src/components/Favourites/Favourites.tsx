import { FC, useContext, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
//design & components
import { Tooltip, Button, Modal } from "antd";
import { darkBlue, footerBG, lightblue } from "../../style_guide";
import { JobContent, Position, Company } from "../JobList/JobList.style";
import { EyeIcon, DetailsModalContent, BrokenHeartIcon, RemoveModalContent } from "../Favourites/Favourites.style";
import Eye from "../../utils/images/eye_icon.svg";
import BrokenHeart from "../../utils/images/broken_heart.svg"
// types & context
import { CollapseContentPropsType } from "../../utils/types/CollapseContentPropsType";
import { FavouritesContext } from "../../utils/context/FavouritesContext";
import { UserContext } from "../../utils/context/UserContext";
// queries
import { DELETE_LIKE_MUTATION, FAVOURITES_QUERY } from "../../utils/GqlQueries";
import { openNotificationWithIcon } from "../../utils/functions/Notification";
import { getQueryVariables } from "../../utils/functions/getQueryVariable";

export const Favourites:FC<CollapseContentPropsType> = ({ job }) => {
  const [isDetailsModalVisible, setIsDetailsModalVisible] = useState(false)
	const [isRemoveModalVisible, setIsRemoveModalVisible] = useState(false)
	const favContext = useContext(FavouritesContext);
	const userContext = useContext(UserContext);
	const queryVariables = getQueryVariables(favContext.page, 4);
	const { refetch } = useQuery(FAVOURITES_QUERY,{
    variables: queryVariables
  })
	const [deleteLike] = useMutation(DELETE_LIKE_MUTATION, {
		onCompleted: (data) => {
			openNotificationWithIcon(
				"success",
				"Removed from favourites!",
				`Succesfully removed listing from favourites.`
			);
			refetch().then(res => { favContext.setFavList(res.data.favourites.jobs) })
			setIsRemoveModalVisible(false)
		},
		onError: (error) => {
			console.log(JSON.stringify(error, null, 2));
		}
	});

  const handleRemoveOk = () => { deleteLike({ variables: { userId: userContext.loggedInUser!.userId , jobId: job.id } }) }

  return (
    <JobContent className="inCollapse" color={lightblue}>
      <Position className="myPostPosLev" color={footerBG}>
        <b>{job.position}</b>
      </Position>
      <br />
      <Company color={darkBlue}> {job.company} </Company>
			<Tooltip title="Remove from favourites">
        <BrokenHeartIcon src={BrokenHeart} alt="broken_heart_icon" onClick={() => setIsRemoveModalVisible(true)} />
      </Tooltip>
      <Tooltip title="Show details" placement="bottom">
        <EyeIcon src={Eye} alt="eye_icon" onClick={() => setIsDetailsModalVisible(true)} />
      </Tooltip>

			<Modal
        title="Remove from favourites"
        visible={isRemoveModalVisible}
        onCancel={() => setIsRemoveModalVisible(false)}
				onOk={handleRemoveOk}
      >
        <RemoveModalContent>
          <img src={BrokenHeart} alt="broken_heart_icon" />
          <p>You are about to remove this listing from your Favourites.</p>
          <p>Are you sure?</p>
        </RemoveModalContent>
      </Modal>

      <Modal
        title="Details"
        visible={isDetailsModalVisible}
        onCancel={() => setIsDetailsModalVisible(false)}
        footer={[ <Button key="favDetailsClose" type="primary" onClick={() => setIsDetailsModalVisible(false)}> Close </Button> ]}
      >
        <DetailsModalContent>
					<h3>{job.position}</h3>
					<p className="level">{job.level}</p>
					<p className="location">{job.location}</p>
          <p>Description:</p>
          <p className="details">{job.description}</p>
        </DetailsModalContent>
      </Modal>
    </JobContent>
  );
};
