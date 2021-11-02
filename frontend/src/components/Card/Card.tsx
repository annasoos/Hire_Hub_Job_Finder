import { FC } from "react";
//design & components
import { CardContent, CardTitle,  CardLocation, CardText, CardLogo } from './Card.style';
import { BulbTwoTone } from "@ant-design/icons";
import { LikeTwoTone } from "@ant-design/icons";
import { SmileTwoTone } from "@ant-design/icons";
import { cyan } from "../../style_guide"
//types & functions
import { CardPropsType } from "../../utils/types/CardPropsType";

export const Card:FC<CardPropsType> = ({ cardElement, position }) => { 
  return (
    <CardContent>
      <CardLogo>
        {position === 0 && ( <SmileTwoTone className="cardLogoImg" twoToneColor={cyan}/> )}
        {position === 1 && ( <LikeTwoTone className="cardLogoImg" twoToneColor={cyan}/> )}
        {position === 2 && ( <BulbTwoTone className="cardLogoImg" twoToneColor={cyan} /> )}
      </CardLogo>
      <CardTitle> {cardElement.position} </CardTitle>
      <CardLocation> {cardElement.location} </CardLocation>
      <CardText>{cardElement.description}</CardText>
    </CardContent>
  );
};
