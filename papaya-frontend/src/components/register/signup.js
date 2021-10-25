import { Button, Container, Form, FormControl, FloatingLabel, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Footer from '../footer';

export default function SignUpContainer (props) {

    return (
    <>
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
                        <p id="brand-sub-tag">Read Reviews. Write Reviews, Save Money.</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Form>
                            <FloatingLabel 
                                controlId="floatingName" 
                                label="First Name"
                                className="mb-3">
                                <Form.Control type="name" placeholder="First Name" className="register-input"/>
                            </FloatingLabel>
                            <FloatingLabel 
                                controlId="floatingSurname" 
                                label="Last Name"
                                className="mb-3">
                                <Form.Control type="surname" placeholder="Last Name" className="register-input"/>
                            </FloatingLabel>
                            <FloatingLabel 
                                controlId="floatingUserName" 
                                label="User Name"
                                className="mb-3">
                                <Form.Control type="username" placeholder="Username" className="register-input"/>
                            </FloatingLabel>
                            <FloatingLabel 
                                controlId="floatingDOB" 
                                label="Date of Birth"
                                className="mb-3">
                                <Form.Control type="date" placeholder="Date of Birth" className="register-input"/>
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email address"
                                className="mb-3"
                            >
                                <Form.Control type="email" placeholder="name@example.com" className="register-input"/>
                            </FloatingLabel>
                            <FloatingLabel 
                                controlId="floatingPassword" 
                                label="Password"
                                className="mb-3">
                                <Form.Control type="password" placeholder="Password" className="register-input"/>
                            </FloatingLabel>
                            <Button href="/register" className="container-fluid rounded-pill text-center my-4 py-2 registerButton">
                                <h3>Sign Up</h3>
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Container>
        <Footer/>
        </>

    );

  }