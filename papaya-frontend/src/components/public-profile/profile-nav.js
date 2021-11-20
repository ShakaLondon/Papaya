import { faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Nav, Container, Navbar, NavDropdown, Row, Col } from 'react-bootstrap'


export default function PublicProfileNav (props) {
    return (
        <Navbar bg="light" expand="lg" className="py-5" id="profile-header">
            <Container fluid className="d-flex" id="profile-container">

                <Navbar.Brand><img src={props.profile?.avatar.avatar} alt="User Avatar" className="rounded-circle" style={{ width: "6rem", height: "6rem", objectFit: "cover" }}/></Navbar.Brand>
                <Navbar.Brand>
                    <Container fluid>
                        <h1 className="text-white">{props.profile?.name}</h1>
                    </Container>
                    <Container fluid>
                        <h6 className="text-white">{`@${props.profile?.username}`}</h6>
                    </Container>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Container>
                        <Row>
                            <Col md={6}>
                                <Container>
                                    <Row>
                                        <Col md={12} className="d-flex justify-content-center">
                                            <h1>{props.profile?.reviews.length}</h1>
                                        </Col>
                                    </Row>
                                    <Row className="d-flex justify-content-center">
                                        <Col md={4} className="d-flex align-items-center">
                                            <FontAwesomeIcon icon={faStar}/>
                                        </Col>
                                        <Col md={8} className="d-flex align-items-center">
                                            <h6 className="mb-0">reviews</h6>
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                            <Col md={6}>
                            <Container>
                                    <Row>
                                        <Col md={12} className="d-flex justify-content-center">
                                            <h1>0</h1>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={4} className="d-flex align-items-center">
                                            <FontAwesomeIcon icon={faThumbsUp}/>
                                        </Col>
                                        <Col md={8} className="d-flex align-items-center">
                                            <h6 className="mb-0">useful</h6>
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                    {/* <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link> */}
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    );
  }