import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import HomePage from "./views/main";
import RegisterPage from "./views/registration";
import ProfilePage from "./views/user-profile";
import PublicProfilePage from "./views/public-profile.js";
import BusinessPage from "./views/business-profile.js";
import WriteReview from "./views/write-review";
import searchMainPage from "./views/search-home-page";
import searchPage from "./views/search-page";
import ThankyouPage from "./views/thankyou-page";

function App() {
  return (
    <Router>
      {/* <NavMenu/> */}
      <Switch>
        <Route exact path="/">
          <Redirect to="/main" />
        </Route>
        <Route exact path="/review/thankyou" component={ThankyouPage} />
        <Route exact path="/review/:companyname/new" component={WriteReview} />
        <Route exact path="/review/:companyname" component={BusinessPage} />
        <Route exact path="/profile/:username" component={PublicProfilePage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/main" component={HomePage} />
        <Route exact path="/login" component={RegisterPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/search/category/all" component={searchMainPage} />
        <Route
          exact
          path="/search/category/:searchReq"
          component={searchPage}
        />
      </Switch>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
