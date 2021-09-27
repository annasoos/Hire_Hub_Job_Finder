import { FC } from "react";
import { CardContent, CardTitle,  CardLocation, CardText, CardLogo } from './Card.style';
import { BulbTwoTone } from "@ant-design/icons";
import { LikeTwoTone } from "@ant-design/icons";
import { SmileTwoTone } from "@ant-design/icons";
import { CardPropsType } from "../../types/CardPropsType";

export const Card:FC<CardPropsType> = ({ cardElement, position }) => { // TODO destructure props
  return (
    <CardContent>
      <CardLogo>
        {position === 0 && ( <SmileTwoTone className="cardLogoImg" twoToneColor="hsl(180, 66%, 49%)"/> )}
        {position === 1 && ( <LikeTwoTone className="cardLogoImg" twoToneColor="hsl(180, 66%, 49%)"/> )}
        {position === 2 && ( <BulbTwoTone className="cardLogoImg" twoToneColor="hsl(180, 66%, 49%)" /> )}
      </CardLogo>
      <CardTitle> {cardElement.position} </CardTitle>
      <CardLocation> {cardElement.location} </CardLocation>
      <CardText>{cardElement.description}</CardText>
    </CardContent>
  );
};
