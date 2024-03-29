import {
  Container,
  Row,
} from "react-bootstrap";
import Footer from "../footer";
import { useEffect, useState } from "react";
import { registerAction } from "../../redux/actions/auth";
import { connect, useDispatch } from "react-redux";
import { useLocation } from "react-router";
import CategoryMainNav from "./search-nav";
import LoadingSpinner from "../loading/index.js";
import { colorChangeAction, openNavAction } from "../../redux/actions";
import CategoryMain from "./search-main";
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

const AllCategories = ({
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

  // const [searchRequest, setSearchRequest] = useState(catNamePath);
  const [allCategories, setAllCategories] = useState();
  const [dataLoading, setDataLoading] = useState(true);


  useEffect(() => {
    dispatch(colorChangeAction(true))
    dispatch(openNavAction(false))
  })


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

    appData.getAllCategories()
      .then((res) => {
        const categoryRes = res.data;
        console.log(categoryRes);
        // console.log(busFound.reviewIDs)
        // const reviews = busFound.reviewIDs
        setAllCategories((allCategories) => categoryRes);
        console.log(categoryRes);

        // setCompanyReviews(busFound.reviewIDs)

        setDataLoading(false);
      })

      .catch((error) => {
        console.log(error);
      });

  }, []);

  return (
    <>
      <Container
        fluid
        id="category-app-component"
        className="mx-0 d-flex justify-content-center px-0"
      >
        {dataLoading ? (
          <Container fluid id="business-form" className="flex-row mx-0 px-0">
            <LoadingSpinner />
          </Container>
        ) : (
          <Container fluid id="business-form" className="flex-row mx-0 px-0">
            <Row className="mx-0 px-0">
              <CategoryMainNav category={allCategories} loading={loading} />
            </Row>
            <Row
              className="mx-0 px-0 py-2"
              id="category-main-cont"
              style={{ paddingTop: "0px" }}
            >
              <CategoryMain
                category={allCategories}
                loading={loading}
                user={userProf}
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

export default connect(mapStateToProps, mapDispatchToProps)(AllCategories);
