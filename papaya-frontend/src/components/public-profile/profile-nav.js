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
    <Navbar bg="light" expand="lg" className="py-0 px-0" id="profile-header">
      <div className={`overlay container-fluid py-5`}>
        <Container
          fluid
          className="d-flex fullopacity"
          id="profile-container"
          style={{ paddingTop: `${colorChangeState ? "100px" : "140px"}` }}
        >
          <Navbar.Brand>
            <img
              src={profile.avatar?.avatar}
              alt="User Avatar"
              className="rounded-circle"
              style={{ width: "6rem", height: "6rem", objectFit: "cover" }}
            />
          </Navbar.Brand>
          <Navbar.Brand>
            <Container fluid>
              <h1 className="text-white">{profile?.name}</h1>
            </Container>
            <Container fluid>
              <h6 className="text-white">{`@${profile?.username}`}</h6>
            </Container>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Container>
                <Row>
                  <Col md={6}>
                    <Container>
                      <Row>
                        <Col md={12} className="d-flex justify-content-center">
                          <h1>{profile.reviews?.length}</h1>
                        </Col>
                      </Row>
                      <Row className="d-flex justify-content-center">
                        <Col md={4} className="d-flex align-items-center">
                          <FontAwesomeIcon icon={faStar} />
                        </Col>
                        <Col md={8} className="d-flex align-items-center">
                          <h6 className="mb-0">reviews</h6>
                        </Col>
                      </Row>
                    </Container>
                  </Col>
                  <Col md={6}>
                    <Container>
                      <Row>
                        <Col md={12} className="d-flex justify-content-center">
                          <h1>0</h1>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={4} className="d-flex align-items-center">
                          <FontAwesomeIcon icon={faThumbsUp} />
                        </Col>
                        <Col md={8} className="d-flex align-items-center">
                          <h6 className="mb-0">useful</h6>
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
    </Navbar>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PublicProfileNav);
