import { Navbar, Container, Form, InputGroup, FormControl, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { connect, useDispatch } from "react-redux";
import { colorChangeAction, openNavAction } from "../../redux/actions";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

const mapStateToProps = (state) => ({
  sideMenuState: state.appState.sideMenu,
  colorChangeState: state.appState.colorChange,
  searchState: state.appState.searchBar,
  loading: state.appState.loading,
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
  searchState,
  loading
}) => {
 

  const locationUrl = useLocation();

  console.log(locationUrl);

  const routePath = locationUrl.pathname;
  console.log(routePath);

  const splitPath = routePath.split("/");
  console.log(splitPath);

  const currentPath = splitPath[1];

  console.log(currentPath);

  const dispatch = useDispatch();


  const [barcodeHover, setBarcodeHover] = useState(false);


  useEffect(() => {
    const appPages = document.getElementsByClassName("scrollNav");

    console.log(appPages);

    const elemArray = Array.from(appPages);

    const changeNavbarColor = (scroll) => {
      if (currentPath === "main") {
        if (scroll >= 280) {
          dispatch(colorChangeAction(true));
        } else {
          dispatch(colorChangeAction(false));
        }
      } else {
        if (scroll >= 30) {
          dispatch(colorChangeAction(true));
        } else {
          dispatch(colorChangeAction(false));
        }
      }
    };

    elemArray.forEach((page) => {
      page.addEventListener("scroll", () => {
        console.log(page.scrollTop);

        changeNavbarColor(page.scrollTop);
      });
    });
    return () => {
      // window.removeEventListener("scroll", listenScrollEvent);
    };
  }, [dispatch, currentPath]);




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
          className={`d-inline-flex align-items-center ${sideMenuState ? "me-auto" : "mx-auto" }`}
        >
          {routePath !== "/main" &&
            routePath !== "/login" &&
            routePath !== "/register" &&
            !colorChangeState && (
              <h1 className="brand-heading-h1 mb-0">Papaya.</h1>
            )}
        </Navbar.Brand>
       { !loading && colorChangeState && 
       <Form
              className="container-fluid d-block my-4 ms-3 onTop"
              id="search-bar-form"
              // ref={searchNode}
            >
              <InputGroup className="input-group-search">
                  <FormControl
                    placeholder="Company, Category or Product Type"
                    aria-label="Company, Category or Product Type"
                    aria-describedby="basic-addon2"
                    className={`px-4`}
                    id="search-input"
                    // onClick={handleClick}
                    // onChange={handleRequest}
                    // value={searchRequest}
                  />
                  <Button id="button-addon3" className="px-4 searchBarButton" onMouseOver={() => setBarcodeHover(true)}  onMouseOut={() => setBarcodeHover(false)}>
                    <img
                      src={ barcodeHover ? "https://img.icons8.com/pastel-glyph/64/EF7C53/barcode-scanner--v2.png" : "https://img.icons8.com/pastel-glyph/64/FFD800/barcode-scanner--v2.png" }
                      className="searchBarcode"
                      alt="Barcode Icon"
                    />
                  </Button>
                  <Button id="button-addon2" className={`px-4 searchBarButton`} >
                    <FontAwesomeIcon icon={faSearch} className="fa-md"/>
                  </Button>
                  

              </InputGroup>
              {/* {searchState && <SearchBarCard searchResult={searchResult} />} */}
            </Form>}
        <Navbar.Brand className="d-flex align-items-center">
          {/* {colorChangeState && (
            <FontAwesomeIcon
              icon={faSearch}
              className="mx-4 my-4 main-nav-bar-icon"
              // id="main-nav-bar-icon"
              style={{ fontSize: `${colorChangeState ? "2rem" : "3rem"}` }}
              onClick={() => setMenuState(true)}
            />
          )} */}
          {!sideMenuState && (
            <FontAwesomeIcon
              icon={faBars}
              className="mx-4 my-4 main-nav-bar-icon"
              // id="main-nav-bar-icon"
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
