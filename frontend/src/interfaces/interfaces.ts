import { FooterLinksType } from "../types/type_aliases";

export interface IFooter {
	name: string,
	links: FooterLinksType[]
};

export interface IJob {
  id: number;
  position: string;
  company: string;
  level: string;
  location: string;
  skills: string[];
  description: string;
}