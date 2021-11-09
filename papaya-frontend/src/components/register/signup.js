import { Button, Container, Form, FormControl, FloatingLabel, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Footer from '../footer';
import { useState } from 'react';
import { registerAction } from '../../redux/actions/auth';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

const mapStateToProps = (state) => ({
    error: state.appState.error,
    loading: state.appState.loading,
    isLoggedIn: state.user.isLoggedIn,
    userFound: state.user.userFound
  });
  
  const mapDispatchToProps = (dispatch) => ({
    //functions
    register: (userObj) => dispatch(registerAction(userObj)),
  });

const SignUpContainer = ({
    login,
    loading,
    error,
    isLoggedIn,
    userFound, 
    register
}) => {

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        name: "",
        surname: "",
        email: "",
        username: "",
        password: "",
        dateOfBirth: "",
      })

      const handleSubmit= (e) => {
        e.preventDefault();
        register(userInfo)
      }

      const handleChange= (e) => {
        console.log(e.target.value)
        let name = e.target.name
        setUserInfo({ ...userInfo, [name]: e.target.value});
      }

      if (isLoggedIn) { 
        return <Redirect to='/main' /> 
    } else { return (
    <>
        <Container fluid id="signup-app-component" className="mx-auto d-flex justify-content-center">
            <Container fluid id="signup-form" className="flex-row my-auto">
                <Row>
                    <Col md={12} className="d-inline-flex justify-content-center align-content-center my-3">
                        <img src="./resources/logo/papaya-round.png" alt="Papaya Logo" id="papaya-logo-signup" className="d-flex align-self-center mx-2"/>
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
                        <Form onSubmit={handleSubmit}>
                            <FloatingLabel 
                                controlId="floatingName" 
                                label="First Name"
                                className="mb-3">
                                <Form.Control type="name" name="name" placeholder="First Name" className="register-input" value={userInfo.name} onChange={handleChange}/>
                            </FloatingLabel>
                            <FloatingLabel 
                                controlId="floatingSurname" 
                                label="Last Name"
                                className="mb-3">
                                <Form.Control type="surname" name="surname" placeholder="Last Name" className="register-input" value={userInfo.surname} onChange={handleChange}/>
                            </FloatingLabel>
                            <FloatingLabel 
                                controlId="floatingUserName" 
                                label="User Name"
                                className="mb-3">
                                <Form.Control type="username" name="username" placeholder="Username" className="register-input" value={userInfo.username} onChange={handleChange}/>
                            </FloatingLabel>
                            <FloatingLabel 
                                controlId="floatingDOB" 
                                label="Date of Birth"
                                className="mb-3">
                                <Form.Control type="date" name="dateOfBirth" placeholder="Date of Birth" className="register-input" value={userInfo.dateOfBirth} onChange={handleChange}/>
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email address"
                                className="mb-3"
                            >
                                <Form.Control type="email" name="email" placeholder="name@example.com" className="register-input" value={userInfo.email} onChange={handleChange}/>
                            </FloatingLabel>
                            <FloatingLabel 
                                controlId="floatingPassword" 
                                label="Password"
                                className="mb-3">
                                <Form.Control type="password" name="password" placeholder="Password" className="register-input" value={userInfo.password} onChange={handleChange}/>
                            </FloatingLabel>
                            <Button type="submit" className="container-fluid rounded-pill text-center my-4 py-2 registerButton">
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
  }

  export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);