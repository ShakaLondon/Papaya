import {
  Container,
  Row,
} from "react-bootstrap";
import Footer from "../footer";
import { useEffect, useState } from "react";
import { registerAction } from "../../redux/actions/auth";
import { connect, useDispatch } from "react-redux";
import { Redirect, useLocation } from "react-router";
import ReviewNav from "./review-nav";
import ReviewMain from "./review-main";
import { colorChangeAction } from "../../redux/actions";
import LoadingSpinner from "../loading/index.js";
import businessData from "../../services/business/business-data.js";

const mapStateToProps = (state) => ({
  error: state.appState.error,
  loading: state.appState.loading,
  isLoggedIn: state.user.isLoggedIn,
  userFound: state.user.userFound,
  userProf: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  //functions
  register: (userObj) => dispatch(registerAction(userObj)),
  colorChange: (action) => dispatch(colorChangeAction(action)),
});

const ReviewContainer = ({
  login,
  loading,
  error,
  isLoggedIn,
  userFound,
  register,
  userProf,
  colorChange,
}) => {
  const locationUrl = useLocation();

  console.log(locationUrl);

  const routePath = locationUrl.pathname;
  console.log(routePath);

  const businessNamePa = routePath.replace("/review/", "www.");
  console.log(businessNamePa);

  const businessNamePath = businessNamePa.replace("/new", "");
  console.log(businessNamePath);

  const dispatch = useDispatch();

  const [searchRequest] = useState(businessNamePath);
  const [searchResult, setSearchResult] = useState({});
  const [dataLoading, setDataLoading] = useState(true);

  const [reDirect, setRedirect] = useState(false);

  const setDirect = () => {
    // the callback. Use a better name
    console.log();
    setRedirect(true);
  };

  useEffect(() => {
    dispatch(colorChangeAction(false))
  }, [dispatch])



  useEffect(() => {

    businessData.getPublicBusiness(searchRequest)
      .then((res) => res.json())
      .then((business) => {
        const busFound = business;
        console.log(busFound);
        setSearchResult(busFound[0]);
        // console.log(searchResult)
        setDataLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchRequest]);


  if (reDirect) {
    return <Redirect to="/review/thankyou" />;
  } else {
    return (
      <>
        <Container
          fluid
          id="review-app-component"
          className="mx-0 d-flex justify-content-center px-0"
        >
          {dataLoading ? (
            <Container fluid id="business-form" className="flex-row mx-0 px-0">
              <LoadingSpinner />
            </Container>
          ) : (
            <Container fluid id="review-app" className="flex-row mx-0 px-0">
              <Row className="mx-0 px-0">
                <ReviewNav user={userProf} profile={searchResult} />
              </Row>
              <Row className="mx-0 px-0" id="review-main-cont">
                <ReviewMain
                  user={userProf}
                  profile={searchResult}
                  reDirect={setDirect}
                />
              </Row>
            </Container>
          )}
        </Container>
        <Footer />
      </>
    );
  }
  // }
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewContainer);
