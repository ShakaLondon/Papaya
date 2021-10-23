import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import NewProductSlider from '../sliders/new-products.js';

export default function NewProducts (props) {

    return (
    
        <Container fluid className="px-5" id="product-slider-cont">
            <NewProductSlider/>
        </Container>

    );

  }