import {
  faChevronLeft,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Container,
  Navbar,
} from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import { colorChangeAction, openNavAction } from "../../redux/actions";
import {
  updateUserAction,
  updateUserImageAction,
  updateUserCoverAction,
} from "../../redux/actions/user";
import { useEffect } from "react";
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

const CategorySearchNav = ({
  sideMenuState,
  setMenuState,
  userProf,
  updateUserProf,
  updateUserImage,
  updateUserCover,
  category,
  score,
  loading,
  colorChange,
  colorChangeState,
  categoryData
}) => {
  const history = useHistory();

  const dispatch = useDispatch();

  // const [currentCategory, setCurrentCategory] = useState(category?.name);
  // const [colorChange, setColorchange] = useState(false);
  // const [reviewScore, setReviewScore] = useState({
  //   businessScore: score.avgTotal[0]?.average,
  //   totalReviews: score.avgTotal[0]?.count,
  //   one: {
  //     reviews: [],
  //     percentage: 0
  //   },
  //   two: {
  //     reviews: [],
  //     percentage: 0
  //   },
  //   three: {
  //     reviews: [],
  //     percentage: 0
  //   },
  //   four: {
  //     reviews: [],
  //     percentage: 0
  //   },
  //   five: {
  //     reviews: [],
  //     percentage: 0
  //   }
  // })
  // const [currentRating, setCurrentRating] = useState(0)

  // useEffect(() => {
  //   if (currentCategory !== null && currentCategory !== category.name) {
  //     let path = `/search/category/${currentCategory}`;
  //     history.push(path);
  //   }

  //   // return () => {
  //   // window.removeEventListener("scroll", listenScrollEvent);
  //   //   };
  // }, [currentCategory, history, category.name]);



  useEffect(() => {
    const appPages = document.getElementsByClassName("scrollNav");

    console.log(appPages);

    const elemArray = Array.from(appPages);

    const changeNavbarColor = (scroll) => {
      if (scroll >= 0) {
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

  // useEffect(() => {

  //    score.reviewNo?.map((reviewNum) => {
  //      const number = reviewNum
  //     const valueArray = [ "one", "two", "three", "four", "five"]
  //     const valueText = valueArray[reviewNum._id-1]
  //     console.log(valueText)

  //     setReviewScore({...reviewScore, [valueText]: {
  //       reviews: reviewNum.reviews,
  //       percentage: (reviewNum.count / reviewScore.totalReviews)*100
  //     }})
  //    })
  //   }, [score]);
  //   return () => {
  // window.removeEventListener("scroll", listenScrollEvent);
  // };

  // const changeNavbarColor = (scroll) =>{
  //    if(scroll >= 0){
  //     colorChange(true);
  //    }
  //    else{
  //     colorChange(false);
  //    }
  // };

  // console.log(companyReviews)

 

  // console.log(category, "category")
  return (
    <Navbar
      bg="light"
      expand="lg"
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
            id="search-profile-container"
            style={{ paddingTop: `${colorChangeState ? "110px" : "150px"}` }}
          >
            <Navbar.Brand>
              <div className="d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className="fa-sm text-white"
                />
                {category?.categoryID.categoryLevel === 1 ? (
                  <h6
                    onClick={() => history.push(`/search/category/All`)}
                    className="text-white mb-0 mx-2"
                  >
                    All Categories
                  </h6>
                ) : (
                  <h6
                    className="text-white mb-0 mx-2"
                    onClick={() =>
                      categoryData((state) => category.categoryID.parentCategory[0]?.name)
                      
                    }
                  >
                    {category.categoryID.parentCategory[0]?.name}
                  </h6>
                )}
              </div>
              <h1 className="text-white mb-0">{category?.categoryID.name}</h1>
              <div className="d-flex align-items-center">
                <h6 className="text-white mb-0 align-self-center">{`Compare companies in the ${category?.categoryID.name} category`}</h6>
                <FontAwesomeIcon
                  icon={faInfoCircle}
                  className="fa-sm mx-2 text-white"
                />
              </div>
            </Navbar.Brand>
          </Container>
        </div>
      )}
    </Navbar>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CategorySearchNav);
