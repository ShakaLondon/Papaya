import { Navbar, NavDropdown, Nav, Container, Form, FormControl, FloatingLabel, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function Footer (props) {

    return (
    
        <Container fluid id="footer-app-component" className="mx-auto d-flex justify-content-center">
            <Container fluid id="footer-container" className="flex-row my-auto mt-4">
                <Row>
                    <Col md={12} className="d-inline-flex justify-content-start align-content-center my-4">
                        <img src="https://res.cloudinary.com/shakalondon/image/upload/v1636974558/Papaya/papaya-round_y4c6uq.png" alt="Papaya Logo" id="papaya-logo-footer" className="d-flex align-self-center mr-2"/>
                        <h1 className="brand-heading-h1 mb-0 mx-2">Papaya.</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={3} className="py-3">
                        <h4>About</h4>
                    </Col>
                    <Col md={3} className="py-2">
                        <h4>Community</h4>
                    </Col>
                    <Col md={3} className="py-2">
                        <h4>Businesses</h4>
                    </Col>
                    <Col md={3} className="py-2">
                        <h4>Follow us on</h4>
                    </Col>
                </Row>
                <Row>
                    <Col md={3} className="py-2">
                        <h6>About us</h6>
                    </Col>
                    <Col md={3} className="py-2">
                        <h6>Trust in reviews</h6>
                    </Col>
                    <Col md={3} className="py-2">
                        <h6>Papaya Business</h6>
                    </Col>
                    <Col md={3} className="py-2">
                        <Row>
                            <Col md={2}>
                                <FontAwesomeIcon icon={faInstagram}/>
                            </Col>
                            <Col md={2}>
                                <FontAwesomeIcon icon={faTwitter}/>
                            </Col>
                            <Col md={2}>
                                <FontAwesomeIcon icon={faFacebook}/>
                            </Col>
                            <Col md={2}>
                                <FontAwesomeIcon icon={faLinkedinIn}/>
                            </Col>
                            <Col md={2}>
                                <FontAwesomeIcon icon={faYoutube}/>
                            </Col>
                        </Row>
                    </Col>

                </Row>
                <Row>
                    <Col md={3} className="py-2">
                        <h6>Jobs</h6>
                    </Col>
                    <Col md={3} className="py-2">
                        <h6>Support Center</h6>
                    </Col>
                    <Col md={3} className="py-2">
                        <h6>Products</h6>
                    </Col>
                    <Col md={3} className="py-2">
                    
                    </Col>

                </Row>
                <Row>
                    <Col md={3} className="py-2">
                        <h6>Contact</h6>
                    </Col>
                    <Col md={3} className="py-2">
                        <h6>Log in</h6>
                    </Col>
                    <Col md={3} className="py-2">
                        <h6>Plans & Pricing</h6>
                    </Col>
                    <Col md={3} className="py-2">
                        
                    </Col>
                </Row>
                <Row>
                    <Col md={3} className="py-2">
                        <h6>How Trustpilot works</h6>
                    </Col>
                    <Col md={3} className="py-2">
                        <h6>Chrome App</h6>
                    </Col>
                    <Col md={3} className="py-2">
                        <h6>Blog for Business</h6>
                    </Col>
                    <Col md={3} className="py-2">
                        
                    </Col>
                </Row>
                <Row>
                    <Col md={3} className="py-2">
                        <h6>Transparency Report</h6>
                    </Col>
                </Row>
                <Row>
                    <Col md={3} className="py-2">
                        <h6>Investor Relations</h6>
                    </Col>
                    <Col md={6} className="py-2">
                  
                    </Col>
                    <Col md={3}>
                        <h4>Choose Country</h4>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="d-flex py-2 mt-3">
                        <h6 className="px-2 ps-0">Legal</h6>
                    {/* </Col>
                    <Col md={2} className="px-0 d-flex"> */}
                        <h6 className="px-2">Privacy Policy</h6>
                    {/* </Col>
                    <Col md={2} className="px-0"> */}
                        <h6 className="px-2">Terms & Conditions</h6>
                    {/* </Col>
                    <Col md={2} className="px-0"> */}
                        <h6 className="px-2">Guidelines for Reviewers</h6>
                    {/* </Col>
                    <Col md={2} className="px-0"> */}
                        <h6 className="px-2">System status</h6>
                    {/* </Col>
                    <Col md={2} className="px-0"> */}
                        <h6 className="px-2">Cookie preferences</h6>
                    </Col>
                </Row>
            </Container>
        </Container>

    );

  }