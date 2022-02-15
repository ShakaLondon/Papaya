import {
  Button,
  Container,
  Form,
  FormControl,
  FloatingLabel,
  Row,
  Col,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Footer from "../footer";
import { useEffect, useState } from "react";
import { registerAction } from "../../redux/actions/auth";
import { connect } from "react-redux";
import { Redirect, useHistory, useLocation } from "react-router";
import LoadingStar from "./loading-star";
import { colorChangeAction } from "../../redux/actions";

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
});

const ThankyouReviewPage = ({
  login,
  loading,
  error,
  isLoggedIn,
  userFound,
  register,
  userProf,
  colorChange,
  colorChangeState,
}) => {
  const locationUrl = useLocation();

  console.log(locationUrl);

  const routePath = locationUrl.pathname;
  console.log(routePath);

  const businessNamePath = routePath.replace("/review/", "www.");
  console.log(businessNamePath);

  //   const [updateUser, setUpdateUser] = useState({
  //       email: userProf.email,
  //       name: userProf.name,
  //       surname: userProf.surname,
  //     })

  const [searchRequest, setSearchRequest] = useState(businessNamePath);
  const [searchResult, setSearchResult] = useState({});

  const history = useHistory();

  useEffect(() => {
    colorChange(true);
  }, []);

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
    if (scroll >= 0) {
      colorChange(true);
    }
    //  else{
    //    colorChange(false);
    //  }
  };

  // useEffect(() => {
  //     const url = `http://localhost:3005/business/${searchRequest}`
  //     const options = {
  //         method: 'GET',
  //         // headers: {
  //         //     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGIwZGZiYmRjMTQ1ODAwMTVlNGFlZTUiLCJpYXQiOjE2MzE3NzI3MTIsImV4cCI6MTYzMjk4MjMxMn0.2YWhQrKLUrKnO_spK_yPMr-orqdslBjHVr-zMEUyYPk'
  //         // }
  //     }
  //     fetch(`${url}`, options)
  //     .then(res => res.json())
  //     .then((business) => {
  //         const busFound = business
  //         console.log(busFound)
  //         setSearchResult(busFound[0])
  //         // console.log(searchResult)
  //     })
  //     .catch((error) => {console.log(error)})
  // }, [])

  // const [userInfo, setUserInfo] = useState({
  //     email: "",
  //     password: "",
  //     name: "",
  //     surname: "",
  //     email: "",
  //     username: "",
  //     password: "",
  //     dateOfBirth: "",
  //   })

  //   const handleSubmit= (e) => {
  //     e.preventDefault();
  //     register(userInfo)
  //   }

  //   const handleChange= (e) => {
  //     console.log(e.target.value)
  //     let name = e.target.name
  //     setUserInfo({ ...userInfo, [name]: e.target.value});
  //   }

  //   if (isLoggedIn) {
  //     return <Redirect to='/main' />
  // } else {
  return (
    // <>
    <Container
      fluid
      // id="loading-app-component"
      className="mx-0 d-flex justify-content-center align-items-center px-0"
      style={{ height: "800px" }}
    >
      <Container
        fluid
        // id="loading-container"
        className="flex-row mx-0 px-0"
      >
        <Row className="mx-0 px-0 container-fluid">
          {/* <LoadingStar colour={"#ef7c53"} position={"front"}/>
                        <LoadingStar colour={"#ffef93"} position={"back"}/> */}

          <Col md={12} className="d-inline-flex justify-content-center">
            <h3>Thank you for contributing to the Papaya community.</h3>
          </Col>
          <Col md={12} className="d-inline-flex justify-content-center">
            <Button
              style={{ width: "400px" }}
              onClick={() => history.push(`/main`)}
              className="menuButton rounded-pill my-2"
            >
              Go Home
            </Button>
          </Col>
          <Col md={12} className="d-inline-flex justify-content-center">
            <Button
              style={{ width: "400px" }}
              onClick={() => history.push(`/profile/${userProf.username}`)}
              className="menuButton  rounded-pill my-2"
            >
              Go to Profile
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
  // }
};

export default connect(mapStateToProps, mapDispatchToProps)(ThankyouReviewPage);
