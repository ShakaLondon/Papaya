import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import NavMenu from './views/main';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import HomePage from './views/main';
import RegisterPage from './views/registration';
import ProfilePage from './views/user-profile';
import PublicProfilePage from './views/public-profile.js'
import BusinessPage from './views/business-profile.js'
import WriteReview from './views/write-review';



function App() {
  return (
    <Router>
      {/* <NavMenu/> */}
      <Switch>

        <Route exact path="/">
          <Redirect to="/main"/>
        </Route>
        <Route exact path="/review/:companyname/new" component={WriteReview}/>
        <Route exact path="/review/:companyname" component={BusinessPage}/>
        <Route exact path="/profile/:username" component={PublicProfilePage}/>
        <Route exact path="/profile" component={ProfilePage}/>
        <Route exact path="/main" component={HomePage}/>
        <Route exact path="/login" component={RegisterPage}/>
        <Route exact path="/register" component={RegisterPage}/>

        
      </Switch>
        {/* <Footer/> */}
    </Router>
  );
}

export default App;
