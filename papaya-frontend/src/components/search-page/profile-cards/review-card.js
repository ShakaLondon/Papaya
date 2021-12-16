import { faFlag as faFlagFill, faMapMarkerAlt, faPencilAlt, faSearch, faShareAlt, faStar, faThumbsUp as faThumbsUpFill } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp, faFlag } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Card, Button, Container, Row, Col, Form, FloatingLabel, FormControl, ProgressBar, InputGroup } from 'react-bootstrap'
import { connect } from 'react-redux';
import { openNavAction,  } from '../../../redux/actions';
import { updateUserAction, updateUserImageAction, updateUserCoverAction } from '../../../redux/actions/user'
import StarRating from '../../rating-component';
import FilesUploadComponent from '../upload';
import Keywords from './keywords.js'
import moment from 'moment'




const mapStateToProps = (state) => ({ 
    sideMenuState: state.appState.sideMenu,
    userProf: state.user
})

const mapDispatchToProps = (dispatch) => ({
  setMenuState: (action) => {
    dispatch(openNavAction(action))
  },

  updateUserProf: (action) => {
    dispatch(updateUserAction(action))
  },

  updateUserImage: (action) => {
    dispatch(updateUserImageAction(action))
  },

  updateUserCover: (action) => {
      dispatch(updateUserCoverAction(action))
  }
})


const ReviewCard = (props) => { 

      const [percentage, setPercentage] = useState(30)

      const selected = (value) => {
        // console.log(value + "selected")
        // setWriteReview({ ...writeReview, stars: value})
      }


    return (

        <div className="">
      {props.profile.reviewIDs?.map((review) => (
        <Card style={{ width: '100%' }} className="my-4 pt-4 profileCard" key={review._id}>
            <Card.Body>
            <Container  className="px-2">
                    <Row>
                        <Col md={2} className="">
                            <img 
                            src={review.userID.avatar.avatar} 
                            alt="User Avatar" className="rounded-circle" style={{ width: "3rem", height: "3rem", objectFit: "cover" }}/>
                        </Col>
                        <Col md={10} className="d-inline-flex px-0 align-items-center">
                            <Container className="px-0">
                            <Row>
                                <Col md={12} className="px-0">
                                <h5 className="px-0 mb-0">{`${review.userID.name} ${review.userID.surname}`}</h5>
                                </Col>
                                
                            </Row>
                            <Row>
                            <Col md={12} className="py-1 px-0 d-inline-flex">
                                <div className="d-inline-flex px-0 align-items-center">
                                    <FontAwesomeIcon icon={faPencilAlt} className="fa-xs"/>
                                    <Card.Text className="px-2 mb-0">{`${review.userID.reviews.length} reviews`}</Card.Text>
                                </div>
                                <div className="d-inline-flex px-2 align-items-center">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="fa-xs"/>
                                    <Card.Text className="px-2 mb-0">Write a review</Card.Text>
                                </div>
                            
                                </Col>
                                
                            </Row>
                            </Container>
                            {/* <FontAwesomeIcon icon={faChevronRight}/> */}
                        </Col>
                    
                    </Row>
                </Container>
                <hr className="mx-2"/>
                <Container  className="px-2 py-2">
                
                    
                    <Row>
                        <Col md={6} className="">
                            <Row>
                            <StarRating current={review.rating} numberOfStars={0}   changeable={false} fontSize={"1.5rem"} selected={selected}/>
                            </Row>
                        </Col>
                        <Col md={6} className="d-flex justify-content-end">
                            <Row>
                                <h6 className="px-2 mb-0">{moment(review.createdAt).fromNow()}</h6>
                            </Row>
                        </Col>
                        </Row>
                        </Container>

                
                
                <Card.Title className="px-2 py-2 mb-0">
                    {review.title}
                </Card.Title>
                <Card.Text className="px-2 py-2">
                    {review.comment}
                </Card.Text>
                <hr className="mx-2" />

                <Container  className="px-2 py-2">
                
                    
                    <Row>
                        <Col md={6} className="d-inline-flex">
                           <div className="d-inline-flex align-items-center">
                              <FontAwesomeIcon icon={faThumbsUp} className=""/>
                            <h6 className="px-2 mb-0">Useful</h6> 
                           </div>
                           <div className="d-inline-flex align-items-center px-2">
                              <FontAwesomeIcon icon={faShareAlt} className=""/>
                            <h6 className="px-2 mb-0">Share</h6> 
                           </div>
                            
                            
                        </Col>
                        <Col md={6} className="d-flex justify-content-end">
                            
                                <FontAwesomeIcon icon={faFlag}/>
                            
                        </Col>
                        </Row>
                        </Container>

            </Card.Body>
        </Card>
            ))}
            </div>
    );
  }

  export default connect(mapStateToProps, mapDispatchToProps)(ReviewCard)