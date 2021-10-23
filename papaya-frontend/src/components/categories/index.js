import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import CategorySlider from '../sliders/category-slider.js'

export default function Categories (props) {

    return (
    
        <Container fluid className="px-5" id="category-slider-cont">
            <CategorySlider/>
        </Container>

    );

  }