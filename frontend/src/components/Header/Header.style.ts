import styled from '@emotion/styled';
import { lightgray, gray, cyan, cyanHover, footerBG, mainBG } from '../../style_guide';

export const NavBar = styled.nav({
	width: "100%",
	height: "7rem",
	padding: "5rem 10%",
	
	position: "relative",
	
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
	alignItems: "center",
	
	textAlign: "center",
	transition: "all 1s ease-in-out",
	
	"@media screen and (max-width: 1090px)": {
		height: "5rem",
		padding: "3.5rem 10%",
	},
	
	"& img": {
		height: "3.5rem",
		paddingRight: "5rem",
		marginBottom: "1rem",
	
		"@media screen and (max-width: 600px)": {
			height: "3rem",
			padding: 0,
			margin: 0,
		},
	},
	
	"& ul": {
		width: "30%",
		display: "flex",
		flex: "auto",
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
	
		color: `${lightgray}`,
	
		"@media screen and (max-width: 1090px)": {
		display: "none",
	},
	
		"&:first-of-type": {
			justifyContent: "flex-start",
		},
	
		"& li": {
			padding: "0.45rem 1.5em",
	
			"&:first-of-type": {
			paddingLeft: 0,
			},
	
			"& a": {
	
				"&:hover": {
					color: "white",
				},
			},
		},
	},
	
	"& #signup": {
		color: `${mainBG}`,
		backgroundColor: `${cyan}`,
		borderRadius: 20,
		padding: "0.45rem 1.5em",
	
		"&:hover": {
			backgroundColor: `${cyanHover}`,
			color: "white",
		},
	},
});

export const Hamburger = styled.div({
	display: "none",
	cursor: "pointer",
	
	"@media screen and (max-width: 1090px)": {
		display: "block",
	},
	
	"& span": {
		display: "block",
		width: 35,
		height: 5,
		margin: "6px auto",
		transition: "all 0.3s ease-in-out",
		backgroundColor: `${lightgray}`,
		borderRadius: 2,
	},
	
	"&#open span:nth-of-type(1)": {
		transform: "rotate(-45deg) translate(-9px, 6px)",
	},
	
	"&#open span:nth-of-type(2)": {
		opacity: 0,
	},
	
	"&#open span:nth-of-type(3)": {
		transform: "rotate(45deg) translate(-8px, -8px)",
	},
});

export const HamburgerMenu = styled.div({
	opacity: 0,
	width: "80%",
	display: "flex",
	flexDirection: "column",
	backgroundColor: `${footerBG}`,
	borderRadius: 10,

	position: "absolute",
	top: "6rem",

	zIndex: 2,

	animation: "hide 500ms",
	transitionDuration: "500ms",
	transformOrigin: "top center",

	pointerEvents: "none",

	"&#open": {
		opacity: 1,
		animation: "appear 500ms",
		pointerEvents: "auto",
	},

	"@media only screen and (min-width: 768px)": {
		width: "40%",
		right: "10%",
	},

	"& a": {
		padding: "0.4rem 0.2rem",
		margin: "0.8rem 0.5rem",
		color: "white",
		cursor: "pointer",

		"&:active": {
			color: `${cyan}`,
		},
	},

	"& hr": {
		height: 1,
		width: "80%",
		backgroundColor: `${gray}`,

		position: "relative",
		left: "50%",
		transform: "translateX(-50%)",
	},

	"& #mobileSignup": {
		color: "white",
		backgroundColor: `${cyan}`,
		borderRadius: 20,

		"&:active": {
			backgroundColor: `${cyanHover}`,
		},
	},
});

export const LogoutBtn = styled.button({
	fontWeight: 500,
	"&:hover": {
		color: "white"
	}
})