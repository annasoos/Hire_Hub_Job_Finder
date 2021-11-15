import { Component } from "react";
import { NavLink, withRouter, RouteComponentProps } from "react-router-dom";
//design
import { Tooltip } from "antd";
import { NavBar, HeaderLogo, Hamburger, HamburgerMenu, LogoutBtn, UserDisplay } from "./Header.style";
import headerLogo from "../../utils/images/logo_white.png";
//types & functions & context
import { HeaderClassStateType } from "../../utils/types/HeaderClassStateType";
import { openNotificationWithIcon } from "../../utils/functions/Notification";
import { UserContext } from "../../utils/context/UserContext";

class Header extends Component<RouteComponentProps<{}>, HeaderClassStateType> { 

	/*
	You can get access to the history object’s properties and the closest <Route>'s match via the withRouter higher-order component. 
	If you would like to access the router history in class components, history has to be passed as a prop from react router, so it should be a direct child of a Route component.
	It used by "props.history.push()"
	withRouter HOC will pass updated match, location, and history props to the wrapped component whenever it renders, so I need to add the types of these props with importing RouteComponentProps
	*/

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
				<HeaderLogo src={headerLogo} alt="hire_hub_logo" />
			</a>
			<ul>
				<li>
					<NavLink to="/find-a-job/1">Find a job</NavLink>
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
			<UserDisplay> Logged in as <Tooltip title="Profile" placement="right"><a href="/profile">{userContext.loggedInUser.firstName} {userContext.loggedInUser.lastName}</a></Tooltip> </UserDisplay> 
			: null }
		</NavBar>
		)
	}
};

export default withRouter(Header);