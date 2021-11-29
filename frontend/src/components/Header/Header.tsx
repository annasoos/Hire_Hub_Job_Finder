import { useContext, useState } from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
//design
import { Tooltip } from "antd";
import { NavBar, HeaderLogo, Hamburger, HamburgerMenu, LogoutBtn, UserDisplay } from "./Header.style";
import headerLogo from "../../utils/images/logo_white.png";
//types & functions & context
import { openNotificationWithIcon } from "../../utils/functions/Notification";
import { UserContext } from "../../utils/context/UserContext";
import { ValidLoginContext } from "../../utils/context/ValidLoginContext";

export const Header = () => { 
	const history = useHistory();
	const userContext = useContext(UserContext);
	const validLoginContext = useContext(ValidLoginContext);
	const [hamMenu, setHamMenu] = useState<"open" | "closed">("closed");
	const [hamIcon, setHamIcon] = useState<"open" | "closed">("closed");

  const mobileMenu = () => {
    hamMenu === "open" ? setHamMenu("closed") : setHamMenu("open");
    hamIcon === "open" ? setHamIcon("closed") : setHamIcon("open");
  };

	const logout = () => {
		console.log("User logged out");
    localStorage.removeItem("token");
		sessionStorage.removeItem("user logged in");
		validLoginContext.setValidLogin(false);
		openNotificationWithIcon(
			"success",
			"Logout successful!",
			"We hope to see you again soon!"
		);
		history.push('/')
  };

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
					{validLoginContext.validLogin ? <LogoutBtn onClick={logout}>Logout</LogoutBtn> : <NavLink to="/login">Login</NavLink>}
				</li>
				<li>
					<NavLink id="signup" to="/signup"> Sign Up </NavLink>
				</li>
			</ul>

			<Hamburger id={hamIcon} onClick={mobileMenu}>
				<span className="bar"></span>
				<span className="bar"></span>
				<span className="bar"></span>
			</Hamburger>

			<HamburgerMenu id={hamMenu} onClick={(): void => { setHamMenu("closed"); setHamIcon("closed")}}>
				<NavLink className="dropdown" to="/find-a-job"> Find a job </NavLink>
				<NavLink className="dropdown" to="/post-a-job"> Post a job </NavLink>
				<hr />
				{userContext.loggedInUser ? <LogoutBtn onClick={logout}>Logout</LogoutBtn> : <NavLink to="/login">Login</NavLink>}
				<NavLink className="dropdown" to="/signup" id="mobileSignup"> Sign Up </NavLink>
			</HamburgerMenu>
			
			{userContext.loggedInUser ? 
			<UserDisplay> Logged in as <Tooltip title="Profile" placement="right"><a href="/profile">{userContext.loggedInUser!.firstName} {userContext.loggedInUser!.lastName}</a></Tooltip> </UserDisplay> 
			: null }
		</NavBar>
		)
};

export default Header;