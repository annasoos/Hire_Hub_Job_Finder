import { IFooter } from "../interfaces/IFooter";
import { FooterLinksType } from "../types/FooterLinksType";

export class FooterItem implements IFooter {
	name: string;
	links: FooterLinksType[];

	constructor(name: string, links: FooterLinksType[]){
		this.name = name;
		this.links = links;
	}
}