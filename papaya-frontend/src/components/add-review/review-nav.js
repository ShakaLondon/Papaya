import {
  faCircle,
  faDotCircle,
  faStar,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Nav,
  Container,
  Navbar,
  NavDropdown,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import StarRating from "../rating-component/index";
import WebsiteContainer from "../business-profile/profile-cards/website-card";
import { useEffect, useState } from "react";
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

const ReviewNav = ({
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
  // const [colorChange, setColorchange] = useState(false);

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
      expand="lg"
      className="py-0 px-0"
      id="review-header"
      fixed="top"
    >
      <div
        className={`overlay container-fluid ${
          colorChangeState ? "py-1" : "py-4"
        }`}
      >
        <Container
          fluid
          className="d-flex fullopacity"
          id="review-container"
          style={{ paddingTop: `${colorChangeState ? "110px" : "160px"}` }}
        >
          <Navbar.Brand>
            <img
              src={profile.avatar?.avatar}
              alt="User Avatar"
              className="rounded-circle"
              style={{ width: "4rem", height: "4rem", objectFit: "cover" }}
            />
          </Navbar.Brand>
          <Navbar.Brand>
            <Container fluid className="px-2">
              <h3 className="text-white mb-0">{profile.businessName}</h3>
            </Container>

            <Container fluid className="d-flex my-1 px-2">
              {/* <StarRating currentRating={4.5} numberOfStars={5}  fontSize={"1em"}/> */}
              <h5 className="text-white mb-0">{profile.website}</h5>
            </Container>
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto d-inline-flex align-items-end">
                    <Container className="px-0">
                        <Button className="mx-3 profileButton">{`www.example.co.uk`}</Button>
                        <Button className="ms-auto profileButton">{`Write a Review`}</Button> */}
          {/* <WebsiteContainer website={`www.example.co.uk`}/> */}
          {/* </Container> */}
          {/* <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link> */}
          {/* </Nav>
                </Navbar.Collapse> */}
        </Container>
      </div>
    </Navbar>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewNav);
