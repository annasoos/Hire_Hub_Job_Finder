import { useContext, useState } from "react";
import axios from "axios";
//design & components
import { Collapse, Tooltip, Button, Modal } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { footerBG, lightgray, mainBG, white } from "../../style_guide";
import { JobElementType } from "../../types/JobElementType";
import { JobContent, Position, Level, Company, DeleteIcon, EditIcon, EyeIcon } from "../JobList/JobList.style";
import { CollapseSection, ModalContent } from "./Collapse.style";
import Delete from "../../images/delete_icon.svg";
import Edit from "../../images/edit_icon.svg";
import Eye from "../../images/eye_icon.svg";
//context & function
import { openNotificationWithIcon } from "../../functions/Notification";
import { UserContext } from "../../context/UserContext";
import { JobContext } from "../../context/JobContext";
import { useHistory } from "react-router";

export const CollapseBar = () => {
  const userContext = useContext(UserContext);
  const jobContext = useContext(JobContext);
  const { Panel } = Collapse;
  const history = useHistory();
	const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
	const [isDetailsModalVisible, setIsDetailsModalVisible] = useState(false);
	
	const showDeleteModal = () => {
		setIsDeleteModalVisible(true);
  };

	const showDetailsModal = () => {
		setIsDetailsModalVisible(true);
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

	const handleClose = () => {
		setIsDetailsModalVisible(false);
	};


  return (
		<CollapseSection>
    	<Collapse className="collapse" ghost bordered={false}>

				{/* YOUR LISTINGS */}
    	  <Panel header="Your listings" key="1">
    	    {jobContext.jobList!
    	      .filter((job: JobElementType) => job.creator === userContext.loggedInUser!.email)
    	      .map((job: JobElementType, index: number) => (
    	        <JobContent className="inCollapse" key={index} color={footerBG}>
    	          <Position className="myPostPosLev" color={white}> <b>{job.position}</b> </Position>
    	          <br />
    	          {job.level.length > 0 ? (
    	            <Level className="myPostPosLev" color={lightgray}>
    	              {job.level}
    	            </Level>
    	          ) : null}
    	          <Company color={lightgray}> {job.company} </Company>
    	          <Tooltip title="Edit">
    	            <EditIcon src={Edit} alt="edit_logo" />
    	          </Tooltip>
    	          <Tooltip title="Delete" placement="bottom">
    	            <DeleteIcon src={Delete} alt="delete_logo" onClick={showDeleteModal} />
    	          </Tooltip>
								
								<Modal title="Confirmation" visible={isDeleteModalVisible} onOk={handleOk} onCancel={handleCancel}>
									<ModalContent>
										<img src={Delete} alt="delete_icon" />
										<p>You are about to delete this listing</p>
										<p>This action is not reversible!</p>
										<p>Are you sure?</p>
									</ModalContent>
								</Modal>
								
    	        </JobContent>
    	      ))}
    	    <Button id="addBtn" onClick={() => history.push("/post-a-job")}>
    	      <PlusCircleOutlined />
    	      Post a new job
    	    </Button>
    	  </Panel>

				{/* YOUR FAVOURITES */}
    	  <Panel header="Your favourites" key="2">
				{jobContext.jobList!
    	      .filter((job: JobElementType) => job.creator === userContext.loggedInUser!.email)
    	      .map((job: JobElementType, index: number) => (
    	        <JobContent className="inCollapse" key={index} color={mainBG}>
    	          <Position className="myPostPosLev" color={white}> <b>{job.position}</b> </Position>
    	          <br />
    	          {job.level.length > 0 ? (
    	            <Level className="myPostPosLev" color={lightgray}>
    	              {job.level}
    	            </Level>
    	          ) : null}
    	          <Company color={lightgray}> {job.company} </Company>
    	          <Tooltip title="Open">
    	            <EyeIcon src={Eye} alt="eye_logo" onClick={showDetailsModal} />
    	          </Tooltip>
								
								<Modal title="Details" visible={isDetailsModalVisible} onCancel={handleClose} footer={[
            			<Button key="back" onClick={handleClose}>
              			Close
            			</Button>]}>
									<ModalContent>
										<p>Description:</p>
										<p className="details">{job.description}</p>
									</ModalContent>
								</Modal>
								
    	        </JobContent>
    	      ))}
    	  </Panel>
				
    	</Collapse>
		</CollapseSection>
  );
};
