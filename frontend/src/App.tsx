import { BrowserRouter as Router, Route } from "react-router-dom";
//design & components
import "./App.less";
import Header from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Featured } from "./components/Featured/Featured";
import { Newsletter } from "./components/Newsletter/Newsletter";
import PostForm from "./components/PostPage/PostPage";
import { JobList } from "./components/JobList/JobList";
import { LoginPage } from "./components/Login/LoginPage";
import { RegistrationPage } from "./components/Registration/RegistrationPage";
import { Profile } from "./components/Profile/Profile";
import { Footer } from "./components/Footer/Footer";

const App = () => {

  return (
    <Router>
			<Route>
      	<Header />
			</Route>
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
        <LoginPage />
      </Route>
      <Route exact path="/signup">
        <RegistrationPage />
      </Route>
			<Route exact path="/profile">
        <Profile />
      </Route>
      <Footer />
    </Router>
  );
};

export default App;
