import NavBar from "../components/navbar-strip";
import SideMenu from "../components/side-menu";
import { connect } from "react-redux";
import { openNavAction } from "../redux/actions";
import { Container, Row, Col } from "react-bootstrap";
import { Redirect, useLocation } from "react-router";
import BusinessContainer from "../components/business-profile/index";
import { useEffect } from "react";
import Footer from "../components/footer";

const mapStateToProps = (state) => ({
  sideMenuState: state.appState.sideMenu,
  isLoggedIn: state.user.isLoggedIn,
});
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

const BusinessPage = ({ sideMenuState, setMenuState, isLoggedIn }) => {
  // let location = useLocation()

  // useEffect(() => {
  //   console.log(location)
  //   return function() {
  //     location = null
  //   };
  // });

  //   if (!isLoggedIn) {
  //     return <Redirect to='/main' />
  // } else {
  return (
    <Container fluid id="profile-app" className="mx-0 px-0">
      <NavBar colour="rgba(255, 255, 255, 0)" />
      <Container fluid id="profile-app-body" className="px-0 mx-0">
        <Row className="full-height mx-0 px-0">
          <Col
            md={sideMenuState ? 9 : 12}
            className="px-0 mx-0 scrollNav"
            id="profile-app-main"
          >
            <Container
              fluid
              className="px-0 mx-0"
              style={{ maxWidth: "100vw" }}
            >
              <BusinessContainer />
              {/* <Footer/> */}
            </Container>
          </Col>
          <Col md={3} className="px-0 onTop">
            {sideMenuState && <SideMenu />}
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

// }

export default connect(mapStateToProps, mapDispatchToProps)(BusinessPage);
