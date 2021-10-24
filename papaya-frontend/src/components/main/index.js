import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import MainJumbo from './main-jumbo'
import SearchBar from '../search-bar'
import Categories from '../categories'
import RecentReviews from '../recent-reviews'
import NewProducts from '../new-products'
import Footer from '../footer'

export default function MainContainer (props) {

    return (
    
        <Container fluid id="main-app-component" className=" mx-0 px-0">
            <MainJumbo></MainJumbo>
            <SearchBar></SearchBar>
            <Categories></Categories>
            <RecentReviews></RecentReviews>
            <NewProducts></NewProducts>
            <Footer/>
        </Container>

    );

  }