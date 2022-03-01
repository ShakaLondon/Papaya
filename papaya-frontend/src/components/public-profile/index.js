import {
  Container,
  Row,
} from "react-bootstrap";
import Footer from "../footer";
import { useEffect, useState } from "react";
import { registerAction } from "../../redux/actions/auth";
import { connect, useDispatch } from "react-redux";
import { useLocation } from "react-router";
import PublicProfileNav from "./profile-nav";
import PublicProfileMain from "./profile-main";
import LoadingSpinner from "../loading/index";
import { colorChangeAction, openNavAction } from "../../redux/actions";

const mapStateToProps = (state) => ({
  error: state.appState.error,
  loading: state.appState.loading,
  isLoggedIn: state.user.isLoggedIn,
  userFound: state.user.userFound,
  userProf: state.user,
  colorChangeState: state.appState.colorChange,
});

const mapDispatchToProps = (dispatch) => ({
  //functions
  register: (userObj) => dispatch(registerAction(userObj)),
  colorChange: (action) => dispatch(colorChangeAction(action)),
  setMenuState: (action) => {
    dispatch(openNavAction(action));
  },
});

const PublicProfileContainer = ({
  login,
  loading,
  error,
  isLoggedIn,
  userFound,
  register,
  userProf,
  colorChange,
  colorChangeState,
  setMenuState
}) => {
  const locationUrl = useLocation();

  console.log(locationUrl);

  const routePath = locationUrl.pathname;
  console.log(routePath);

  const userNamePath = routePath.replace("/profile/", "");
  console.log(userNamePath);

  const dispatch = useDispatch();

  // const [updateUser, setUpdateUser] = useState({
  //   email: userProf.email,
  //   name: userProf.name,
  //   surname: userProf.surname,
  // });

  const [searchRequest] = useState(userNamePath);
  const [searchResult, setSearchResult] = useState({});
  const [dataLoading, setDataLoading] = useState(true);


  useEffect(() => {
    dispatch(colorChangeAction(false))
    dispatch(openNavAction(false))
  }, [dispatch])

  useEffect(() => {
    const appPages = document.getElementsByClassName("scrollNav");

    console.log(appPages);

    const elemArray = Array.from(appPages);

    const changeNavbarColor = (scroll) => {
      if (scroll >= 30) {
        dispatch(colorChangeAction(true));
      } else {
        dispatch(colorChangeAction(false));
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
  }, [dispatch]);



  useEffect(() => {
    const url = `http://localhost:3005/users/profile/${searchRequest}`;
    const options = {
      method: "GET",
      // headers: {
      //     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGIwZGZiYmRjMTQ1ODAwMTVlNGFlZTUiLCJpYXQiOjE2MzE3NzI3MTIsImV4cCI6MTYzMjk4MjMxMn0.2YWhQrKLUrKnO_spK_yPMr-orqdslBjHVr-zMEUyYPk'
      // }
    };
    fetch(`${url}`, options)
      .then((res) => res.json())
      .then((user) => {
        const userFound = user;
        console.log(userFound);
        setSearchResult(user);
        setDataLoading(false);
        // console.log(searchResult)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchRequest]);

  //   if (isLoggedIn) {
  //     return <Redirect to='/main' />
  // } else {
  return (
    <>
      <Container
        fluid
        id="public-app-component"
        className="mx-0 d-flex justify-content-center px-0 scrollNav"
      >
        {dataLoading ? (
          <Container fluid id="public-form" className="flex-row mx-0 px-0">
            <LoadingSpinner />
          </Container>
        ) : (
          <Container fluid id="public-form" className="flex-row mx-0 px-0">
            {/* <Row className="mx-0 px-0" style={{ backgroundColor: "#ffd800"}}>
                    <Col md={12} id="profile-topbar" className="d-inline-flex justify-content-center align-items-center my-0">
                        <h1 id="profile-brand-h1" className="brand-heading-h1 mb-0 mx-2">Papaya.</h1>
                    </Col> */}
            {/* <Col md={9} className="d-flex align-items-center">
                        <h1 className="brand-heading-h1 mb-0">Papaya.</h1>
                    </Col> */}
            {/* </Row> */}
            <Row className="mx-0 px-0">
              <PublicProfileNav profile={searchResult} />
            </Row>
            <Row className="mx-0 px-0" id="public-main-cont" style={{ paddingTop: `${colorChangeState ? "250px" : "360px"}` }}>
              <PublicProfileMain profile={searchResult} />
            </Row>
          </Container>
        )}
      </Container>
      <Footer />
    </>
  );
  // }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PublicProfileContainer);
