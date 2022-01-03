import { faStar, faThumbsUp, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Card, Button, Container, Row, Col, Form, FloatingLabel, FormControl, InputGroup, FormGroup } from 'react-bootstrap'
import { connect } from 'react-redux';
import { useLocation } from 'react-router';
import { openNavAction,  } from '../../redux/actions';
import { updateUserAction, updateUserImageAction, updateUserCoverAction } from '../../redux/actions/user'
import StarRating from '../rating-component/index.js';
import FilesUploadComponent from './upload';
import UserData from "../../services/user/user-data.js"



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


const ReviewCard = ({
    sideMenuState,
    setMenuState,
    userProf,
    updateUserProf,
    updateUserImage,
    updateUserCover,
    reDirect
}) => { 

  const locationUrl = useLocation();
    
      console.log(locationUrl)
  
      const routePath = locationUrl.search
      console.log(routePath)

      const stars = new URLSearchParams(routePath).get('stars');
      console.log(stars)

      const starsNum = parseInt(stars)

      const splitPath = locationUrl.pathname.split('/')
      console.log(splitPath)

      const website = splitPath[2]

      

      const [writeReview, setWriteReview] = useState({
        comment: "",
        title: "",
        rating: starsNum,
        orderRef: "",
        website: website, 
        userID: userProf._id
      })
  
  
  const handleChange = (e) => {
        console.log(writeReview)
        let name = e.target.name
        setWriteReview({ ...writeReview, [name]: e.target.value});
      }

      const [formData, setFormData] = useState({
        image: null
      })

      const [coverFormData, setCoverFormData] = useState({
        cover: null
      })


    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const url = `http://localhost:3005/reviews/${website}`
    //         const options = {
    //             method: 'POST',
    //             body: JSON.stringify(writeReview),
    //             headers: {
    //   'Accept': 'application/json',
    //   'Content-Type': 'application/json'
    // }
    //         }
    //         fetch(`${url}`, options)
    //         .then(res => res.json())
    //         .then((user) => {
    //             const userFound = user
    //             console.log(userFound)
    //             // setSearchResult(user)
    //             // console.log(searchResult)
    //         })
    //         .catch((error) => {console.log(error)})
    //   }

      const handleSubmit = (e) => {
        e.preventDefault();
    //     const url = `http://localhost:3005/reviews/${website}`
    //         const options = {
    //             method: 'POST',
    //             body: JSON.stringify(writeReview),
    //             headers: {
    //   'Accept': 'application/json',
    //   'Content-Type': 'application/json'
    // }
    //         }
            UserData.addReview(writeReview.website, writeReview)
            // .then(res => res.json())
            .then((review) => {
                // const userFound = user
                console.log(review)
                // setRedirect(true)
                // setSearchResult(user)
                // console.log(searchResult)
            })
            .catch((error) => {console.log(error)})
      }

      // const handleSubmitImage = (e) => {
      //   e.preventDefault();
      //   updateUserImage(formData.image)
      // }

      // const handleSubmitCover = (e) => {
      //   e.preventDefault();
      //   updateUserCover(coverFormData.cover)
      // }

      // const addFile = (e) => {
    
      //   // event to update state when form inputs change
      //   console.log(e.target.files)
      //   const files = e.target.files
      //   const fd = new FormData();
      //   fd.append('avatar', files[0]);
    
      //   console.log(fd)
    
      //   setFormData({ image: fd });
      // }

      // const addFileCover = (e) => {
    
      //   // event to update state when form inputs change
      //   console.log(e.target.files)
      //   const files = e.target.files
      //   const fd = new FormData();
      //   fd.append('cover', files[0]);
    
      //   console.log(fd)
    
      //   setCoverFormData({ cover: fd });
      // }

      const selected = (value) => {
        console.log(value + "selected")
        setWriteReview({ ...writeReview, stars: value})
      }

      

    return (
        <Card style={{ width: '100%' }} className="my-4 py-4 profileCard">
            <Card.Body>
                {/* <Card.Title > */}
                    
                {/* </Card.Title> */}
                <Container  className="px-3">
                    <Row>
                        <Col md={12} className="px-2">
                            <Row>
                                <h5 className="mb-3">Rate your recent experience</h5>
                                <StarRating current={stars} numberOfStars={0}   changeable={true} fontSize={"3rem"} selected={(value) => setWriteReview({ ...writeReview, rating: value})}/>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <Container className="px-2">
                    {/* <Card.Text> */}
                    {/* <h5 className="my-3">Tell us about your experience</h5> */}
                                {/* </Card.Text> */}
                <Form onSubmit={handleSubmit}>

                <Form.Group className="my-3 d-block" controlId="exampleForm.ControlTextarea1">
                    <Form.Label><h5 className="my-3 flex-row">Tell us about your experience</h5></Form.Label>
                    
                    <Form.Control as="textarea" rows={5} aria-label="`Write Review"
                    name="comment"
                    onChange={handleChange}
                    aria-describedby="write-review"
                    placeholder="This is where you write your review. Explain what happened and leave ut the offensive words. Keeep your feedback honest, helpful and constructive."/>
                    <Form.Text className="text-muted">
                    How to write a useful review
                        </Form.Text>
                </Form.Group>

                <Form.Group className="my-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label><h5 className="my-3">Give your review a title.</h5></Form.Label>
                <InputGroup className="mb-3">
                    <FormControl
                    name="title"
                    onChange={handleChange}
                    placeholder="Write the title of your review here."
                    aria-label="Review Title"
                    aria-describedby="review-title"
                    />
                    <InputGroup.Text id="basic-addon2"><FontAwesomeIcon icon={faPencilAlt}/></InputGroup.Text>
                </InputGroup>
                </Form.Group>

                <Form.Group className="my-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label><h5 className="my-3">Enter Booking Number OR Post code (optional)</h5></Form.Label>
                    <Form.Control type="text" aria-label="`Enter Order Information"
                    name="orderRef"
                    onChange={handleChange}
                    aria-describedby="order-information"
                    placeholder="Enter Booking Number OR Post code here."/>
               <Form.Text className="text-muted">
               Include your Trailfinders Booking Number OR Post code so it’s easier for Trailfinders to identify you and reply to your review.
                        </Form.Text>
                        </Form.Group>

                        <Form.Check 
        type={'checkbox'}
        id={`default-checkbox`}
        label={`I confirm this review is about my own genuine experience. I am eligible to leave this review, and have not been offered any incentive or payment to leave a review for this company.`}
        className="py-3"
      />

      <Button className="w-100 my-3 profileButton" type="submit" >Post Review</Button>



                          
                            
                        </Form>
                        </Container>
            </Card.Body>
        </Card>
    );
  }

  export default connect(mapStateToProps, mapDispatchToProps)(ReviewCard)