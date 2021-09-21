import styled from "@emotion/styled";
import FooterLogo from "../images/footer_logo.svg";
import FooterLogoHover from "../images/footer_logo_hover.svg";
import {
  FacebookFilled,
  LinkedinFilled,
  TwitterCircleFilled,
  GooglePlusCircleFilled,
} from "@ant-design/icons";
import { IFooter } from "../interfaces/interfaces"

export const Footer = () => {
	
  let items: IFooter[] = [];
	
	items = [
    {
      name: "Conditions",
      links: [
        { linkName: "General Terms and Conditions", path: "#" },
        { linkName: "Terms of Use", path: "#" },
        { linkName: "Privacy Policy", path: "#" },
      ],
    },
    {
      name: "Company",
      links: [
        { linkName: "About Us", path: "#" },
        { linkName: "Careers", path: "#" },
        { linkName: "Media Offer", path: "#" },
      ],
    },
    {
      name: "Support",
      links: [
        { linkName: "Customer Service", path: "#" },
        { linkName: "Contact Us", path: "#" },
      ],
    },
  ];

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

const FooterContainer = styled.section`
  width: 100%;
  height: auto;
  padding: 5rem 10%;

  display: grid;
  grid-template-columns: repeat(5, 1fr);

  background-color: hsl(216, 53%, 9%);
  transition: all 1s ease-in-out;

  @media only screen and (max-width: 1000px) {
    height: auto;
    grid-template-columns: 33% 33% 33%;
    grid-column-gap: 5%;
  }

  @media only screen and (max-width: 600px) {
    height: auto;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 1fr);
    justify-items: center;
    padding: 0 10%;
    grid-row-gap: 2%;

    & .imageLink {
      align-self: center;
    }
  } ;
`;

const LogoLink = styled.a`
  cursor: auto;

  & div {
    background-image: url(${FooterLogo});
    height: 50px;
    width: 50px;
  }

  & div:hover {
    background-image: url(${FooterLogoHover});
    cursor: pointer;
  }
`;

const LinkContainer = styled.ul`
  & li {
    color: white;
    font-weight: 300;
    padding-bottom: 1rem;

    & a {
      &:hover {
        color: hsl(180, 66%, 49%);
      }
    }
  }

  & h3 {
    color: white;
    font-weight: 700;
    padding-bottom: 1.3rem;
  }

  @media only screen and (max-width: 600px) {
    text-align: center;
  } ;
`;

const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  transition: all 1s ease-in-out;

  @media only screen and (max-width: 1000px) {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
  }

  @media only screen and (max-width: 600px) {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 5;
    grid-row-end: -1;
  }

  & .socialIcon {
    font-size: 25px;
    cursor: pointer;
		color:white;

    &:hover {
      filter: invert(56%) sepia(76%) saturate(400%) hue-rotate(131deg)
        brightness(101%) contrast(94%);
    }
  }
`;
