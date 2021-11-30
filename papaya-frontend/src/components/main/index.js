import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import MainJumbo from './main-jumbo'
import SearchBar from '../search-bar'
import Categories from '../categories'
import RecentReviews from '../recent-reviews'
import NewProducts from '../new-products'
import Footer from '../footer'
import LoginJumbo from './login-jumbo'

import { connect } from 'react-redux'
import { loginAction } from "../../redux/actions/auth.js"
import { openNavAction } from "../../redux/actions/index.js"

const mapStateToProps = (state) => ({
    error: state.appState.error,
    loading: state.appState.loading,
    isLoggedIn: state.user.isLoggedIn,
    userFound: state.user.userFound,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    //functions
    login: (email, password) => dispatch(loginAction(email, password)),
  });

const MainContainer = ({
    login,
    loading,
    error,
    isLoggedIn,
    userFound,
}) => {

    return (
    
        <Container fluid id="main-app-component" className="mx-0 px-0 scrollNav">
            {isLoggedIn ? <LoginJumbo></LoginJumbo> : <MainJumbo></MainJumbo>}
            <SearchBar></SearchBar>
            <Categories></Categories>
            <RecentReviews></RecentReviews>
            <NewProducts></NewProducts>
            <Footer/>
        </Container>

    );

  }

  export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);