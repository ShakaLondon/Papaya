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
import { Redirect, useLocation } from "react-router";
import ProfileNav from "./profile-nav";
import ProfileMain from "./profile-main";
import LoadingSpinner from "../loading/index.js";
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

const BusinessContainer = ({
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
  const [dataLoading, setDataLoading] = useState(true);
  const [companyReviews, setCompanyReviews] = useState([]);
  const [reviews, setReviews] = useState({});

  useEffect(() => {
    colorChange(false);
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
    if (scroll >= 30) {
      colorChange(true);
    } else {
      colorChange(false);
    }
  };

  useEffect(() => {
    const url = `http://localhost:3005/business/${searchRequest}`;
    const urlReviews = `http://localhost:3005/business/${searchRequest}/reviews/averages`;
    const options = {
      method: "GET",
      // headers: {
      //     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGIwZGZiYmRjMTQ1ODAwMTVlNGFlZTUiLCJpYXQiOjE2MzE3NzI3MTIsImV4cCI6MTYzMjk4MjMxMn0.2YWhQrKLUrKnO_spK_yPMr-orqdslBjHVr-zMEUyYPk'
      // }
    };
    fetch(`${url}`, options)
      .then((res) => res.json())
      .then((business) => {
        const busFound = business[0];
        console.log(busFound);
        // console.log(busFound.reviewIDs)
        // const reviews = busFound.reviewIDs
        setSearchResult(busFound);
        console.log(searchResult);

        setCompanyReviews(busFound.reviewIDs);

        setDataLoading(false);
      })
      // .then(() => { setCompanyReviews([searchResult.reviewIDs])

      //   setDataLoading(false)
      // })
      .catch((error) => {
        console.log(error);
      });

    fetch(`${urlReviews}`, options)
      .then((res) => res.json())
      .then((results) => {
        const busResult = results;
        console.log(busResult);
        // console.log(busFound.reviewIDs)
        // const reviews = busFound.reviewIDs
        setReviews(busResult);
      })
      // .then(() => { setCompanyReviews([searchResult.reviewIDs])

      //   setDataLoading(false)
      // })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // useEffect(async () => {
  // const reviewsList = companyReviews

  // console.log(reviewsList)

  // setReviews({...reviews, reviewList: companyReviews})

  // companyReviews?.forEach(review => {
  //     setReviews({ ...reviews, total: (reviews.total + review.rating)})
  //     console.log({...reviews})

  //     review.rating === 5 ? setReviews({...reviews, ratingNo: { ...reviews.ratingNo, five: {...reviews.ratingNo.five, reviews: [...reviews.ratingNo.five.reviews, review] } }}) :
  //     review.rating === 4 ? setReviews({...reviews, ratingNo: { ...reviews.ratingNo, four: {...reviews.ratingNo.four, reviews: [...reviews.ratingNo.four.reviews, review] } }}) :
  //     review.rating === 3 ? setReviews({...reviews, ratingNo: { ...reviews.ratingNo, three: {...reviews.ratingNo.three, reviews: [...reviews.ratingNo.three.reviews, review] } }}) :
  //     review.rating === 2 ? setReviews({...reviews, ratingNo: { ...reviews.ratingNo, two: {...reviews.ratingNo.two, reviews: [...reviews.ratingNo.two.reviews, review] } }}) :
  //     setReviews({...reviews, ratingNo: { ...reviews.ratingNo, one: {...reviews.ratingNo.one, reviews: [...reviews.ratingNo.one.reviews, review] } }})

  // });

  // setReviews({...reviews, ratingNo: { ...reviews.ratingNo, five: {...reviews.ratingNo.five, percentage: (reviews.ratingNo.five.reviews?.length/reviews.reviewsList?.length)*100 } }})
  // setReviews({...reviews, ratingNo: { ...reviews.ratingNo, four: {...reviews.ratingNo.four, percentage: (reviews.ratingNo.four.reviews?.length/reviews.reviewsList?.length)*100 } }})
  // setReviews({...reviews, ratingNo: { ...reviews.ratingNo, three: {...reviews.ratingNo.three, percentage: (reviews.ratingNo.three.reviews?.length/reviews.reviewsList?.length)*100 } }})
  // setReviews({...reviews, ratingNo: { ...reviews.ratingNo, four: {...reviews.ratingNo.four, percentage: (reviews.ratingNo.four.reviews?.length/reviews.reviewsList?.length)*100 } }})
  // setReviews({...reviews, ratingNo: { ...reviews.ratingNo, one: {...reviews.ratingNo.one, percentage: (reviews.ratingNo.one.reviews?.length/reviews.reviewsList?.length)*100 } }})

  // setReviews({...reviews, average: (reviews.total/reviews.reviewsList?.length)*100})
  // console.log(reviews)
  //   if (companyReviews.length > 0) {
  //     await getAverages({...companyReviews})
  //     console.log({...companyReviews})

  //     setReviews(reviews => ({...reviews, average: (reviews.total/reviews.reviewList.length)}))
  //   }
  // }, [dataLoading, companyReviews]);

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
