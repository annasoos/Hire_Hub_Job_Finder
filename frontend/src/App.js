import React, { useState } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import './App.less';
import styled from '@emotion/styled';
import HeaderLogo from "./images/logo_white.png";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import Review from "./components/Review";
import Footer from "./components/Footer";

const App = () => {

	const [hamMenu, setHamMenu] = useState("closed");
	const [hamIcon, setHamIcon] = useState("closed");

	const mobileMenu = () => {
		hamMenu === "open" ? setHamMenu("closed") : setHamMenu("open");
		hamIcon === "open" ? setHamIcon("closed") : setHamIcon("open");
	};

	return (
		<Router>
			<div>
				<NavBar>
					<a href="/"><img src={HeaderLogo} alt="hire_hub_logo" /></a>
					<ul>
						<li>
							<Link to="/find-a-job">Find a job</Link>
						</li>
						<li>
							<Link to="/post-a-job">Post a job</Link>
						</li>
					</ul>

					<ul>
						<li>
							<Link to="/login">Login</Link>
						</li>
						<li>
							<Link as="button" id="signup" to="/signup">Sign Up</Link>
						</li>
					</ul>

					<Hamburger id={hamIcon} onClick={mobileMenu}>
						<span className="bar"></span>
						<span className="bar"></span>
						<span className="bar"></span>
					</Hamburger>

					<HamburgerMenu id={hamMenu}>
						<Link className="dropdown" to="/find-a-job">Find a job</Link>
						<Link className="dropdown" to="/post-a-job">Post a job</Link>
						<hr />
						<Link className="dropdown" to="/login">Login</Link>
						<Link className="dropdown" to="/signup" id="mobileSignup">Sign Up</Link>
					</HamburgerMenu>

				</NavBar>

				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/find-a-job">

					</Route>
					<Route exact path="/post-a-job">

					</Route>
					<Route exact path="/login">

					</Route>
					<Route exact path="/signup">

					</Route>
				</Switch>
			</div>
		</Router>
	)
}

function Home() {
	return (
		<>
			<Hero />
			<Featured />
			<Review />
			<Footer />
		</>
	);
}

const NavBar = styled.nav`

	width: 100%;
	height: 7rem;
	padding: 5rem 10%;

	position: relative;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	text-align: center;
	transition: all 1s ease-in-out;

	@media screen and (max-width: 1090px) {
    height: 5rem;
		padding: 3.5rem 10%;
  }

	& img {
		height: 3.5rem;
		padding-right: 5rem;
		margin-bottom: 1rem;

		@media screen and (max-width: 600px) {
    	height: 3rem;
			padding: 0;
			margin: 0;
  	}
	}
	
	& ul {
		width: 30%;
  	display: flex;
		flex: auto;
  	flex-direction: row;
		justify-content: flex-end;
		align-items: center;

		color: hsl(257, 7%, 63%);

		@media screen and (max-width: 1090px) {
    display: none;
  }

		&:first-of-type{
			justify-content: flex-start;
		}

		& li{
			padding: 0.45rem 1.5em;

			&:first-of-type{
			padding-left: 0;
			}

			& a{

				&:hover{
					color: white;
				}
			}
		}
	}

	& #signup {
		color: hsl(218, 28%, 13%);
		background-color: hsl(180, 66%, 49%);
		border-radius: 20px;
		padding: 0.45rem 1.5em;

		&:hover{
			background-color: hsla(180, 66%, 49%, 0.5);
			color: white;
		}
	}
`

const Hamburger = styled.div`
	display: none;
	cursor: pointer;

	@media screen and (max-width: 1090px) {
    display: block;
  }

	& span {
		display: block;
		width: 35px;
		height: 5px;
		margin: 6px auto;
		transition: all 0.3s ease-in-out;
		background-color: hsl(0, 0%, 75%);
		border-radius: 2px;
	}

	&#open span:nth-of-type(1) {
		transform: rotate(-45deg) translate(-9px, 6px);
	}

	&#open span:nth-of-type(2) {
  	opacity: 0;
	}

	&#open span:nth-of-type(3) {
  	transform: rotate(45deg) translate(-8px, -8px);
	}
`;

const HamburgerMenu = styled.div`
		opacity: 0;
		width: 80%;
		display: flex;
		flex-direction: column;
		background-color: hsl(216, 53%, 9%);
		border-radius: 10px;

		position: absolute;
		top: 6rem;

		z-index: 2;

		animation: hide 500ms;
		transition-duration: 500ms;
		transform-origin: top center;

		&#open{
			opacity: 1;
			animation: appear 500ms;
		}

		@media only screen and (min-width: 768px) {
			width: 40%;
			right: 10%;
		};

		& a {
			padding: 0.4rem 0.2rem;
			margin: 0.8rem 0.5rem;
    	color: white;
			cursor: pointer;

			&:active{
				color: hsl(180, 66%, 49%);
			}
  	}

		& hr{
			height: 1px;
			width: 80%;
			background-color: hsl(257, 7%, 63%);

			position: relative;
			left: 50%;
			transform: translateX(-50%)
		}

		& #mobileSignup {
			color: white;
			background-color: hsl(180, 66%, 49%);
			border-radius: 20px;

			&:active{
				background-color: hsla(180, 66%, 49%, 0.5);
			}
		}
`;


export default App
