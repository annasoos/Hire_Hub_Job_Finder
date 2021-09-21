import styled from "@emotion/styled";
import FooterLogo from "../images/footer_logo.svg";
import FooterLogoHover from "../images/footer_logo_hover.svg";
import {
  FacebookFilled,
  LinkedinFilled,
  TwitterCircleFilled,
  GooglePlusCircleFilled,
} from "@ant-design/icons";
import { IFooter } from "../interfaces/IFooter";
import { FooterItem } from "../classes/FooterItem.ts";
import { FooterLinksType } from "../types/FooterLinksType"

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
        <LinkContainer key={index}>
          <h3> {item.name} </h3>
          {item.links.map((link, index) => (
            <li key={index}>
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

const FooterContainer = styled.section({
  width: "100%",
  height: "auto",
  padding: "5rem 10%",

  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",

  backgroundColor: "hsl(216, 53%, 9%)",
  transition: "all 1s ease-in-out",

  "@media only screen and (max-width: 1000px)": {
    height: "auto",
    gridTemplateColumns: "33% 33% 33%",
    gridColumnGap: "5%",
  },

  "@media only screen and (max-width: 600px)": {
    height: "auto",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "repeat(5, 1fr)",
    justifyItems: "center",
    padding: "0 10%",
    gridRowGap: "2%",

    "& .imageLink": {
      alignSelf: "center",
    },
  },
})

const LogoLink = styled.a({
  cursor: "auto",

  "& div": {
    backgroundImage: `url(${FooterLogo})`,
    height: 50,
    width: 50,
  },

  "& div:hover": {
    backgroundImage: `url(${FooterLogoHover})`,
    cursor: "pointer",
  }
})

const LinkContainer = styled.ul({
  "& li": {
    color: "white",
    fontWeight: 300,
    paddingBottom: "1rem",

    "& a": {
      "&:hover": {
        color: "hsl(180, 66%, 49%)",
      },
    },
  },

  "& h3": {
    color: "white",
    fontWeight: 700,
    paddingBottom: "1.3rem",
  },

  "@media only screen and (max-width: 600px)": {
    textAlign: "center",
  },
})

const SocialContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  width: "100%",
  transition: "all 1s ease-in-out",

  "@media only screen and (max-width: 1000px)": {
    gridColumnStart: "1",
    gridColumnEnd: "2",
    gridRowStart: "2",
    gridRowEnd: "3",
  },

  "@media only screen and (max-width: 600px)": {
    gridColumnStart: "1",
    gridColumnEnd: "2",
    gridRowStart: "5",
    gridRowEnd: "-1",
  },

  "& .socialIcon": {
    fontSize: 25,
    cursor: "pointer",
		color: "white",

    "&:hover": {
      filter: "invert(56%) sepia(76%) saturate(400%) hue-rotate(131deg) brightness(101%) contrast(94%)",
    },
  },
})
