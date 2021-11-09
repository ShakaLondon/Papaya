import { faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Card, Button, Container, Row, Col, Form, FloatingLabel, FormControl } from 'react-bootstrap'
import { connect } from 'react-redux';
import { openNavAction } from '../../../redux/actions';



const mapStateToProps = (state) => ({ 
    sideMenuState: state.appState.sideMenu,
    userProf: state.user
})

const mapDispatchToProps = (dispatch) => ({
  setMenuState: (action) => {
    dispatch(openNavAction(action))
  },
})


const PersonalSettings = ({
    sideMenuState,
    setMenuState,
    userProf
}) => { 

    const [userInfo, setUserInfo] = useState({
        email: "",
        username: "",
      })

      const handleSubmit= (e) => {
        e.preventDefault();
        // login(userInfo.email, userInfo.password)
      }

      const handleChange= (e) => {
        console.log(e.target.value)
        let name = e.target.name
        setUserInfo({ ...userInfo, [name]: e.target.value});
      }

    return (
        <Card style={{ width: '100%' }} className="my-4">
            <Card.Body>
                <Card.Title className="px-2 mb-4" ><h4>Personal Settings</h4></Card.Title>
                <Container  className="px-2">
                    <Row>
                        <Col md={6} className="px-4">
                            <Row>
                                <Card.Text className="px-0 mb-1">
                                    <h6>Profile picture</h6>
                                </Card.Text>
                            </Row>
                            <Row>
                                <Button className="container-fluid rounded text-center py-2 profileButton">
                                    Upload your profile picture
                                </Button>
                            </Row>
                        </Col>
                        <Col md={6} className="px-4">
                            <Row>
                                <Card.Text className="px-0 mb-1">
                                    <h6>Profile header</h6>
                                </Card.Text>
                            </Row>
                            <Row>
                                <Button className="container-fluid rounded text-center py-2 profileButton">
                                    Upload a header image
                                </Button>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <Container className="px-2">
                <Form onSubmit={handleSubmit}>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email address"
                                className="my-3 mt-5"
                            >
                                <Form.Control type="email" value={userProf.email} onChange={handleChange} name="email" className="register-input" />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingInput" label="Username" className="my-3">
                                <Form.Control disabled type="text" value={userProf.username} onChange={handleChange} name="username" className="register-input"/>
                            </FloatingLabel>
                            <Container fluid className="mx-0 px-0">
                                <Row className="mx-0 px-0">
                                    <Col md={6} className="mx-0 px-0">
                                        <FloatingLabel controlId="floatingInput" label="First Name">
                                            <Form.Control type="text" value={userProf.name} onChange={handleChange} name="name" className="register-input"/>
                                        </FloatingLabel>
                                    </Col>
                                    <Col md={6} className="mx-0 px-0">
                                        <FloatingLabel controlId="floatingInput" label="Last Name">
                                            <Form.Control type="text" value={userProf.surname} onChange={handleChange} name="surname" className="register-input"/>
                                        </FloatingLabel> 
                                    </Col>
                                </Row>
                                <Row className="mx-0 px-0">
                                    <Col md={6} className="mx-0 px-0">
                                    </Col>
                                    <Col md={6} className="mx-0 px-0">
                                    <Button type="submit" className="container-fluid rounded-pill text-center my-4 py-2 registerButton">
                                        <h3>Save Changes</h3>
                                    </Button>
                                    </Col>
                                </Row>
                            </Container>
                            
                        </Form>
                        </Container>
            </Card.Body>
        </Card>
    );
  }

  export default connect(mapStateToProps, mapDispatchToProps)(PersonalSettings)