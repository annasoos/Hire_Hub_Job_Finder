import { FC, useState } from "react";
// design
import { Tooltip } from "antd";
import { HeartFilled } from '@ant-design/icons';
import { HeartButton } from "./FavButton.style";
// types
import { CollapseContentPropsType } from "../../types/CollapseContentPropsType";
import { JobElementType } from "../../types/JobElementType";

export const FavButton:FC<Omit<CollapseContentPropsType, "key">> = ({job}) => {

	const [isLiked, setIsLiked] = useState<"liked" | "unliked">("unliked")

	const addToFavourites = (job:JobElementType) => {
		if (isLiked === "liked") { setIsLiked("unliked") }
		else { setIsLiked("liked")}
	}

	return (
		<HeartButton onClick={() => addToFavourites(job)}> 
			<Tooltip title="Add to favourites"> 
				<HeartFilled className={isLiked}/> 
			</Tooltip> 
		</HeartButton>
	)
}
