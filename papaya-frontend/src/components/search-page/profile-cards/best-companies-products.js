import {
  faSearch,
  faStar,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import {
  Card,
  Button,
  Container,
  Row,
  Col,
  Form,
  FloatingLabel,
  FormControl,
  ProgressBar,
  InputGroup,
} from "react-bootstrap";
import { connect } from "react-redux";
import { openNavAction } from "../../../redux/actions";
import {
  updateUserAction,
  updateUserImageAction,
  updateUserCoverAction,
} from "../../../redux/actions/user";
import FilesUploadComponent from "../upload";
import CompanyProductCard from "./company-product-card";

const mapStateToProps = (state) => ({
  sideMenuState: state.appState.sideMenu,
  userProf: state.user,
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
});

const BestCompaniesProducts = ({
  sideMenuState,
  setMenuState,
  userProf,
  updateUserProf,
  updateUserImage,
  updateUserCover,
  loading,
  score,
  categoryItems,
  category,
}) => {
  //   const [percentage, setPercentage] = useState(30)
  //   const [reviewScore, setReviewScore] = useState({
  //     businessScore: score.avgTotal[0]?.average,
  //     totalReviews: score.avgTotal[0]?.count,
  //     one: {
  //       reviews: [],
  //       percentage: 0
  //     },
  //     two: {
  //       reviews: [],
  //       percentage: 0
  //     },
  //     three: {
  //       reviews: [],
  //       percentage: 0
  //     },
  //     four: {
  //       reviews: [],
  //       percentage: 0
  //     },
  //     five: {
  //       reviews: [],
  //       percentage: 0
  //     }
  //   })
  // const [categoryList, setCategoryList] = useState(categoryItems)

  //   useEffect(() => {

  //     score.reviewNo?.map((reviewNum) => {
  //       const number = reviewNum
  //      const valueArray = [ "one", "two", "three", "four", "five"]
  //      const valueText = valueArray[number._id-1]
  //      console.log(valueText)

  //     })
  //    }, [score]);

  return (
    <Card
      style={{ width: "100%", border: "none" }}
      className="my-2"
      key={category._id}
    >
      <Card.Body>
        <Card.Title>
          <h5 className="px-2 mb-3">Best companies in this category</h5>
        </Card.Title>

        {/* <Card.Text > */}
        <h6 className="px-2 mb-3 extraSmallTxt">
          1-20 of 43 results based on current filters. Ordered by PapayaScore
          and number of reviews. Default filter settings show companies as best
          in this category if they’re actively asking for reviews and have
          received 25+ in the past 12 months. You can adjust these filters.
        </h6>
        {/* </Card.Text> */}
        {/* <hr className="mx-2"/> */}

        <div className="px-1 py-0">
          {/* {(category?.subCategories.length > 0) && category?.subCategories.map((subCat) => { */}

          <CompanyProductCard catList={categoryItems} />
          {/* })} */}
        </div>

        {/* <Container className="px-2 py-3">
         
                        </Container> */}
      </Card.Body>
    </Card>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BestCompaniesProducts);
