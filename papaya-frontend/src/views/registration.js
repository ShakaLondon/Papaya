import NavBar from '../components/navbar-strip'
import SideMenu from '../components/side-menu'
import { connect } from 'react-redux'
import { openNavAction } from '../redux/actions'
import { Container, Row, Col, } from 'react-bootstrap'
import { useLocation } from 'react-router'
import LoginContainer from '../components/register/login'
import SignUpContainer from '../components/register/signup'
import { useEffect } from 'react'
import Footer from '../components/footer'

const mapStateToProps = (state) => ({ sideMenuState: state.appState.sideMenu })
const mapDispatchToProps = (dispatch) => ({
  setMenuState: (action) => {
    dispatch(openNavAction(action))
  },
})

// const usePageLocation = () => {
//     const pagelocation = useLocation()
//     const location = pagelocation.pathname
//     console.log(location)

//     return location
// }

const RegisterPage = ({
    sideMenuState,
    setMenuState,
}) => {


  let location = useLocation()
  


  useEffect(() => {
    console.log(location)
    return function() {
      location = null
    };
  });

  
  


    return (
    
        <Container fluid id="register-app" className="mx-0">
            <NavBar/>
            <Container fluid id="register-app-body" className="px-0 mx-0">
              <Row className="full-height">
                <Col md={sideMenuState? 9 : 12} className="px-0">
                  {/* <Container className="px-0 flex-row"> */}
                    {(location.pathname === "/login") ? <LoginContainer/> : <SignUpContainer/>}
                    {/* <Footer/> */}
                  {/* </Container> */}
                </Col>
                <Col md={3} className="px-0">
                  {sideMenuState && <SideMenu/>}
                </Col>
              </Row>
            </Container>
            
        </Container>

    );

  }

  export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage)
