import {
  Container,
  Row,
} from "react-bootstrap";
import Footer from "../footer";
import { useEffect, useState } from "react";
import { registerAction } from "../../redux/actions/auth";
import { connect, useDispatch } from "react-redux";
import { useLocation } from "react-router";
import ProfileNav from "./profile-nav";
import ProfileMain from "./profile-main";
import LoadingSpinner from "../loading/index.js";
import { colorChangeAction, openNavAction } from "../../redux/actions";
import businessData from "../../services/business/business-data.js";

const mapStateToProps = (state) => ({
  error: state.appState.error,
  loading: state.appState.loading,
  isLoggedIn: state.user.isLoggedIn,
  userFound: state.user.userFound,
  userProf: state.user,
  colorChangeState: state.appState.colorChange,
  sideMenuState: state.appState.sideMenu,
});

const mapDispatchToProps = (dispatch) => ({
  //functions
  register: (userObj) => dispatch(registerAction(userObj)),
  colorChange: (action) => dispatch(colorChangeAction(action)),
  setMenuState: (action) => {
    dispatch(openNavAction(action));
  },
});

const BusinessContainer = ({
  loading,
  isLoggedIn,
  userProf,
  colorChange,
  colorChangeState,
  setMenuState
}) => {
  const locationUrl = useLocation();

  console.log(locationUrl);

  const routePath = locationUrl.pathname;
  console.log(routePath);

  const businessNamePath = routePath.replace("/review/", "www.");
  console.log(businessNamePath);

  const dispatch = useDispatch();

  //   const [updateUser, setUpdateUser] = useState({
  //       email: userProf.email,
  //       name: userProf.name,
  //       surname: userProf.surname,
  //     })

  const [searchRequest] = useState(businessNamePath);
  const [searchResult, setSearchResult] = useState({});
  const [dataLoading, setDataLoading] = useState(true);
  const [companyReviews, setCompanyReviews] = useState([]);
  const [reviews, setReviews] = useState({});


  useEffect(() => {
    dispatch(colorChangeAction(false))
    dispatch(openNavAction(false))
  }, [dispatch])

  // const [colorChange, setColorchange] = useState(false);

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
    const url = `http://localhost:3005/business/${searchRequest}`;
    const urlReviews = `http://localhost:3005/business/${searchRequest}/reviews/averages`;
    const options = {
      method: "GET",
      // headers: {
      //     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGIwZGZiYmRjMTQ1ODAwMTVlNGFlZTUiLCJpYXQiOjE2MzE3NzI3MTIsImV4cCI6MTYzMjk4MjMxMn0.2YWhQrKLUrKnO_spK_yPMr-orqdslBjHVr-zMEUyYPk'
      // }
    };
    businessData.getPublicBusiness(searchRequest)
      .then((res) => {
        const busFound = res.data[0];
        console.log(busFound);
        // console.log(busFound.reviewIDs)
        // const reviews = busFound.reviewIDs
        setSearchResult(busFound);
        // console.log(searchResult);

        setCompanyReviews(busFound.reviewIDs);
      })
      // .then((business) => {
      //   const busFound = business[0];
      //   console.log(busFound);
      //   // console.log(busFound.reviewIDs)
      //   // const reviews = busFound.reviewIDs
      //   setSearchResult(busFound);
      //   // console.log(searchResult);

      //   setCompanyReviews(busFound.reviewIDs);

      //   // setDataLoading(false);
      // })
      // .then(() => { setCompanyReviews([searchResult.reviewIDs])

      //   setDataLoading(false)
      // })
      .catch((error) => {
        console.log(error);
      }).then(

    businessData.getBusinessReviews(searchRequest)
      .then((res) => {
        const busResult = res.data;
        console.log(busResult);
        // console.log(busFound.reviewIDs)
        // const reviews = busFound.reviewIDs
        setReviews(busResult);
        setDataLoading(false);
      }))
      // .then((results) => {
      //   const busResult = results;
      //   console.log(busResult);
      //   // console.log(busFound.reviewIDs)
      //   // const reviews = busFound.reviewIDs
      //   setReviews(busResult);
      //   setDataLoading(false);
      // }))
      // .then(() => { setCompanyReviews([searchResult.reviewIDs])

      //   setDataLoading(false)
      // })
      .catch((error) => {
        console.log(error);
      });
  }, [searchRequest]);


  return (
    <>
      <Container
        fluid
        id="business-app-component"
        className="mx-0 d-flex justify-content-center px-0"
      >
        {dataLoading ? (
          <Container fluid id="business-form" className="flex-row mx-0 px-0">
            <LoadingSpinner />
          </Container>
        ) : (
          <Container fluid id="business-form" className="flex-row mx-0 px-0">
            <Row className="mx-0 px-0">
              <ProfileNav
                profile={searchResult}
                loading={loading}
                score={reviews}
                reviews={companyReviews}
              />
            </Row>
            <Row
              className="mx-0 px-0"
              id="business-main-cont"
              style={{ paddingTop: `${colorChangeState ? "280px" : "410px"}` }}
            >
              <ProfileMain
                profile={searchResult}
                loading={loading}
                user={userProf}
                score={reviews}
                isLoggedIn={isLoggedIn}
              />
            </Row>
          </Container>
        )}
      </Container>
      <Footer />
    </>
  );
  // }
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessContainer);
