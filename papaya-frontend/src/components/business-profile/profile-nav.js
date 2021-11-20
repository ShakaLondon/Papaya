import { faCircle, faDotCircle, faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Nav, Container, Navbar, NavDropdown, Row, Col } from 'react-bootstrap'
import userAuth from '../../services/user/user-auth';
import StarRating from '../rating-component/rating-class-component';
import WebsiteContainer from "./profile-cards/website-card.js"


export default function BusinessNav (props) {


    return (
        <Navbar bg="light" expand="lg" className="py-5" id="profile-header">
            <Container fluid className="d-flex" id="profile-container">

                <Navbar.Brand><img src={props.profile?.avatar.avatar} alt="User Avatar" className="rounded-circle" style={{ width: "10rem", height: "10rem", objectFit: "cover" }}/></Navbar.Brand>
                <Navbar.Brand>
                    <Container fluid>
                        <h1 className="text-white mb-0">{props.profile.name}</h1>
                    </Container>
                    <Container fluid>
                        <h6 className="text-white">{`@${props.profile.username}`}</h6>
                    </Container>
                    <Container fluid className="d-flex align-items-center">
                        <h6 className="text-white mb-0">{`Reviews  `}</h6><h6 className="text-white mb-0 ms-2">{`617`}</h6>
                        <FontAwesomeIcon icon={faCircle} style={{ width: "5px", height: "5px"}} className="text-white mx-2"/>
                        <h6 className="text-white mb-0 text-bold">{props.currentRating > 4 ? "Excellent" :
                        props.currentRating > 3 ? "Great" :
                        props.currentRating > 2 ? "Average" :
                        props.currentRating > 1 ? "Poor" :
                        "Bad"}</h6>
                    </Container>
                    <Container fluid className="d-flex align-items-center my-2">
                        <StarRating currentRating={4.5} numberOfStars={5}/>
                        <h6 className="text-white mb-0">{props.currentRating}</h6>
                    </Container>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Container>
                        <WebsiteContainer website={`www.example.co.uk`}/>
                    </Container>
                    {/* <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link> */}
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    );
  }