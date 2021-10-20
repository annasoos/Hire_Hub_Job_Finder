import { FC, useState } from "react";
//design & components
import { Tooltip, Modal } from "antd";
import { footerBG, lightgray, white } from "../../style_guide";
import { JobContent, Position, Company } from "../JobList/JobList.style";
import { DeleteIcon, EditIcon, DeleteModalContent } from "./OwnListings.style";
import Delete from "../../images/delete_icon.svg";
import Edit from "../../images/edit_icon.svg";
// types
import { CollapseContentPropsType } from "../../types/CollapseContentPropsType";

export const OwnListings: FC<CollapseContentPropsType> = ({ job }) => {
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  const showDeleteModal = () => {
    setIsDeleteModalVisible(true);
  };

  const handleCancel = () => {
    setIsDeleteModalVisible(false);
  };

  const handleOk = () => {
    setIsDeleteModalVisible(false);
    /* 	await axios
      .delete(`http://localhost:8080/api/find-a-job/:${id}`)
      .then((res) => {
        if (res.status === 200) {
          openNotificationWithIcon(
            "success",
            "Deleted!",
          	"Listing successfully deleted from database"
          );
        } else {
					console.log(res)
				}
      }) */
  };

  return (
    <JobContent className="inCollapse" color={footerBG}>
      <Position className="myPostPosLev" color={white}>
        <b>{job.position}</b>
      </Position>
      <br />
      <Company color={lightgray}> {job.company} </Company>
      <Tooltip title="Edit">
        <EditIcon src={Edit} alt="edit_logo" />
      </Tooltip>
      <Tooltip title="Delete" placement="bottom">
        <DeleteIcon src={Delete} alt="delete_logo" onClick={showDeleteModal} />
      </Tooltip>

      <Modal
        title="Confirmation"
        visible={isDeleteModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <DeleteModalContent>
          <img src={Delete} alt="delete_icon" />
          <p>You are about to delete this listing</p>
          <p>This action is not reversible!</p>
          <p>Are you sure?</p>
        </DeleteModalContent>
      </Modal>
    </JobContent>
  );
};
