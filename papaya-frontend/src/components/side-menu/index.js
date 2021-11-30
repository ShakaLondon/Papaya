import { Container, Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { loginAction, logoutAction } from "../../redux/actions/auth.js"
import { openNavAction } from "../../redux/actions/index.js"
import { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const mapStateToProps = (state) => ({
    error: state.appState.error,
    loading: state.appState.loading,
    isLoggedIn: state.user.isLoggedIn,
    userFound: state.user.userFound,
    sideMenu: state.appState.sideMenu
  });
  
  const mapDispatchToProps = (dispatch) => ({
    //functions
    login: (email, password) => dispatch(loginAction(email, password)),
    openMenu: (state) => dispatch(openNavAction(state)),
    logout: () => dispatch(logoutAction()),
  });

const SideMenu = ({
    logout,
    loading,
    error,
    isLoggedIn,
    userFound,
    sideMenu,
    openMenu

}) => {

    const node = useRef();

    const [open, setOpen] = useState(sideMenu);

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

    
    // window.addEventListener("scroll", listenScrollEvent);
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


    const handleClick = e => {
        if (node.current.contains(e.target)) {
          // inside click
          return;
        } else {
        // outside click
        openMenu(false);}
      };


      useEffect(() => {
        document.addEventListener("mousedown", handleClick);
    
        return () => {
          document.removeEventListener("mousedown", handleClick);
        };
      }, []);
    

    return (
    
        <Container fluid ref={node} className="jumbotron d-flex align-content-around justify-content-center" id="side-nav-jumbo"  >
            {/* <div id="sidenav-topbar" className="fixed-top"></div> */}
            <Row id="side-menu-row" className="py-auto">
                <Col md={12}>
                    <div id="sidenav-topbar" className="d-flex align-items-center justify-content-end pt-2 pe-4" style={{ height: `${ colorChange ? '106px' : '125px' }`,
        // height: navSize,
        transition: "all 1s" }}>
            <FontAwesomeIcon icon={faTimes} className="mx-3 my-3" id="main-nav-bar-icon-close" style={{ fontSize: `${ colorChange ? '2rem' : '3rem' }`}} onClick={() => openMenu(false)}/>
            </div>
                </Col>
                <Col md={12} className="py-4">
                    <h1 className="display-6 text-center py-2 mb-0">Categories</h1>
                    <h1 className="display-6 text-center py-2 mb-0">Companies</h1>
                    <h1 className="display-6 text-center py-2 mb-0">My Reviews</h1>
                    <Link to="/profile"><h1 className="display-6 text-center py-2 mb-0">
                        Profile
                    </h1></Link>
                </Col>
                {/* <Col md={12} className="side-text-box">
                    <h1 className="display-6 text-center py-0 mb-0">Companies</h1>
                </Col>
                <Col md={12} className="side-text-box">
                    <h1 className="display-6 text-center py-0 mb-0">My Reviews</h1>
                </Col>
                <Col md={12} className="mb-3 side-text-box">
                    <h1 className="display-6 text-center py-0 mb-0">Profile</h1>
                </Col> */}
                <Col md={12} className="px-5 side-text-button py-4">
                    { isLoggedIn ? 
                    ( <Button onClick={() => logout()} className="container-fluid rounded-pill text-center mt-2 mb-1 py-1 menuButton">
                        <h3>Logout</h3>
                    </Button> )
                    : (<>
                    <Button className="container-fluid rounded-pill text-center mt-2 mb-1 py-1 menuButton">
                        <Link to="/login"><h3>Login</h3></Link>
                    </Button>
                    <Button className="container-fluid rounded-pill text-center mb-2 mt-1 py-1 menuButton">
                        <Link to="/register"><h3>Sign Up</h3></Link>
                    </Button>
                    </>)}
                </Col>
                {/* <Col md={12} className="px-5 side-text-button" id="bottom-side">
                    <Button className="container-fluid rounded-pill text-center mb-2 mt-1 py-1 menuButton">
                        <h3>Sign Up</h3>
                    </Button>
                </Col> */}
                
            </Row>

        </Container>

    );

  }

  export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);