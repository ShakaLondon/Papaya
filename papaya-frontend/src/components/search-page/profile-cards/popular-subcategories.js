import { faSearch, faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Card, Button, Container, Row, Col, Form, FloatingLabel, FormControl, ProgressBar, InputGroup } from 'react-bootstrap'
import { connect } from 'react-redux';
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


const PopularSubcat = ({
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



    //   useEffect(() => {

      
    //     score.reviewNo?.map((reviewNum) => {
    //       const number = reviewNum
    //      const valueArray = [ "one", "two", "three", "four", "five"]
    //      const valueText = valueArray[number._id-1]
    //      console.log(valueText)
 
    //     })
    //    }, [score]);


    return (
        <Card style={{ width: '100%', border: "none" }} className="my-4 pt-4">
            <Card.Body>
                {/* <Card.Title > */}
                <h5 className="px-2 mb-3">Popular Subcategories</h5>
                {/* </Card.Title> */}
                {/* <hr className="mx-2"/> */}

                <Container className="px-1 py-0">
                    {/* {(category?.subCategories.length > 0) && category?.subCategories.map((subCat) => { */}

                            <CatKeywords keywords={category?.subCategories}/>
                     {/* })} */}
                </Container>

                
                  
                <Container className="px-2 py-3">
         
                        </Container>
            </Card.Body>
        </Card>
    );
  }

  export default connect(mapStateToProps, mapDispatchToProps)(PopularSubcat)