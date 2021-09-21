import { IJob } from "../interfaces/interfaces";

export type FooterLinksType = {
	linkName: string,
	path: string
};

export type CardPropsType = {
  cardElement: IJob,
	position: number
};

export type newJobType = {
	position: string;
	company: string;
	level: string;
	location: string;
	description: string;
};