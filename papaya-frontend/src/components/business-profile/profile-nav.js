import {
  faCircle,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Nav,
  Container,
  Navbar,
  Button,
} from "react-bootstrap";
import StarRating from "../rating-component/index.js";
import WebsiteContainer from "./profile-cards/website-card.js";
import { connect, useDispatch } from "react-redux";
import { colorChangeAction, openNavAction } from "../../redux/actions";
import {
  updateUserAction,
  updateUserImageAction,
  updateUserCoverAction,
} from "../../redux/actions/user";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";

const mapStateToProps = (state) => ({
  sideMenuState: state.appState.sideMenu,
  userProf: state.user,
  colorChangeState: state.appState.colorChange,
});

const mapDispatchToProps = (dispatch) => ({
  setMenuState: (action) => {
    dispatch(openNavAction(action));
  },

  updateUserProf: (action) => {
    dispatch(updateUserAction(action));
  },

  updateUserImage: (action) => {
    dispatch(updateUserImageAction(action));
  },

  updateUserCover: (action) => {
    dispatch(updateUserCoverAction(action));
  },

  colorChange: (action) => dispatch(colorChangeAction(action)),
});

const BusinessNav = ({
  profile,
  score,
  loading,
  colorChange,
  colorChangeState,
}) => {

  const history = useHistory();

  const dispatch = useDispatch();
  // const [colorChange, setColorchange] = useState(false);
  const [reviewScore, setReviewScore] = useState({
    businessScore: score?.avgTotal[0].average,
    totalReviews: score?.avgTotal[0].count,
    one: {
      reviews: [],
      percentage: 0,
    },
    two: {
      reviews: [],
      percentage: 0,
    },
    three: {
      reviews: [],
      percentage: 0,
    },
    four: {
      reviews: [],
      percentage: 0,
    },
    five: {
      reviews: [],
      percentage: 0,
    },
  });


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
    score.reviewNo?.forEach((reviewNum) => {

      const valueArray = ["one", "two", "three", "four", "five"];
      const valueText = valueArray[reviewNum._id - 1];
      console.log(valueText);

      setReviewScore({
        ...reviewScore,
        [valueText]: {
          reviews: reviewNum.reviews,
          percentage: (reviewNum.count / reviewScore.totalReviews) * 100,
        },
      });
    });
  }, [score, reviewScore]);
  //   return () => {
  // window.removeEventListener("scroll", listenScrollEvent);
  // };



  // console.log(companyReviews)

  const selected = (value) => {
    // console.log(value + "selected")
    // setWriteReview({ ...writeReview, stars: value})
  };

  return (
    <Navbar
      bg="light"
      // expand="lg"
      className="px-0 py-0 bus-profile-header"
      // id="bus-profile-header"
      fixed="top"
    >
      {!loading && (
        <div
          className={`overlay container-fluid ${
            colorChangeState ? "py-1" : "py-4"
          }`}
        >
          <Container
            fluid
            className="d-flex fullopacity padding-top-container container-padding"
            id="business-profile-container"
            style={{ paddingTop: `${colorChangeState ? "110px" : "150px"}` }}
          >
            <Navbar.Brand className="d-flex align-items-center justify-content-center">
              <img
                src={profile.avatar?.avatar}
                alt="User Avatar"
                className="rounded-circle"
                style={{
                  width: `${colorChangeState ? "4rem" : "10rem"}`,
                  height: `${colorChangeState ? "4rem" : "10rem"}`,
                  objectFit: "cover",
                  
                }}
                id="profile-bus-avatar"
              />
            </Navbar.Brand>
            <Navbar.Brand className="flex-col align-self-center">
              <Container fluid>
                {colorChangeState ? (
                  <h3 className="text-white mb-0">{profile.businessName}</h3>
                ) : (
                  <h1 className="text-white mb-0">{profile.businessName}</h1>
                )}
              </Container>
              {/* <Container fluid>
                        <h6 className="text-white">{`@${profile.username}`}</h6>
                    </Container> */}
              {!colorChangeState && (
                <Container fluid className="d-flex align-items-center" id="bus-nav-stats">
                  <h6 className="text-white mb-0">{`Reviews`}</h6>
                  <h6 className="text-white mb-0 ms-2">{`${profile.reviewIDs?.length}`}</h6>
                  <FontAwesomeIcon
                    icon={faCircle}
                    style={{ width: "5px", height: "5px" }}
                    className="text-white mx-2"
                  />
                  <h6 className="text-white mb-0 text-bold">
                    {reviewScore.businessScore > 4
                      ? "Excellent"
                      : reviewScore.businessScore > 3
                      ? "Great"
                      : reviewScore.businessScore > 2
                      ? "Average"
                      : reviewScore.businessScore > 1
                      ? "Poor"
                      : "Bad"}
                  </h6>
                </Container>
              )}
              <Container
                fluid
                className={`d-flex align-items-center ${
                  colorChange ? "my-1" : "my-2 mt-4"
                }`}
              >
                <div id="bus-nav-rating">
                {reviewScore.businessScore > 0 && (
                  <StarRating
                    current={reviewScore.businessScore}
                    fontSize={colorChangeState ? "1.5rem" : "3rem"}
                    changeable={false}
                    selected={selected}
                    
                  />
                )}

</div>
<div id="bus-nav-rating-resp">
{reviewScore.businessScore > 0 && (
                  <StarRating
                    current={reviewScore.businessScore}
                    fontSize={"1.2rem"}
                    changeable={false}
                    selected={selected}
                   
                  />
                )}
</div>
              
                <h6 className="text-white mb-0">
                  {reviewScore.businessScore.toFixed(1)}
                </h6>
              </Container>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                {!colorChangeState ? (
                  <Container className="responsive-hide">
                    <WebsiteContainer website={profile.website} />
                  </Container>
                ) : (
                  <Container className="px-0 responsive-hide">
                    <Button className="btn-light">
                      <a href={`https://${profile.website}`}>
                        {profile.website}
                      </a>
                    </Button>
                    <Button
                      className="profileButton ms-2"
                      onClick={() =>
                        history.push(
                          `/review/${profile.website.replace("www.", "")}/new`
                        )
                      }
                    >
                      Write a Review
                    </Button>
                  </Container>
                )}
                <div>
                  <FontAwesomeIcon icon={faGlobe} style={{ fontSize: "2rem" }} onClick={() =>
                        history.push(
                          `/review/${profile.website.replace("www.", "")}/new`
                        )
                      }
                      className="responsive-show"/>
                </div>
                {/* <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </div>
      )}
    </Navbar>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessNav);
