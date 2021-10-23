import { Navbar, NavDropdown, Nav, Container, Form, FormControl, FloatingLabel, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function LoginContainer (props) {

    return (
    
        <Container fluid id="login-app-component" className="mx-auto d-flex justify-content-center">
            <Container fluid id="login-form" className="flex-row my-auto">
                <Row>
                    <Col md={12} className="d-inline-flex justify-content-center align-content-center my-3">
                        <img src="./resources/logo/papaya-round.png" alt="Papaya Logo" id="papaya-logo-login" className="d-flex align-self-center mx-2"/>
                        <h1 className="brand-heading-h1 mb-0 mx-2">Papaya.</h1>
                    </Col>
                    {/* <Col md={9} className="d-flex align-items-center">
                        <h1 className="brand-heading-h1 mb-0">Papaya.</h1>
                    </Col> */}
                </Row>
                <Row>
                    <Col md={12}>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Form>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email address"
                                className="mb-3"
                            >
                                <Form.Control type="email" placeholder="name@example.com" />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingPassword" label="Password">
                                <Form.Control type="password" placeholder="Password" />
                            </FloatingLabel>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Container>

    );

  }