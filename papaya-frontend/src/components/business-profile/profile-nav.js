import { faCircle, faDotCircle, faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Nav, Container, Navbar, NavDropdown, Row, Col, Button } from 'react-bootstrap'
import userAuth from '../../services/user/user-auth';
import StarRating from '../rating-component/index.js';
import WebsiteContainer from "./profile-cards/website-card.js"
import { connect } from 'react-redux';
import { openNavAction,  } from '../../redux/actions';
import { updateUserAction, updateUserImageAction, updateUserCoverAction } from '../../redux/actions/user'
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';




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


const BusinessNav = ({
    sideMenuState,
    setMenuState,
    userProf,
    updateUserProf,
    updateUserImage,
    updateUserCover,
    profile,
    currentRating
}) => { 


    const history = useHistory()
    const [colorChange, setColorchange] = useState(false);



    useEffect(() => {
      const appPages = document.getElementsByClassName('scrollNav')
  
      console.log(appPages)
  
      const elemArray = Array.from(appPages)
  
      elemArray.forEach(page => {
      page.addEventListener('scroll', () => {
        console.log(page.scrollTop);
    
        changeNavbarColor(page.scrollTop)
      });
    });
    return () => {
        // window.removeEventListener("scroll", listenScrollEvent);
      };
    }, []);




  
  
    const changeNavbarColor = (scroll) =>{
       if(scroll >= 30){
         setColorchange(true);
       }
       else{
         setColorchange(false);
       }
    };

    // console.log(companyReviews)

    const selected = (value) => {
        // console.log(value + "selected")
        // setWriteReview({ ...writeReview, stars: value})
      }


    return (
        <Navbar bg="light" expand="lg" className="px-0 py-0" id="bus-profile-header" fixed="top">
            <div className={`overlay container-fluid ${colorChange ? "py-1" : "py-4"}`}>
            <Container fluid className="d-flex fullopacity" id="profile-container"  style={{ paddingTop: `${ colorChange ? '110px' : '150px' }`}}>

                <Navbar.Brand><img src={profile.avatar?.avatar} alt="User Avatar" className="rounded-circle" style={{ width: `${ colorChange ? '4rem' : '10rem' }`, height: `${ colorChange ? '4rem' : '10rem' }`, objectFit: "cover" }}/></Navbar.Brand>
                <Navbar.Brand>
                    <Container fluid>
                        { colorChange ? <h3 className="text-white mb-0">{profile.businessName}</h3> : <h1 className="text-white mb-0">{profile.businessName}</h1>}
                    </Container>
                    {/* <Container fluid>
                        <h6 className="text-white">{`@${profile.username}`}</h6>
                    </Container> */}
                    {!colorChange && 
                    <Container fluid className="d-flex align-items-center">
                        <h6 className="text-white mb-0">{`Reviews`}</h6><h6 className="text-white mb-0 ms-2">{`${profile.reviewIDs?.length}`}</h6>
                        <FontAwesomeIcon icon={faCircle} style={{ width: "5px", height: "5px"}} className="text-white mx-2"/>
                        <h6 className="text-white mb-0 text-bold">{currentRating > 4 ? "Excellent" :
                        currentRating > 3 ? "Great" :
                        currentRating > 2 ? "Average" :
                        currentRating > 1 ? "Poor" :
                        "Bad"}</h6>
                    </Container>}
                    <Container fluid className={`d-flex align-items-center ${colorChange ? "my-1" : "my-2 mt-4"}`}>
                        <StarRating current={3} fontSize={colorChange? "1.5rem" : "3rem"}   changeable={false} selected={selected}/>
                        <h6 className="text-white mb-0">{currentRating}</h6>
                    </Container>
                    
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    {!colorChange? <Container>
                        <WebsiteContainer website={profile.website}/>
                    </Container> :
                    <Container className="px-0">
                        <Button className="btn-light">
                        <a href={`https://${profile.website}`}>
                            {profile.website}
                            </a>
                        </Button>
                        <Button className="profileButton ms-2" onClick={() => history.push(`/review/${profile.website.replace("www.", "")}/new`)}>
                            Write a Review
                        </Button>
                    </Container>}
                    {/* <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link> */}
                </Nav>
                </Navbar.Collapse>
            </Container>
            </div>
            </Navbar>
    );
  }

  export default connect(mapStateToProps, mapDispatchToProps)(BusinessNav)