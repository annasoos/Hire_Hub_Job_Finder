import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from 'react-router';
//design
import { NavBar, Hamburger, HamburgerMenu, LogoutBtn } from "./Header.style";
import HeaderLogo from "../../images/logo_white.png";
//context
import { UserContext } from "../../context/UserContext";

export const Header = () => {
	
	const history = useHistory();
	const userContext = useContext(UserContext);
	const [hamMenu, setHamMenu] = useState<"open" | "closed">("closed");
  const [hamIcon, setHamIcon] = useState<"open" | "closed">("closed");

  const mobileMenu = () => {
    hamMenu === "open" ? setHamMenu("closed") : setHamMenu("open");
    hamIcon === "open" ? setHamIcon("closed") : setHamIcon("open");
  };

	const logout = () => {
    localStorage.removeItem("token");
		history.push("/")
  };

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
				{userContext.loggedInUser ? <LogoutBtn onClick={logout}>Logout</LogoutBtn> : <NavLink to="/login">Login</NavLink>}
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

		<HamburgerMenu id={hamMenu} onClick={(): void => { setHamMenu("closed"); setHamIcon("closed") }}>
			<NavLink className="dropdown" to="/find-a-job"> Find a job </NavLink>
			<NavLink className="dropdown" to="/post-a-job"> Post a job </NavLink>
			<hr />
			{userContext.loggedInUser ? <LogoutBtn onClick={logout}>Logout</LogoutBtn> : <NavLink to="/login">Login</NavLink>}
			<NavLink className="dropdown" to="/signup" id="mobileSignup"> Sign Up </NavLink>
		</HamburgerMenu>

	</NavBar>
	
	)
}