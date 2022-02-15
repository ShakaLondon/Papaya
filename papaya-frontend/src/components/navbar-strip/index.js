import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { colorChangeAction, openNavAction } from "../../redux/actions";
import { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router";

const mapStateToProps = (state) => ({
  sideMenuState: state.appState.sideMenu,
  colorChangeState: state.appState.colorChange,
});

const mapDispatchToProps = (dispatch) => ({
  setMenuState: (action) => {
    dispatch(openNavAction(action));
  },
  colorChange: (action) => {
    dispatch(colorChangeAction(action));
  },
});

const NavBar = ({
  sideMenuState,
  setMenuState,
  colorChange,
  colorChangeState,
}) => {
  // console.log(colour)

  // const [colorChange, setColorchange] = useState(false);
  // const [navSize, setnavSize] = useState("10rem");
  // const [navColor, setnavColor] = useState("#ffd800");

  // const listenScrollEvent = () => {
  //   window.scrollY > 30 ? setnavColor("#ffd800") : setnavColor("transparent");
  //   window.scrollY > 30 ? setnavSize("5rem") : setnavSize("10rem");
  // };

  const locationUrl = useLocation();

  console.log(locationUrl);

  const routePath = locationUrl.pathname;
  console.log(routePath);

  const splitPath = routePath.split("/");
  console.log(splitPath);

  const currentPath = splitPath[1];

  // const businessNamePath = routePath.replace("/review/", 'www.')
  console.log(currentPath);

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

    // window.addEventListener("scroll", listenScrollEvent);
    return () => {
      // window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  // const profileApp = document.getElementById('profile-app-main')
  // const reviewApp = document.getElementById('review-app-component')
  // // const mainApp = document.getElementById('profile-app-component')
  // const footerApp = document.getElementById('footer-app-component')
  // const publicApp = document.getElementById('public-app-component')
  // const businessApp = document.getElementById('business-app-component')
  // const loginApp = document.getElementById('login-app-component')
  // const signupApp = document.getElementById('signup-app-component')

  const changeNavbarColor = (scroll) => {
    if (currentPath === "main") {
      if (scroll >= 280) {
        colorChange(true);
      } else {
        colorChange(false);
      }
    } else {
      if (scroll >= 30) {
        colorChange(true);
      } else {
        colorChange(false);
      }
    }
  };
  // window.addEventListener('scroll', changeNavbarColor);

  // appPages?.addEventListener('scroll', () => {
  //   console.log(appPages.scrollTop);

  //   changeNavbarColor(appPages.scrollTop)
  // });

  // console.log(appPages)

  // appPages.forEach(page => {
  //   page.addEventListener('scroll', () => {
  //     console.log(appPages.scrollTop);

  //     changeNavbarColor(appPages.scrollTop)
  //   });
  // });

  //   profileApp.addEventListener('scroll', () => {
  //     console.log(profileApp.scrollTop);

  //     changeNavbarColor(profileApp.scrollTop)
  //   });

  // reviewApp?.addEventListener('scroll', () => {
  //     console.log(mainApp.scrollTop);

  //     changeNavbarColor(mainApp.scrollTop)
  //   });

  // footerApp?.addEventListener('scroll', () => {
  //     console.log(mainApp.scrollTop);

  //     changeNavbarColor(mainApp.scrollTop)
  //   });

  // publicApp?.addEventListener('scroll', () => {
  //     console.log(mainApp.scrollTop);

  //     changeNavbarColor(mainApp.scrollTop)
  //   });

  // businessApp?.addEventListener('scroll', () => {
  //     console.log(mainApp.scrollTop);

  //     changeNavbarColor(mainApp.scrollTop)
  //   });

  // loginApp?.addEventListener('scroll', () => {
  //     console.log(mainApp.scrollTop);

  //     changeNavbarColor(mainApp.scrollTop)
  //   });

  // signupApp?.addEventListener('scroll', () => {
  //     console.log(mainApp.scrollTop);

  //     changeNavbarColor(mainApp.scrollTop)
  //   });

  return (
    <Navbar
      expand="lg"
      fixed="top"
      id="navbar-strip-top"
      style={{
        backgroundColor: `${colorChangeState ? "#ffd800" : "transparent"}`,
        // height: navSize,
        transition: "all 2s",
      }}
    >
      <Container fluid className="mx-0 d-flex justify-content-between">
        <Navbar.Brand href="/" className="d-inline-flex align-items-center">
          <img
            src="https://res.cloudinary.com/shakalondon/image/upload/v1636974558/Papaya/papaya-round_y4c6uq.png"
            alt="Papaya Logo"
            id="papaya-logo-nav"
            className="mx-3 my-3"
            style={{
              width: `${colorChangeState ? "3rem" : "5rem"}`,
              height: `${colorChangeState ? "3rem" : "5rem"}`,
            }}
          />
          {colorChangeState && (
            <h1 className="brand-heading-h1 mb-0 mx-2">Papaya.</h1>
          )}
        </Navbar.Brand>
        <Navbar.Brand
          href="/"
          className="d-inline-flex align-items-center mx-auto"
        >
          {routePath != "/main" &&
            routePath != "/login" &&
            routePath != "/signup" &&
            !colorChangeState && (
              <h1 className="brand-heading-h1 mb-0 mx-2">Papaya.</h1>
            )}
        </Navbar.Brand>
        <Navbar.Brand className="d-flex align-items-center">
          {colorChangeState && (
            <FontAwesomeIcon
              icon={faSearch}
              className="mx-4 my-4"
              id="main-nav-bar-icon"
              style={{ fontSize: `${colorChangeState ? "2rem" : "3rem"}` }}
              onClick={() => setMenuState(true)}
            />
          )}
          {!sideMenuState && (
            <FontAwesomeIcon
              icon={faBars}
              className="mx-4 my-4"
              id="main-nav-bar-icon"
              style={{ fontSize: `${colorChangeState ? "2rem" : "3rem"}` }}
              onClick={() => setMenuState(true)}
            />
          )}
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
