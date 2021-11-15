import { FC, useContext, useState } from "react";
import { useMutation } from "@apollo/client";
//design & components
import { Tooltip, Modal, Form, Button, Input, Select } from "antd";
import { footerBG, lightgray, white } from "../../style_guide";
import { JobContent, Position, Company } from "../JobList/JobList.style";
import { DeleteIcon, EditIcon, DeleteModalContent, EditModalContent } from "./OwnListings.style";
import Delete from "../../utils/images/delete_icon.svg";
import Edit from "../../utils/images/edit_icon.svg";
import listingEdit from "../../utils/images/ListingEdit-pana.svg";
// types& functions & context
import { CollapseContentPropsType } from "../../utils/types/CollapseContentPropsType";
import { JobElementType } from "../../utils/types/JobElementType";
import { openNotificationWithIcon } from "../../utils/functions/Notification";
import { JobContext } from "../../utils/context/JobContext";
import { OwnListingsContext } from "../../utils/context/OwnListingsContext";
// queries
import { UPDATE_JOB_MUTATION } from "../../utils/GqlQueries";
import { DELETE_JOB_MUTATION } from "../../utils/GqlQueries";

const { Option } = Select;


export const OwnListings: FC<CollapseContentPropsType> = ({ job }) => {
	const [form] = Form.useForm();
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isEditListingModalVisible, setIsEditListingModalVisible] = useState(false);
	const jobContext = useContext(JobContext);
	const ownContext = useContext(OwnListingsContext);

	const [updateJob] = useMutation(UPDATE_JOB_MUTATION, {
		onCompleted: (data) => {
			openNotificationWithIcon(
				"success",
				"Listing updated!",
				`Succesfully updated your listing for ${data.updateListing.updateJob.position} position.`
			);
			jobContext.setIsLoaded(false)
			ownContext.setIsLoaded(false)
		},
		onError: (error) => {
			console.log(JSON.stringify(error, null, 2));
		}
	});
	const [deleteJob] = useMutation(DELETE_JOB_MUTATION, {
		onCompleted: (data) => {
			openNotificationWithIcon(
				"success",
				"Listing deleted!",
				`Succesfully deleted position from our database.`
			);
			jobContext.setIsLoaded(false)
			ownContext.setIsLoaded(false)
			setIsDeleteModalVisible(false)
		},
		onError: (error) => {
			console.log(JSON.stringify(error, null, 2));
		}
	});

  const handleDeleteOk = () => { deleteJob({ variables: { jobId: job.id } }) };
	const handleEditSubmit = (values: JobElementType) => {
    updateJob({ variables: { 
			jobId: job.id, 
			level: values.level, 
			skills: values.skills, 
			description: values.description } 
		});
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
        onCancel={() => setIsDeleteModalVisible(false)}
				onOk={handleDeleteOk}
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
					onCancel={() => setIsEditListingModalVisible(false)}
					footer={[ 
					<Button onClick={() => setIsEditListingModalVisible(false)}> Cancel </Button>,
					<Button type="primary" htmlType="submit" onClick={() => {form.submit()}}> Save </Button> ]}
				>
					<EditModalContent>
						<img src={listingEdit} alt="listing_edit" />
						<Form	form={form} onFinish={handleEditSubmit}>
							<Form.Item name="position" initialValue={job.position} >
								<Input allowClear placeholder="Position" disabled />
							</Form.Item>
							<Form.Item name="company" initialValue={job.company} >
								<Input allowClear placeholder="Company name" disabled />
							</Form.Item>
							<Form.Item name="level" initialValue={job.level} >
							<Select placeholder="Level">
                <Option value="Junior">Junior</Option>
                <Option value="Medior">Medior</Option>
                <Option value="Senior">Senior</Option>
              </Select>
							</Form.Item>
							<Form.Item name="skills" initialValue={job.skills}>
								<Input allowClear placeholder="Skills" />
							</Form.Item>
							<Form.Item name="description" initialValue={job.description}>
							<Input.TextArea
                rows={4}
                placeholder="Description"
                className="input"
                allowClear
              />
							</Form.Item>
						</Form>
					</EditModalContent>
				</Modal>

    </JobContent>
  );
};
