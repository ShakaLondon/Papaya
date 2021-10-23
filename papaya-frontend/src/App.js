import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import NavMenu from './views/main';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import HomePage from './views/main';
import RegisterPage from './views/registration';
import Footer from './components/footer';


function App() {
  return (
    <Router>
      {/* <NavMenu/> */}
      <Switch>
        <Route exact path="/">
          <Redirect to="/main"/>
        </Route>
        <Route path="/main" component={HomePage}/>
        <Route path="/login" component={RegisterPage}/>
        <Route path="/register" component={RegisterPage}/>
      </Switch>
        <Footer/>
    </Router>
  );
}

export default App;
