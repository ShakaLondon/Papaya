import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import MainJumbo from "./main-jumbo";
import SearchBar from "../search-bar";
import Categories from "../categories";
import RecentReviews from "../recent-reviews";
import NewProducts from "../new-products";
import Footer from "../footer";
import LoginJumbo from "./login-jumbo";

import { connect } from "react-redux";
import { loginAction } from "../../redux/actions/auth.js";
import { colorChangeAction, openNavAction } from "../../redux/actions/index.js";
import { useEffect, useState } from "react";
import LoadingSpinner from "../loading/index.js";

const mapStateToProps = (state) => ({
  error: state.appState.error,
  loading: state.appState.loading,
  isLoggedIn: state.user.isLoggedIn,
  userFound: state.user.userFound,
  colorChangeState: state.appState.colorChange,
});

const mapDispatchToProps = (dispatch) => ({
  //functions
  login: (email, password) => dispatch(loginAction(email, password)),
  colorChange: (action) => dispatch(colorChangeAction(action)),
});

const MainContainer = ({
  login,
  loading,
  error,
  isLoggedIn,
  userFound,
  colorChangeState,
  colorChange,
}) => {
  const [categories, setCategories] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    colorChange(false);
  }, []);

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
    if (scroll >= 280) {
      colorChange(true);
    } else {
      colorChange(false);
    }
  };

  useEffect(() => {
    const url = `http://localhost:3005/category?limit=3&columns=8`;
    const urlReviews = `http://localhost:3005/reviews`;
    const options = {
      method: "GET",
      // headers: {
      //     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGIwZGZiYmRjMTQ1ODAwMTVlNGFlZTUiLCJpYXQiOjE2MzE3NzI3MTIsImV4cCI6MTYzMjk4MjMxMn0.2YWhQrKLUrKnO_spK_yPMr-orqdslBjHVr-zMEUyYPk'
      // }
    };
    fetch(`${url}`, options)
      .then((res) => res.json())
      .then((result) => {
        const category = result;
        console.log(category);
        // console.log(busFound.reviewIDs)
        // const reviews = busFound.reviewIDs
        setCategories(() => category);
        // console.log(categories)

        // setCompanyReviews(busFound.reviewIDs)

        // setDataLoading(false)
      })
      // .then(() => { setCompanyReviews([searchResult.reviewIDs])

      //   setDataLoading(false)
      // })
      .catch((error) => {
        console.log(error);
      })
      .then(
        fetch(`${urlReviews}`, options)
          .then((res) => res.json())
          .then((results) => {
            const review = results;
            console.log(review);
            // console.log(busFound.reviewIDs)
            // const reviews = busFound.reviewIDs
            setReviews(() => review);

            // setDataLoading(false)
          })
          // .then(() => { setCompanyReviews([searchResult.reviewIDs])

          //   setDataLoading(false)
          // })

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
          <Categories categories={categories}></Categories>
          <RecentReviews reviews={reviews}></RecentReviews>
          <NewProducts></NewProducts>
          <Footer />
        </>
      )}
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
