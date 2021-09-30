import { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import jwt from "jsonwebtoken";
//design
import "./App.less";
import { NavBar, Hamburger, HamburgerMenu } from "./App.style";
import HeaderLogo from "./images/logo_white.png";
//components
import { Hero } from "./components/Hero/Hero";
import { Featured } from "./components/Featured/Featured";
import { Newsletter } from "./components/Newsletter/Newsletter";
import { Footer } from "./components/Footer/Footer";
import { PostForm } from "./components/PostPage/PostPage";
import { JobList } from "./components/JobList/JobList";
import { LoginPage } from "./components/Login/LoginPage";
import { RegistrationPage } from "./components/Registration/RegistrationPage";
//context
import { UserContext } from "./context/UserContext";

const App = () => {
  const [hamMenu, setHamMenu] = useState<"open" | "closed">("closed");
  const [hamIcon, setHamIcon] = useState<"open" | "closed">("closed");

  const mobileMenu = () => {
		hamMenu === "open" ? setHamMenu("closed") : setHamMenu("open");
    hamIcon === "open" ? setHamIcon("closed") : setHamIcon("open");
  };
	
	//check whether any user is logged in
	const token = localStorage.getItem("token");
	const tokenKey:string = process.env.REACT_APP_TOKEN_KEY!
	const userContext = useContext(UserContext);

 	useEffect(() => {
		if (token) {
			jwt.verify(token, tokenKey, function(err, decoded) {
				if (decoded) {
					console.log(decoded)	
					userContext.setLoggedInUser({
						firstName: decoded.firstName,
						lastName:decoded.lastName,
						email: decoded.email
					})
				}
			})
		}
  }, [token]);

  return (
      <Router>
        <div>
          <NavBar>
            <a href="/">
              <img src={HeaderLogo} alt="hire_hub_logo" />
            </a>
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
                <Link id="signup" to="/signup">
                  Sign Up
                </Link>
              </li>
            </ul>

            <Hamburger id={hamIcon} onClick={mobileMenu}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </Hamburger>

            <HamburgerMenu
              id={hamMenu}
              onClick={(): void => {
                setHamMenu("closed");
                setHamIcon("closed");
              }}
            >
              <Link className="dropdown" to="/find-a-job">
                Find a job
              </Link>
              <Link className="dropdown" to="/post-a-job">
                Post a job
              </Link>
              <hr />
              <Link className="dropdown" to="/login">
                Login
              </Link>
              <Link className="dropdown" to="/signup" id="mobileSignup">
                Sign Up
              </Link>
            </HamburgerMenu>
          </NavBar>

          <Route exact path="/">
            <>
              <Hero />
              <Featured />
              <Newsletter />
              <Footer />
            </>
          </Route>
          <Route exact path="/find-a-job">
            <>
              <JobList />
              <Footer />
            </>
          </Route>
          <Route exact path="/post-a-job">
            <>
              <PostForm />
              <Footer />
            </>
          </Route>
          <Route exact path="/login">
            <>
              <LoginPage />
              <Footer />
            </>
          </Route>
          <Route exact path="/signup">
            <>
              <RegistrationPage />
              <Footer />
            </>
          </Route>
        </div>
      </Router>
  );
};

export default App;
