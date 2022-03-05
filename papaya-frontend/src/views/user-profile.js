import NavBar from "../components/navbar-strip";
import SideMenu from "../components/side-menu";
import { connect, useDispatch } from "react-redux";
import { openNavAction } from "../redux/actions";
import { Container, Row, Col } from "react-bootstrap";
import { Redirect } from "react-router";
import ProfileContainer from "../components/personal-profile/index";
import { refreshUserAction } from "../redux/actions/auth";
import { useEffect } from "react";


const mapStateToProps = (state) => ({
  sideMenuState: state.appState.sideMenu,
  isLoggedIn: state.user.isLoggedIn,
  userProf: state.user,
  userFound: state.user.userFound,
});

const mapDispatchToProps = (dispatch) => ({
  setMenuState: (action) => {
    dispatch(openNavAction(action));
  },
  refreshUser: (userName) => {
    dispatch(refreshUserAction(userName))
  }
});

// const usePageLocation = () => {
//     const pagelocation = useLocation()
//     const location = pagelocation.pathname
//     console.log(location)

//     return location
// }

const ProfilePage = ({ sideMenuState, setMenuState, isLoggedIn, refreshUser, userProf, userFound }) => {
  // let location = useLocation()

  const dispatch = useDispatch();

  useEffect(() => {
    if (userFound) {
    dispatch(refreshUserAction(userProf.username))
  }
  }, [dispatch, userFound, userProf.username])

  if (!isLoggedIn) {
    return <Redirect to="/login" />;
  } else {
    return (
      <Container fluid className="mx-0 px-0 profile-app">
        {/* <Row>
          <Col
             xs={12}
             sm={12}
               md={sideMenuState ? 9 : 12}> */}
          <NavBar colour="rgba(255, 255, 255, 0)" />
          {/* </Col>
        </Row> */}
        {/* <NavBar colour="rgba(255, 255, 255, 0)" /> */}
        <Container fluid id="profile-app-body" className="px-0 mx-0 full-view-height">
          <Row className="full-height mx-0 px-0">
            <Col
             xs={12}
             sm={12}
               md={sideMenuState ? 9 : 12}
               // className="px-0 mx-0 scrollNav"
               id="profile-app-main"
               className={`px-0 mx-0 scrollNav ${sideMenuState ? "mainpageSmall" : " "}`}
             >
              <Container
                fluid
                className="px-0 mx-0"
                style={{ maxWidth: "100vw" }}
              >
                <ProfileContainer />
                {/* <Footer/> */}
              </Container>
            </Col>
            {sideMenuState && <Col xs={12} sm={12} md={3} className="px-0 onTop">
             <SideMenu />
          </Col>
            }
          </Row>
        </Container>
      </Container>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
