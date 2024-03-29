import {
  faSearch,
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
import Keywords from "./keywords.js";

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

const ReviewHeader = ({
  sideMenuState,
  setMenuState,
  userProf,
  updateUserProf,
  updateUserImage,
  updateUserCover,
  loading,
  score,
}) => {

  const [reviewScore, setReviewScore] = useState({
    businessScore: score.avgTotal[0]?.average,
    totalReviews: score.avgTotal[0]?.count,
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
    score.reviewNo?.forEach((reviewNum) => {
      const number = reviewNum;
      const valueArray = ["one", "two", "three", "four", "five"];
      const valueText = valueArray[number._id - 1];
      console.log(valueText);

      setReviewScore((reviewScore) => ({
        ...reviewScore,
        [valueText]: {
          reviews: reviewNum.reviews,
          percentage: (reviewNum.count / reviewScore.totalReviews) * 100,
        },
      }));
    });
  }, [score, reviewScore]);

  return (
    <Card style={{ width: "100%" }} className="my-4 pt-4 profileCard">
      <Card.Body>
        {/* <Card.Title > */}
        <h4 className="px-2 mb-1">Reviews</h4>
        {/* </Card.Title> */}
        <hr className="mx-2" />

        {/* EXCELLENT BAR */}
        <Container className="px-2 py-2">
          <Row className="d-flex justify-content-between">
            <Col xs={1} sm={1} md={1} className="padding-x-one">
              <Row>
                <Form>
                  <div key={`default-checkbox`} className="">
                    <Form.Check type={"checkbox"} id={`default-checkbox`} />
                  </div>
                </Form>
              </Row>
            </Col>
            <Col xs={2} sm={2} md={1} className="px-1 d-flex align-items-center padding-x-one">
              <Row className="px-0">
                <h6 className="px-0 mb-0">Excellent</h6>
              </Row>
            </Col>
            <Col xs={6} sm={6} md={8} className="px-0 flex-row align-self-center">
              <Row>
                <Container className="mx-2">
                  {reviewScore !== null && (
                    <ProgressBar
                      now={reviewScore.five.percentage}
                      variant="success"
                    />
                  )}
                </Container>
              </Row>
            </Col>
            <Col
            xs={1}
            sm={1}
              md={2}
              className="d-flex justify-content-end px-2 align-items-center percentageWidth"
            >
              <Row>
                {reviewScore !== null && (
                  <h6 className=" mb-0">{`${reviewScore.five.percentage.toFixed(
                    0
                  )}%`}</h6>
                )}
              </Row>
            </Col>
          </Row>
        </Container>
        {/* GOOD BAR */}
        <Container className="px-2 py-2">
          <Row className="d-flex justify-content-between">
            <Col xs={1} sm={1} md={1} className="padding-x-one">
              <Row>
                <Form>
                  <div key={`default-checkbox`} className="">
                    <Form.Check type={"checkbox"} id={`default-checkbox`} />
                  </div>
                </Form>
              </Row>
            </Col>
            <Col xs={2} sm={2} md={1} className="px-1 d-flex align-items-center padding-x-one">
              <Row className="px-0">
                <h6 className="px-0 mb-0">Good</h6>
              </Row>
            </Col>
            <Col xs={6} sm={6} md={8} className="px-0 flex-row align-self-center">
              <Row>
                <Container  className="mx-2">
                  {reviewScore !== null && (
                    <ProgressBar
                      now={reviewScore.four.percentage}
                      variant="success"
                    />
                  )}
                </Container>
              </Row>
            </Col>
            <Col
              xs={1}
              sm={1}
                md={2}
                className="d-flex justify-content-end px-2 align-items-center percentageWidth"
              >
              <Row>
                {reviewScore !== null && (
                  <h6 className=" mb-0">{`${reviewScore.four.percentage.toFixed(
                    0
                  )}%`}</h6>
                )}
              </Row>
            </Col>
          </Row>
        </Container>
        {/* AVERAGE BAR */}
        <Container className="px-2 py-2">
          <Row className="d-flex justify-content-between">
            <Col xs={1} sm={1} md={1} className="padding-x-one">
              <Row>
                <Form>
                  <div key={`default-checkbox`} className="">
                    <Form.Check type={"checkbox"} id={`default-checkbox`} />
                  </div>
                </Form>
              </Row>
            </Col>
            <Col xs={2} sm={2} md={1} className="px-1 d-flex align-items-center padding-x-one">
              <Row className="px-0">
                <h6 className="px-0 mb-0">Average</h6>
              </Row>
            </Col>
            <Col xs={6} sm={6} md={8} className="px-0 flex-row align-self-center">
              <Row>
                <Container className="mx-2">
                  {reviewScore !== null && (
                    <ProgressBar
                      now={reviewScore.three.percentage}
                      variant="warning"
                    />
                  )}
                </Container>
              </Row>
            </Col>
            <Col
               xs={1}
               sm={1}
                 md={2}
                 className="d-flex justify-content-end px-2 align-items-center percentageWidth"
               >
              <Row>
                {reviewScore !== null && (
                  <h6 className=" mb-0">{`${reviewScore.three.percentage.toFixed(
                    0
                  )}%`}</h6>
                )}
              </Row>
            </Col>
          </Row>
        </Container>
        {/* POOR BAR */}
        <Container className="px-2 py-2">
          <Row className="d-flex justify-content-between">
            <Col xs={1} sm={1} md={1} className="padding-x-one">
              <Row>
                <Form>
                  <div key={`default-checkbox`} className="">
                    <Form.Check type={"checkbox"} id={`default-checkbox`} />
                  </div>
                </Form>
              </Row>
            </Col>
            <Col xs={2} sm={2} md={1} className="px-1 d-flex align-items-center padding-x-one">
              <Row className="px-0">
                <h6 className="px-0 mb-0">Poor</h6>
              </Row>
            </Col>
            <Col xs={6} sm={6} md={8} className="px-0 flex-row align-self-center">
              <Row>
                <Container className="mx-2">
                  {reviewScore !== null && (
                    <ProgressBar
                      now={reviewScore.two.percentage}
                      variant="danger"
                    />
                  )}
                </Container>
              </Row>
            </Col>
            <Col
                xs={1}
                sm={1}
                  md={2}
                  className="d-flex justify-content-end px-2 align-items-center percentageWidth"
                >
              <Row>
                {reviewScore !== null && (
                  <h6 className=" mb-0">{`${reviewScore.two.percentage.toFixed(
                    0
                  )}%`}</h6>
                )}
              </Row>
            </Col>
          </Row>
        </Container>
        {/* BAD BAR */}
        <Container className="px-2 py-2">
          <Row className="d-flex justify-content-between">
            <Col xs={1} sm={1} md={1} className="padding-x-one">
              <Row>
                <Form>
                  <div key={`default-checkbox`} className="">
                    <Form.Check type={"checkbox"} id={`default-checkbox`} />
                  </div>
                </Form>
              </Row>
            </Col>
            <Col xs={2} sm={2} md={1} className="px-1 d-flex align-items-center padding-x-one">
              <Row className="px-0">
                <h6 className="px-0 mb-0">Bad</h6>
              </Row>
            </Col>
            <Col xs={6} sm={6} md={8} className="px-0 flex-row align-self-center">
              <Row>
                <Container className="mx-2">
                  {reviewScore !== null && (
                    <ProgressBar
                      now={reviewScore.one.percentage}
                      variant="danger"
                    />
                  )}
                </Container>
              </Row>
            </Col>
            <Col
              xs={1}
              sm={1}
                md={2}
                className="d-flex justify-content-end px-2 align-items-center percentageWidth"
              >
              <Row>
                {reviewScore !== null && (
                  <h6 className=" mb-0">{`${reviewScore.one.percentage.toFixed(
                    0
                  )}%`}</h6>
                )}
              </Row>
            </Col>
          </Row>
        </Container>
        <Container className="px-2 py-3 keywordScroll">
          {/* <Row>
            <Col sm={12} xs={12} md={12}> */}
          <Keywords
            keywords={["All Reviews", "Service", "Booking", "Options"]}
          />
          {/* </Col>
          </Row> */}
        </Container>
        <Container className="px-2 py-3">
          <Form className="container-fluid d-flex px-0" id="search-review-form">
            <InputGroup className="">
              <Button id="button-addon3" className="px-4 searchBarButton">
                <FontAwesomeIcon icon={faSearch} />
              </Button>
              <FormControl
                placeholder="Company, Category or Product Type"
                aria-label="Company, Category or Product Type"
                aria-describedby="basic-addon2"
                className="px-4"
                id="search-input"
              />
            </InputGroup>
          </Form>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewHeader);
