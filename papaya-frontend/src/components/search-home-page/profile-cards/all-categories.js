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
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { connect } from "react-redux";
import { useHistory } from "react-router";
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

const AllCategoryList = ({
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

  const history = useHistory();

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
      className="my-4 py-2 profileCard"
    >
      <Card.Body>
        <ListGroup>
          {category?.map((cat, idx) => {
            const subNo = cat?.subCategories.length;
            const halfValue = subNo / 2;

            return (
              <ListGroupItem key={cat._id} className="categoryListCard py-0">
                <Card
                  style={{ width: "100%", border: "none" }}
                  className="categoryListCard bottomLine py-2"
                >
                  <Row>
                    <Col md={4}>
                      <h5
                        onClick={() =>
                          history.push(`/search/category/${cat.name}`)
                        }
                        className="px-0 mb-0 noBold"
                      >
                        {cat.name}
                      </h5>
                    </Col>
                    <Col md={8}>
                      {cat?.subCategories.map((subCat, idx) => {
                        console.log(halfValue);

                        return (
                          <div className="d-flex align-items-center">
                            <h6
                              key={subCat._id}
                              onClick={() =>
                                history.push(`/search/category/${subCat.name}`)
                              }
                              className="px-0 mb-0 pb-3 py-1 noBold"
                            >
                              {subCat.name}
                            </h6>
                          </div>
                        );
                      })}
                    </Col>
                  </Row>
                </Card>
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AllCategoryList);
