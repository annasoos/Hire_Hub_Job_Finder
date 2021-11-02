import { FC, useState } from "react";
//design & components
import { Tooltip, Modal } from "antd";
import { footerBG, lightgray, white } from "../../style_guide";
import { JobContent, Position, Company } from "../JobList/JobList.style";
import { DeleteIcon, EditIcon, DeleteModalContent, EditModalContent } from "./OwnListings.style";
import Delete from "../../utils/images/delete_icon.svg";
import Edit from "../../utils/images/edit_icon.svg";
import listingEdit from "../../utils/images/ListingEdit-pana.svg";
// types
import { CollapseContentPropsType } from "../../utils/types/CollapseContentPropsType";

export const OwnListings: FC<CollapseContentPropsType> = ({ job }) => {
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isEditListingModalVisible, setIsEditListingModalVisible] = useState(false);

  const handleDeleteCancel = () => {
    setIsDeleteModalVisible(false);
  };

  const handleDeleteOk = () => {
    /* 	ide jön majd a business logic + notification  */
    setIsDeleteModalVisible(false);
  };

	const handleEditCancel = () => {
    setIsEditListingModalVisible(false);
  };

  const handleEditOk = () => {
    /* 	ide jön majd a business logic + notification  */
    setIsEditListingModalVisible(false);
  };

  return (
    <JobContent className="inCollapse" color={footerBG}>
      <Position className="myPostPosLev" color={white}>
        <b>{job.position}</b>
      </Position>
      <br />
      <Company color={lightgray}> {job.company} </Company>
      <Tooltip title="Edit">
        <EditIcon src={Edit} alt="edit_logo" onClick={() => setIsEditListingModalVisible(true)} />
      </Tooltip>
      <Tooltip title="Delete" placement="bottom">
        <DeleteIcon src={Delete} alt="delete_logo" onClick={() => setIsDeleteModalVisible(true)} />
      </Tooltip>

      <Modal
        title="Confirmation"
        visible={isDeleteModalVisible}
        onOk={handleDeleteOk}
        onCancel={handleDeleteCancel}
      >
        <DeleteModalContent>
          <img src={Delete} alt="delete_icon" />
          <p>You are about to delete this listing</p>
          <p>This action is not reversible!</p>
          <p>Are you sure?</p>
        </DeleteModalContent>
      </Modal>

			<Modal
        title="Edit your listing"
        visible={isEditListingModalVisible}
        onOk={handleEditOk}
        onCancel={handleEditCancel}
      >
        <EditModalContent>
          <img src={listingEdit} alt="listing_edit" />
          <p>Lorem ipsum</p>
          <p>lorem ipsum</p>
        </EditModalContent>
      </Modal>

    </JobContent>
  );
};
