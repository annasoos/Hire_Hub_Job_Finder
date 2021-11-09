import { FC, useState } from "react";
//design & components
import { Tooltip, Modal, Form, Button, Input, Select } from "antd";
import { footerBG, lightgray, white } from "../../style_guide";
import { JobContent, Position, Company } from "../JobList/JobList.style";
import { DeleteIcon, EditIcon, DeleteModalContent, EditModalContent } from "./OwnListings.style";
import Delete from "../../utils/images/delete_icon.svg";
import Edit from "../../utils/images/edit_icon.svg";
import listingEdit from "../../utils/images/ListingEdit-pana.svg";
// types
import { CollapseContentPropsType } from "../../utils/types/CollapseContentPropsType";
import { JobElementType } from "../../utils/types/JobElementType";

const { Option } = Select;

export const OwnListings: FC<CollapseContentPropsType> = ({ job }) => {
	const [form] = Form.useForm();
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isEditListingModalVisible, setIsEditListingModalVisible] = useState(false);

  const handleDeleteCancel = () => {setIsDeleteModalVisible(false)};
	const handleEditCancel = () => {setIsEditListingModalVisible(false)};

  const handleDeleteOk = () => {
    /* 	ide jön majd a business logic + notification  */
  };

	const handleEditSubmit = (values: JobElementType) => {
    console.log("hahó", values)
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
					onCancel={handleEditCancel}
					footer={[ 
					<Button onClick={handleEditCancel}> Cancel </Button>,
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
