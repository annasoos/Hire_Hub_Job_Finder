
export type CardElementType = {
	position: string;
	company: string;
	level: string;
	location: string;
	skills: string[];
	description: string;
	creator: string
}

export type CardPropsType = {
  cardElement: CardElementType,
	position: number
};