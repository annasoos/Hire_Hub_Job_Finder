import { useEffect, useContext, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import jwt from "jsonwebtoken";
//design & components
import "./App.less";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Featured } from "./components/Featured/Featured";
import { Newsletter } from "./components/Newsletter/Newsletter";
import { PostForm } from "./components/PostPage/PostPage";
import { JobList } from "./components/JobList/JobList";
import { LoginPage } from "./components/Login/LoginPage";
import { RegistrationPage } from "./components/Registration/RegistrationPage";
import { Footer } from "./components/Footer/Footer";
//context
import { UserContext } from "./context/UserContext";

const App = () => {
  //check whether any user is logged in
	const [token, setToken] = useState<string | null>(localStorage.getItem("token"))
  const userContext = useContext(UserContext);
	const tokenKey: string = process.env.REACT_APP_TOKEN_KEY!;
	
  useEffect(() => {
		if (token) {
      jwt.verify(token, tokenKey, function (err, decoded) {
        if (decoded) {
          userContext.setLoggedInUser({
            firstName: decoded.firstName,
            lastName: decoded.lastName,
            email: decoded.email,
          });
        }
      });
			console.log(userContext.loggedInUser)
    } else {
			userContext.setLoggedInUser(null)
			console.log(userContext.loggedInUser)
		}
  }, [token]);


  return (
    <Router>
      <Header tokenSetter={setToken} />
      <Route exact path="/">
        <>
          <Hero />
          <Featured />
          <Newsletter />
        </>
      </Route>
      <Route exact path="/find-a-job">
        <JobList />
      </Route>
      <Route exact path="/post-a-job">
        <PostForm />
      </Route>
      <Route exact path="/login">
        <LoginPage tokenSetter={setToken} />
      </Route>
      <Route exact path="/signup">
        <RegistrationPage />
      </Route>
      <Footer />
    </Router>
  );
};

export default App;
