import { FC, useState } from "react";
//design & components
import { CardContent, CardTitle,  CardLocation, CardText, CardLogo, DetailsModalContent } from './Card.style';
import { Modal, Button } from "antd";
import { BulbTwoTone } from "@ant-design/icons";
import { LikeTwoTone } from "@ant-design/icons";
import { SmileTwoTone } from "@ant-design/icons";
import { cyan } from "../../style_guide"
//types & functions
import { CardPropsType } from "../../utils/types/CardPropsType";

export const Card:FC<CardPropsType> = ({ cardElement, position }) => { 
	const [isDetailsModalVisible, setIsDetailsModalVisible] = useState(false)

  return (
		<>
    <CardContent onClick={() => setIsDetailsModalVisible(true)}>
      <CardLogo>
        {position === 0 && ( <SmileTwoTone className="cardLogoImg" twoToneColor={cyan}/> )}
        {position === 1 && ( <LikeTwoTone className="cardLogoImg" twoToneColor={cyan}/> )}
        {position === 2 && ( <BulbTwoTone className="cardLogoImg" twoToneColor={cyan} /> )}
      </CardLogo>
      <CardTitle> {cardElement.position} </CardTitle>
      <CardLocation> {cardElement.location} </CardLocation>
      <CardText>{cardElement.description}</CardText>
    </CardContent>


		<Modal
		title="Details"
		visible={isDetailsModalVisible}
		onCancel={() => setIsDetailsModalVisible(false)}
		footer={[ <Button key="favDetailsClose" type="primary" onClick={() => setIsDetailsModalVisible(false)}> Close </Button> ]}
		>
		<DetailsModalContent>
			<h3>{cardElement.position}</h3>
			<p className="level">{cardElement.level}</p>
			<p className="location">{cardElement.location}</p>
			<p>Description:</p>
			<p className="details">{cardElement.description}</p>
		</DetailsModalContent>
		</Modal>

		</>
  );
};
