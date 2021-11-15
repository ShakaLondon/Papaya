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


const ProfileDownload = ({
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
      <Card style={{ width: '100%' }} className="my-4 py-4">
      <Card.Body>
      {/* <Card.Title > */}
              <h4 className="px-2 mb-4">Delete user</h4>
          {/* </Card.Title> */}
                          {/* <Card.Text> */}
                              <h6 className="px-2 mb-1">When you delete your user profile, your reviews are deleted as well and cannot be restored</h6>
                          {/* </Card.Text> */}
                          <Container fluid className="mx-0 px-0">
                          <Row className="mx-0 px-2">
                              <Col md={6}  className="ps-0 mt-2">
                                  <Button type="submit" className="container-fluid rounded text-center py-2 profileButton">
                                  Delete my profile
                                  </Button>
                              </Col>
                              <Col md={6}  className="px-0">
                              </Col>
                          </Row>

                          </Container>
                          
      </Card.Body>
  </Card>
    );
  }

  export default connect(mapStateToProps, mapDispatchToProps)(ProfileDownload)