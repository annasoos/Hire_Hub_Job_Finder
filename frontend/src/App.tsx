import { useState } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';
import './App.less';
//import design elements
import { NavBar, Hamburger, HamburgerMenu } from './App.style';
import HeaderLogo from "./images/logo_white.png";
//import components
import { Hero } from "./components/Hero/Hero";
import { Featured } from "./components/Featured/Featured";
import { Newsletter } from "./components/Newsletter/Newsletter";
import { Footer } from "./components/Footer/Footer";
import { PostForm } from "./components/PostPage/PostPage";
import { JobList } from './components/JobList/JobList';
import { LoginPage } from "./components/Login/LoginPage";
import { RegistrationPage } from "./components/Registration/RegistrationPage";


const App = () => {

	const [hamMenu, setHamMenu] = useState<string>("closed");  //generic argument doesn't necessary because TS infer it from the intial value
	const [hamIcon, setHamIcon] = useState<string>("closed");

	const mobileMenu = (): void => {
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
							<Link id="signup" to="/signup">Sign Up</Link>
						</li>
					</ul>

					<Hamburger id={hamIcon} onClick={mobileMenu}>
						<span className="bar"></span>
						<span className="bar"></span>
						<span className="bar"></span>
					</Hamburger>

					<HamburgerMenu id={hamMenu} onClick={(): void => {setHamMenu("closed"); setHamIcon("closed")}}>
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
						<Find />
					</Route>
					<Route exact path="/post-a-job">
						<Post />
					</Route>
					<Route exact path="/login">
						<Login />
					</Route>
					<Route exact path="/signup">
						<Signup />
					</Route>
				</Switch>
			</div>
		</Router>
	)
};

function Home(){
	return (
		<>
			<Hero />
			<Featured />
			<Newsletter />
			<Footer />
		</>
	);
};

function Find(){
	return (
		<>
			<JobList />
			<Footer />
		</>
	)
};

function Post(){
	return (
		<>
			<PostForm />
			<Footer />
		</>
	)
};

function Login(){
	return (
		<>
			<LoginPage />
			<Footer />
		</>
	)
};

function Signup(){
	return (
		<>
			<RegistrationPage />
			<Footer />
		</>
	)
};

export default App
