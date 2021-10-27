import { FC, useState } from "react";
//design & components
import { Tooltip, Button, Modal } from "antd";
import { darkBlue, footerBG, lightblue } from "../../style_guide";
import { JobContent, Position, Company } from "../JobList/JobList.style";
import { EyeIcon, DetailsModalContent } from "../Favourites/Favourites.style";
import Eye from "../../images/eye_icon.svg";
// types
import { CollapseContentPropsType } from "../../types/CollapseContentPropsType";

export const Favourites:FC<CollapseContentPropsType> = ({ job }) => {
  const [isDetailsModalVisible, setIsDetailsModalVisible] = useState(false);

  const showDetailsModal = () => {
    setIsDetailsModalVisible(true);
  };

  const handleClose = () => {
    setIsDetailsModalVisible(false);
  };

  return (
    <JobContent className="inCollapse" color={lightblue}>
      <Position className="myPostPosLev" color={footerBG}>
        <b>{job.position}</b>
      </Position>
      <br />
      <Company color={darkBlue}> {job.company} </Company>
      <Tooltip title="Show details">
        <EyeIcon src={Eye} alt="eye_logo" onClick={showDetailsModal} />
      </Tooltip>

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
