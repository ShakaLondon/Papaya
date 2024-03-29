import {
  Container,
  Row,
} from "react-bootstrap";
import Footer from "../footer";
import { useEffect, useState } from "react";
import { registerAction } from "../../redux/actions/auth";
import { connect, useDispatch } from "react-redux";
import { useLocation } from "react-router";
import CategorySearchNav from "./search-nav";
import LoadingSpinner from "../loading/index.js";
import { colorChangeAction, openNavAction } from "../../redux/actions";
import CategorySearchMain from "./search-main";
import appData from "../../services/app-data/app-data.js";

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

const SearchContainer = ({
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

  const catNamePath = routePath.replace("/search/category/", "");
  console.log(catNamePath);

  const dispatch = useDispatch();

  //   const [updateUser, setUpdateUser] = useState({
  //       email: userProf.email,
  //       name: userProf.name,
  //       surname: userProf.surname,
  //     })

  const [searchRequest, setSearchRequest] = useState(catNamePath);
  const [searchResult, setSearchResult] = useState();
  const [dataLoading, setDataLoading] = useState(true);
  // const [companyReviews, setCompanyReviews] = useState([])
  //   const [reviews, setReviews] = useState({});

  // const [colorChange, setColorchange] = useState(false);

  useEffect(() => {
    dispatch(colorChangeAction(true))
    dispatch(openNavAction(false))
  })

  const categoryData = (index) => { // the callback. Use a better name
    console.log(index);
    setSearchRequest(index);
  };

  useEffect(() => {
    const routePath = locationUrl.pathname;
    console.log(routePath);

    const categoryNamePath = routePath.replace("/search/category/", "");
    console.log(categoryNamePath);

    // if(categoryNamePath) {
    setSearchRequest(() => categoryNamePath);
    // }
  }, [locationUrl.pathname]);

  useEffect(() => {
    const appPages = document.getElementsByClassName("scrollNav");

    console.log(appPages);

    const elemArray = Array.from(appPages);

    const changeNavbarColor = (scroll) => {
      if (scroll >= 0) {
        dispatch(colorChangeAction(true));
      } 
      // else {
      //   dispatch(colorChangeAction(false));
      // }
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

    if (searchRequest != null) {

      appData.getCategory(searchRequest)
        .then((res) => {
          const categoryRes = res.data;
          console.log(categoryRes.category);
          // console.log(busFound.reviewIDs)
          // const reviews = busFound.reviewIDs
          setSearchResult((searchResult) => categoryRes.category);
          console.log(categoryRes.category);

          // setCompanyReviews(busFound.reviewIDs)

          setDataLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    // return () => {

    //   };
  }, [searchRequest]);

  return (
    <>
      <Container
        fluid
        id="search-app-component"
        className="mx-0 d-flex justify-content-center px-0"
      >
        {dataLoading ? (
          <Container fluid id="business-form" className="flex-row mx-0 px-0">
            <LoadingSpinner />
          </Container>
        ) : (
          <Container fluid id="business-form" className="flex-row mx-0 px-0">
            <Row className="mx-0 px-0">
              <CategorySearchNav category={searchResult} loading={loading} categoryData={categoryData}/>
            </Row>
            <Row
              className="mx-0 px-0"
              id="category-search-main-cont"
              style={{ paddingTop: "220px" }}
            >
              <CategorySearchMain
                category={searchResult}
                loading={loading}
                user={userProf}
                isLoggedIn={isLoggedIn}
                categoryData={categoryData}
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
