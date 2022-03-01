import NavBar from "../components/navbar-strip";
import SideMenu from "../components/side-menu";
import { connect } from "react-redux";
import { openNavAction } from "../redux/actions";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router";
import LoginContainer from "../components/register/login";
import SignUpContainer from "../components/register/signup";


const mapStateToProps = (state) => ({ sideMenuState: state.appState.sideMenu });
const mapDispatchToProps = (dispatch) => ({
  setMenuState: (action) => {
    dispatch(openNavAction(action));
  },
});

// const usePageLocation = () => {
//     const pagelocation = useLocation()
//     const location = pagelocation.pathname
//     console.log(location)

//     return location
// }

const RegisterPage = ({ sideMenuState, setMenuState }) => {
  let location = useLocation();

  // useEffect(() => {
  //   console.log(location)
  //   return function() {
  //     location = null
  //   };
  // });

  return (
    <Container fluid id="register-app" className="mx-0">
      <NavBar colour="rgba(255, 255, 255, 0)" />
      <Container fluid id="register-app-body" className="px-0 mx-0">
        <Row className="full-height">
          <Col
             xs={12}
             sm={12}
               md={sideMenuState ? 9 : 12}
            // className="px-0"
            id="register-app-main"
            className={`px-0 mx-0 scrollNav ${sideMenuState ? "mainpageSmall" : " "}`}
          >
            <Container className="px-0" style={{ maxWidth: "100vw" }}>
              {location.pathname === "/login" && <LoginContainer />}
              {location.pathname === "/register" && <SignUpContainer />}
              {/* <Footer /> */}
            </Container>
          </Col>
          {sideMenuState && <Col sm={12} md={3} className="px-0 onTop">
             <SideMenu />
          </Col>
            }
        </Row>
      </Container>
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
