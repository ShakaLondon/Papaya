import {
  faGlobe,
  faStar,
  faThumbsUp,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Nav,
  Container,
  Navbar,
  NavDropdown,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import StarRating from "../../rating-component/index.js";

export default function AddRatingContainer(props) {
  const selected = (value) => {
    // console.log(value + "selected")
    // setWriteReview({ ...writeReview, stars: value})
  };
  return (
    <Card style={{ width: "100%" }} className="my-4 py-4 profileCard">
      <Card.Body className="py-2">
        <Container className="px-2">
          <Row>
            <Col md={2} className="">
              <img
                src={
                  props.isLoggedIn
                    ? props.user.avatar?.avatar
                    : "https://res.cloudinary.com/shakalondon/image/upload/v1638347322/Papaya/afro-profile_guv3qt.jpg"
                }
                alt="User Avatar"
                className="rounded-circle"
                style={{
                  width: `${props.isLoggedIn ? "3rem" : "3.5rem"}`,
                  height: `${props.isLoggedIn ? "3rem" : "3.5rem"}`,
                  objectFit: "cover",
                }}
              />
            </Col>
            <Col md={4} className="d-inline-flex px-0 align-items-center">
              <Container className="px-0">
                <Row>
                  <Col md={12} className="px-0">
                    <h5 className="px-0 mb-0">{`${props.user.name} ${props.user.surname}`}</h5>
                  </Col>
                </Row>
                <Row>
                  <Col md={12} className="px-0">
                    <h6 className="px-0 mb-0">Write a review</h6>
                  </Col>
                </Row>
              </Container>
              {/* <FontAwesomeIcon icon={faChevronRight}/> */}
            </Col>
            <Col
              md={6}
              className="d-flex align-items-center px-2 justify-content-end"
            >
              <StarRating
                current={0}
                numberOfStars={5}
                fontSize={"3rem"}
                website={props.profile.website}
                relocate={true}
                selected={selected}
              />
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}
