import { faSearch, faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Card, Button, Container, Row, Col, Form, FloatingLabel, FormControl, ProgressBar, InputGroup } from 'react-bootstrap'
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { openNavAction,  } from '../../../redux/actions';
import { updateUserAction, updateUserImageAction, updateUserCoverAction } from '../../../redux/actions/user'
import FilesUploadComponent from '../upload';
import CatKeywords from './keywords.js'




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


const CategorySideBar = ({
    sideMenuState,
    setMenuState,
    userProf,
    updateUserProf,
    updateUserImage,
    updateUserCover,
    loading,
    score,
    category
}) => { 

    //   const [percentage, setPercentage] = useState(30)
    //   const [reviewScore, setReviewScore] = useState({
    //     businessScore: score.avgTotal[0]?.average,
    //     totalReviews: score.avgTotal[0]?.count,
    //     one: {
    //       reviews: [],
    //       percentage: 0
    //     },
    //     two: {
    //       reviews: [],
    //       percentage: 0
    //     },
    //     three: {
    //       reviews: [],
    //       percentage: 0
    //     },
    //     four: {
    //       reviews: [],
    //       percentage: 0
    //     },
    //     five: {
    //       reviews: [],
    //       percentage: 0
    //     }
    //   })
    //   const [currentRating, setCurrentRating] = useState(0)

    const history = useHistory()



    //   useEffect(() => {

      
    //     score.reviewNo?.map((reviewNum) => {
    //       const number = reviewNum
    //      const valueArray = [ "one", "two", "three", "four", "five"]
    //      const valueText = valueArray[number._id-1]
    //      console.log(valueText)
 
    //     })
    //    }, [score]);


    return (
      <Card style={{ width: '100%' }} className="my-4 py-2 profileCard">
          <Card.Body className="">
              <Container className="px-2">
                  <Row>
                      <h4>View Category</h4>
                  </Row>

                  {category?.map((cat, idx) => 
                  {
                    
                    return (<Row className="d-flex py-0" key={cat._id}>
                      <Col md={12} className="d-flex align-items-center pe-4 py-2">
                          {/* <FontAwesomeIcon icon={faArrowCircleLeft} className="fa-sm align-self-center fa-regular"/> */}
                          <h6  onClick={() => history.push(`/search/category/${cat.name}`)} className="px-0 mb-0">{cat.name}</h6>
                      </Col>
                      {/* <Col md={10} className="d-flex align-items-center px-0"> */}
                          {/* <FontAwesomeIcon icon={faArrowCircleLeft} className=""/> */}
                          {/* <h6 className="mb-0 align-self-center smallTxt" 
                          // onClick={() => )}
                          >{category?.parentCategory[0].name}</h6> */}
                      {/* </Col> */}
                      
                  </Row>)}
                  
                  )}
              
                  
              </Container>
          </Card.Body>
      </Card>
  );
  }

  export default connect(mapStateToProps, mapDispatchToProps)(CategorySideBar)