import { Container } from "react-bootstrap";
import MainJumbo from "./main-jumbo";
import SearchBar from "../search-bar";
import Categories from "../categories";
import RecentReviews from "../recent-reviews";
import NewProducts from "../new-products";
import Footer from "../footer";
import LoginJumbo from "./login-jumbo";

import { connect, useDispatch } from "react-redux";
import { loginAction } from "../../redux/actions/auth.js";
import { colorChangeAction, openNavAction } from "../../redux/actions/index.js";
import { useEffect, useState } from "react";
import LoadingSpinner from "../loading/index.js";
import appData from "../../services/app-data/app-data.js";

const mapStateToProps = (state) => ({
  error: state.appState.error,
  loading: state.appState.loading,
  isLoggedIn: state.user.isLoggedIn,
  userFound: state.user.userFound,
  colorChangeState: state.appState.colorChange,
  sideMenuState: state.appState.sideMenu,
});

const mapDispatchToProps = (dispatch) => ({
  //functions
  login: (email, password) => dispatch(loginAction(email, password)),
  colorChange: (action) => dispatch(colorChangeAction(action)),
  setMenuState: (action) => {
    dispatch(openNavAction(action));
  },
});

const MainContainer = ({
  login,
  loading,
  error,
  isLoggedIn,
  userFound,
  colorChangeState,
  colorChange,
  setMenuState,
  sideMenuState
}) => {

  const dispatch = useDispatch();

  const [categories, setCategories] = useState([]);
  const [reviews, setReviews] = useState([]);
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
      if (scroll >= 280) {
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

    appData.getAllCategories()
      .then((res) => {
        const category = res.data;
        console.log(category);
        // console.log(busFound.reviewIDs)
        // const reviews = busFound.reviewIDs
        setCategories(() => category);
      })

      .catch((error) => {
        console.log(error);
      })
      .then(
        appData.getAllReviews()
          .then((res) => {
            const review = res.data;
            console.log(review);
            // console.log(busFound.reviewIDs)
            // const reviews = busFound.reviewIDs
            setReviews(() => review);
          })


          .catch((error) => {
            console.log(error);
          })
      )
      .then(() => {
        // if ((reviews.length > 0) && (categories.length > 0)) {
        setDataLoading(false);
        // }
      });

    // return () => {
    //     setDataLoading(true)
    //   };
  }, []);

  return (
    <Container fluid id="main-app-component" className="mx-0 px-0 scrollNav">
      {dataLoading ? (
        <Container fluid id="business-form" className="flex-row mx-0 px-0">
          <LoadingSpinner />
        </Container>
      ) : (
        <>
          {isLoggedIn ? <LoginJumbo></LoginJumbo> : <MainJumbo></MainJumbo>}
          <SearchBar></SearchBar>
          <Categories categories={categories} sideMenu={sideMenuState}></Categories>
          <RecentReviews reviews={reviews} sideMenu={sideMenuState}></RecentReviews>
          <NewProducts sideMenu={sideMenuState}></NewProducts>
          <Footer />
        </>
      )}
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
