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


const ProfileDelete = ({
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
        <Card style={{ width: '100%' }}>
            <Card.Body>
                <Card.Title><h4>Download your profile</h4></Card.Title>
                                <Card.Text>
                                    <h6>Download your profile and your reviews</h6>
                                </Card.Text>
                                <Button>
                                    Download information
                                </Button>
            </Card.Body>
        </Card>
    );
  }

  export default connect(mapStateToProps, mapDispatchToProps)(ProfileDelete)