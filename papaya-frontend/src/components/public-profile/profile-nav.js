import { faStar, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { Nav, Container, Navbar, NavDropdown, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { colorChangeAction, openNavAction } from "../../redux/actions";
import {
  updateUserAction,
  updateUserCoverAction,
  updateUserImageAction,
} from "../../redux/actions/user";

const mapStateToProps = (state) => ({
  sideMenuState: state.appState.sideMenu,
  userProf: state.user,
  colorChangeState: state.appState.colorChange,
});

const mapDispatchToProps = (dispatch) => ({
  setMenuState: (action) => {
    dispatch(openNavAction(action));
  },

  updateUserProf: (action) => {
    dispatch(updateUserAction(action));
  },

  updateUserImage: (action) => {
    dispatch(updateUserImageAction(action));
  },

  updateUserCover: (action) => {
    dispatch(updateUserCoverAction(action));
  },

  colorChange: (action) => dispatch(colorChangeAction(action)),
});

const PublicProfileNav = ({
  sideMenuState,
  setMenuState,
  userProf,
  updateUserProf,
  updateUserImage,
  updateUserCover,
  profile,
  score,
  loading,
  colorChange,
  colorChangeState,
}) => {
  useEffect(() => {
    const appPages = document.getElementsByClassName("scrollNav");

    console.log(appPages);

    const elemArray = Array.from(appPages);

    elemArray.forEach((page) => {
      page.addEventListener("scroll", () => {
        console.log(page.scrollTop);

        changeNavbarColor(page.scrollTop);
      });
    });
    return () => {
      // window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const changeNavbarColor = (scroll) => {
    if (scroll >= 30) {
      colorChange(true);
    } else {
      colorChange(false);
    }
  };

  return (
    <Navbar 
    bg="light" 
    // expand="lg" 
    className="py-0 px-0" 
    id="profile-header"
    fixed="top">
            {!loading && (
        <div
          className={`overlay container-fluid ${
            colorChangeState ? "py-" : "py-3"
          }`}
        >
        <Container
          fluid
          className="d-flex fullopacity align-items-center"
          id="profile-container"
          style={{ paddingTop: `${colorChangeState ? "110px" : "140px"}` }}
        >
          <Navbar.Brand>
            <img
              src={profile.avatar?.avatar}
              alt="User Avatar"
              className="rounded-circle my-2"
              style={{
                width: `${colorChangeState ? "4rem" : "10rem"}`,
                  height: `${colorChangeState ? "4rem" : "10rem"}`,
                  objectFit: "cover",
              }}
              id="profile-avatar"
            />
          </Navbar.Brand>
          <Navbar.Brand>
            <Container fluid className="px-0">
            {colorChangeState ? (
                  <h4 className="text-white mb-0 px-2">{profile?.name}</h4>
                ) : (
                  <h1 className="text-white mb-0 px-3">{profile?.name}</h1>
                )}
              
            </Container>
            <Container fluid className="px-0">
            {colorChangeState ? (
                  <h6 className="text-white mb-0 px-2">{`@${profile?.username}`}</h6>
                ) : (
                  <h4 className="text-white mb-0 px-3">{`@${profile?.username}`}</h4>
                )}
            </Container>
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Container id="user-stats" className={`${colorChangeState? "px-4" : "px-0"}`}>
                <Row>
                  <Col xs={6} sm={6} md={6}>
                    <Container className="px-4">
                      <Row>
                        <Col md={12} xs={12} sm={12} className="d-flex justify-content-center">
                          <h1 className="profile-nav-number">{profile.reviews?.length}</h1>
                        </Col>
                      </Row>
                      <Row className="d-flex justify-content-center">
                        <Col xs={4} sm={4} md={4} className="d-flex align-items-center justify-content-center">
                          <FontAwesomeIcon icon={faStar} />
                        </Col>
                        <Col md={8}  sm={8} xs={8} className="d-flex align-items-center  px-0">
                          <h6 className="mb-0 profile-user-stats">reviews</h6>
                        </Col>
                      </Row>
                    </Container>
                  </Col>
                  <Col md={6} xs={6} sm={6}>
                    <Container className="px-4">
                      <Row>
                        <Col xs={12} sm={12} md={12} className="d-flex justify-content-center">
                          <h1 className="profile-nav-number">0</h1>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={4} sm={4} md={4} className="d-flex align-items-center justify-content-center">
                          <FontAwesomeIcon icon={faThumbsUp} />
                        </Col>
                        <Col md={8} sm={8} xs={8} className="d-flex align-items-center px-0">
                          <h6 className="mb-0 profile-user-stats">useful</h6>
                        </Col>
                      </Row>
                    </Container>
                  </Col>
                </Row>
              </Container>
              {/* <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </div>
      )}
    </Navbar>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PublicProfileNav);
