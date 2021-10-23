import { Navbar, NavDropdown, Nav, Container, Form, FormControl, FloatingLabel, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function Footer (props) {

    return (
    
        <Container fluid id="footer-app-component" className="mx-auto d-flex justify-content-center">
            <Container fluid id="footer-container" className="flex-row my-auto">
                <Row>
                    <Col md={12} className="d-inline-flex justify-content-start align-content-center my-4">
                        <img src="./resources/logo/papaya-round.png" alt="Papaya Logo" id="papaya-logo-footer" className="d-flex align-self-center mr-2"/>
                        <h1 className="brand-heading-h1 mb-0 mx-2">Papaya.</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <h2>About</h2>
                    </Col>
                    <Col md={3}>
                        <h2>Community</h2>
                    </Col>
                    <Col md={3}>
                        <h2>Businesses</h2>
                    </Col>
                    <Col md={3}>
                        <h2>Follow us on</h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <h2>About us</h2>
                    </Col>
                    <Col md={3}>
                        <h2>Trust in reviews</h2>
                    </Col>
                    <Col md={3}>
                        <h2>Trustpilot Business</h2>
                    </Col>
                    <Col md={3}>
                        <span>
                            <FontAwesomeIcon icon={faYoutube}/>
                            <FontAwesomeIcon icon={faLinkedinIn}/>
                            <FontAwesomeIcon icon={faFacebook}/>
                            <FontAwesomeIcon icon={faTwitter}/>
                            <FontAwesomeIcon icon={faInstagram}/>
                        </span>
                    </Col>

                </Row>
            </Container>
        </Container>

    );

  }