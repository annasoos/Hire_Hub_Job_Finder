import { IFooter } from "../interfaces/interfaces";
import { FooterLinksType } from "../types/type_aliases";

export class FooterItem implements IFooter {
	name: string;
	links: FooterLinksType[];

	constructor(name: string, links: FooterLinksType[]){
		this.name = name;
		this.links = links;
	}
}