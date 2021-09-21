import { FooterLinksType } from "./type_alises";

export interface IFooter {
	name: string,
	links: FooterLinksType[]
};

export interface IJob {
  id: number;
  position: string;
  company: string;
  isFeatured: boolean;
  level: string;
  location: string;
  skills: string[];
  description: string;
}