import { Component } from "react";
import { NavLink, withRouter, RouteComponentProps } from "react-router-dom";
//design
import { NavBar, Hamburger, HamburgerMenu, LogoutBtn, UserDisplay } from "./Header.style";
import HeaderLogo from "../../images/logo_white.png";
//types & functions & context
import { HeaderClassStateType } from "../../types/HeaderClassStateType";
import { openNotificationWithIcon } from "../../functions/Notification";
import { UserContext } from "../../context/UserContext";

class Header extends Component<RouteComponentProps<{}>, HeaderClassStateType> { 

	static contextType = UserContext;

	constructor (props: RouteComponentProps<{}>) {
		super(props)

		this.state = {
			hamMenu: "closed",
			hamIcon: "closed"
		}
	}

  mobileMenu = () => {
    this.state.hamMenu === "open" ? this.setState({hamMenu: "closed"}) : this.setState({hamMenu: "open"});
    this.state.hamIcon === "open" ? this.setState({hamIcon: "closed"}) : this.setState({hamIcon: "open"});
  };

	logout = () => {
		console.log("User logged out");
    localStorage.removeItem("token");
		this.context.setToken(null);
		openNotificationWithIcon(
			"success",
			"Logout successful!",
			"We hope to see you again soon!"
		);
		this.props.history.push('/')
  };

	render () {

		const userContext = this.context;

		return (
		<NavBar>
			<a href="/">
				<img src={HeaderLogo} alt="hire_hub_logo" />
			</a>
			<ul>
				<li>
					<NavLink to="/find-a-job">Find a job</NavLink>
				</li>
				<li>
					<NavLink to="/post-a-job">Post a job</NavLink>
				</li>
			</ul>

			<ul>
				<li>
					{userContext.loggedInUser ? <LogoutBtn onClick={this.logout}>Logout</LogoutBtn> : <NavLink to="/login">Login</NavLink>}
				</li>
				<li>
					<NavLink id="signup" to="/signup"> Sign Up </NavLink>
				</li>
			</ul>

			<Hamburger id={this.state.hamIcon} onClick={this.mobileMenu}>
				<span className="bar"></span>
				<span className="bar"></span>
				<span className="bar"></span>
			</Hamburger>

			<HamburgerMenu id={this.state.hamMenu} onClick={(): void => { this.setState({hamMenu: "closed", hamIcon: "closed"})}}>
				<NavLink className="dropdown" to="/find-a-job"> Find a job </NavLink>
				<NavLink className="dropdown" to="/post-a-job"> Post a job </NavLink>
				<hr />
				{userContext.loggedInUser ? <LogoutBtn onClick={this.logout}>Logout</LogoutBtn> : <NavLink to="/login">Login</NavLink>}
				<NavLink className="dropdown" to="/signup" id="mobileSignup"> Sign Up </NavLink>
			</HamburgerMenu>
			
			{userContext.loggedInUser ? 
			<UserDisplay> Logged in as <span>{userContext.loggedInUser.lastName} {userContext.loggedInUser.firstName}</span> </UserDisplay> 
			: null }
		</NavBar>
		)
	}
};

export default withRouter(Header);