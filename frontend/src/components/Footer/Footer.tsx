//design & components
import { FacebookFilled, LinkedinFilled, TwitterCircleFilled, GooglePlusCircleFilled } from "@ant-design/icons";
import { FooterContainer, LogoLink, LinkContainer, SocialContainer } from "./Footer.style";
//types & functions
import { IFooter } from "../../utils/interfaces/IFooter";
import { FooterItem } from "../../utils/classes/FooterItem.ts";
import { FooterLinksType } from "../../utils/types/FooterLinksType"

export const Footer = () => {

	const firstLinks: FooterLinksType[]= [
		{ linkName: "General Terms and Conditions", path: "#" },
		{ linkName: "Terms of Use", path: "#" },
		{ linkName: "Privacy Policy", path: "#" },
	];

	const secondLinks: FooterLinksType[]= [
		{ linkName: "About Us", path: "#" },
		{ linkName: "Careers", path: "#" },
		{ linkName: "Media Offer", path: "#" },
	];
	
	const thirdLinks: FooterLinksType[]= [
		{ linkName: "Customer Service", path: "#" },
		{ linkName: "Contact Us", path: "#" },
	];

	const footerOne:IFooter = new FooterItem("Conditions", firstLinks );
	const footerTwo:IFooter = new FooterItem("Company", secondLinks);
	const footerThree:IFooter = new FooterItem("Support", thirdLinks);
	
	
  let items: IFooter[] = [];
	items.push(footerOne);
	items.push(footerTwo);
	items.push(footerThree);

  return (
    <FooterContainer>
      <LogoLink href="/" className="imageLink">
        <div></div>
      </LogoLink>

      {items.map((item: IFooter, index: number) => (
        <LinkContainer key={item.name}>
          <h3> {item.name} </h3>
          {item.links.map((link, index) => (
            <li key={link.linkName}>
              <a href={link.path}>{link.linkName}</a>
            </li>
          ))}
        </LinkContainer>
      ))}

      <SocialContainer className="imageLink">
        <TwitterCircleFilled className="socialIcon" />
        <GooglePlusCircleFilled className="socialIcon" />
        <FacebookFilled className="socialIcon" />
        <LinkedinFilled className="socialIcon" />
      </SocialContainer>
    </FooterContainer>
  );
};