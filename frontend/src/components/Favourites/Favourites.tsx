import { FC, useState } from "react";
//design & components
import { Tooltip, Button, Modal } from "antd";
import { darkBlue, footerBG, lightblue } from "../../style_guide";
import { JobContent, Position, Company } from "../JobList/JobList.style";
import { EyeIcon, DetailsModalContent, BrokenHeartIcon, RemoveModalContent } from "../Favourites/Favourites.style";
import Eye from "../../utils/images/eye_icon.svg";
import BrokenHeart from "../../utils/images/broken_heart.svg"
// types
import { CollapseContentPropsType } from "../../utils/types/CollapseContentPropsType";

export const Favourites:FC<CollapseContentPropsType> = ({ job }) => {
  const [isDetailsModalVisible, setIsDetailsModalVisible] = useState(false)
	const [isRemoveModalVisible, setIsRemoveModalVisible] = useState(false)

  const showDetailsModal = () => {setIsDetailsModalVisible(true)}
  const handleClose = () => {setIsDetailsModalVisible(false)}
	const showRemoveModal = () => {setIsRemoveModalVisible(true)}
	const handleRemoveCancel = () => {setIsRemoveModalVisible(false)}
  const handleRemoveOk = () => {/*  deleteLike({ variables: { jobId: job.id } })  */}

  return (
    <JobContent className="inCollapse" color={lightblue}>
      <Position className="myPostPosLev" color={footerBG}>
        <b>{job.position}</b>
      </Position>
      <br />
      <Company color={darkBlue}> {job.company} </Company>
			<Tooltip title="Remove from favourites">
        <BrokenHeartIcon src={BrokenHeart} alt="broken_heart_icon" onClick={showRemoveModal} />
      </Tooltip>
      <Tooltip title="Show details" placement="bottom">
        <EyeIcon src={Eye} alt="eye_icon" onClick={showDetailsModal} />
      </Tooltip>

			<Modal
        title="Confirmation"
        visible={isRemoveModalVisible}
        onCancel={handleRemoveCancel}
				onOk={handleRemoveOk}
      >
        <RemoveModalContent>
          <img src={BrokenHeart} alt="delete_icon" />
          <p>You are about to remove this listing from your Favourites.</p>
          <p>Are you sure?</p>
        </RemoveModalContent>
      </Modal>

      <Modal
        title="Details"
        visible={isDetailsModalVisible}
        onCancel={handleClose}
        footer={[ <Button type="primary" onClick={handleClose}> Close </Button> ]}
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
