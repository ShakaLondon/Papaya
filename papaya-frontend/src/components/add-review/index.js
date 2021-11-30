import { Button, Container, Form, FormControl, FloatingLabel, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Footer from '../footer';
import { useEffect, useState } from 'react';
import { registerAction } from '../../redux/actions/auth';
import { connect } from 'react-redux';
import { Redirect, useLocation } from 'react-router';
import AddReviewContainer from './review-form';
import ReviewNav from './review-nav';
import ReviewMain from './review-main';

const mapStateToProps = (state) => ({
    error: state.appState.error,
    loading: state.appState.loading,
    isLoggedIn: state.user.isLoggedIn,
    userFound: state.user.userFound,
    userProf: state.user
  });
  
  const mapDispatchToProps = (dispatch) => ({
    //functions
    register: (userObj) => dispatch(registerAction(userObj)),
  });

const ReviewContainer = ({
    login,
    loading,
    error,
    isLoggedIn,
    userFound, 
    register,
    userProf
}) => {

  const locationUrl = useLocation();
    
  console.log(locationUrl)


  const routePath = locationUrl.pathname
  console.log(routePath)

  const businessNamePa = routePath.replace("/review/", 'www.')
  console.log(businessNamePa)

  const businessNamePath = businessNamePa.replace("/new", '')
  console.log(businessNamePath)

const [searchRequest, setSearchRequest] = useState(businessNamePath);
const [searchResult, setSearchResult] = useState({});


useEffect(() => {
    const url = `http://localhost:3005/business/${searchRequest}`
    const options = {
        method: 'GET',
        // headers: {
        //     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGIwZGZiYmRjMTQ1ODAwMTVlNGFlZTUiLCJpYXQiOjE2MzE3NzI3MTIsImV4cCI6MTYzMjk4MjMxMn0.2YWhQrKLUrKnO_spK_yPMr-orqdslBjHVr-zMEUyYPk'
        // }
    }
    fetch(`${url}`, options)
    .then(res => res.json())
    .then((business) => {
        const busFound = business
        console.log(busFound)
        setSearchResult(busFound[0])
        // console.log(searchResult)
    })
    .catch((error) => {console.log(error)})
}, [])

        return (
    <>
        <Container fluid id="review-app-component" className="mx-0 d-flex justify-content-center px-0">
            <Container fluid id="review-app" className="flex-row mx-0 px-0">
                
                <Row className="mx-0 px-0">
                    <ReviewNav user={userProf} profile={searchResult}/>
                </Row>
                <Row className="mx-0 px-0" id="review-main-cont">
                    <ReviewMain user={userProf} profile={searchResult}/>
                </Row>
            </Container>
        </Container>
        <Footer/>
        </>

    );
    // }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(ReviewContainer);