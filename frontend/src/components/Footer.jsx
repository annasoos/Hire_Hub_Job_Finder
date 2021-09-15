import React from "react";
import styled from '@emotion/styled';
import FooterLogo from "../images/footer_logo.svg";
import FooterLogoHover from "../images/footer_logo_hover.svg";
import Facebook from "../images/icon-facebook.svg";
import Instagram from "../images/icon-instagram.svg";
import Twitter from "../images/icon-twitter.svg";
import Pinterest from "../images/icon-pinterest.svg";

const Footer = () => {

	const items = [
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
		}
	];

	const socialIcons = [
		{
			name: "Facebook",
			icon: Facebook,
		},
		{
			name: "Twitter",
			icon: Twitter,
		},
		{
			name: "Pinterest",
			icon: Pinterest,
		},
		{
			name: "Instagram",
			icon: Instagram,
		},
	];


	return (
		<FooterContainer>

			<LogoLink href="/" className="imageLink"><div></div></LogoLink>

			{items.map((item, index) =>
				<LinkContainer key={index}>
					<h3> {item.name} </h3>
					{item.links.map((link, index) =>
						<li key={index}><a href={link.path}>{link.linkName}</a></li>
					)}
				</LinkContainer>
			)}

			<SocialContainer className="imageLink">
				{socialIcons.map((icon, index) =>
					<SocialIcon src={icon.icon} alt={icon.name} key={index} />
				)}
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
	};

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
	};
`

const LogoLink = styled.a`
	cursor: auto;

	& div{
		background-image: url(${FooterLogo});
		height: 50px;
		width: 50px;
	}
	
	& div:hover{
		background-image: url(${FooterLogoHover});
		cursor: pointer;
	}
`

const LinkContainer = styled.ul`

	& li {
		color: white;
		font-weight: 300;
		padding-bottom: 1rem;

		&:hover{
			color: hsl(180, 66%, 49%);
		}
	};

	& h3 {
		color: white;
		font-weight: 700;
		padding-bottom: 1.3rem;
	};

	@media only screen and (max-width: 600px) {
		text-align: center;
	};
`

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
	};

	@media only screen and (max-width: 600px) {
		grid-column-start: 1;
  	grid-column-end: 2;
  	grid-row-start: 5;
  	grid-row-end: -1;
	};
`

const SocialIcon = styled.img`
	height: 24px;
	cursor: pointer;

	&:hover{
    filter: invert(56%) sepia(76%) saturate(400%) hue-rotate(131deg) brightness(101%) contrast(94%);
	}
`


export default Footer
