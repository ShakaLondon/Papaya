import {
  Container,
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
    <Card style={{ width: "100%" }} className="py-4 profileCard" id="rating-card">
      <Card.Body className="py-2">
        <Container className="px-2">
          <Row className="">
            <Col 
            sm={2} 
            md={2} 
            xs={2} className="img-col">
              <img
                src={
                  props.isLoggedIn
                    ? props.user.avatar?.avatar
                    : "https://res.cloudinary.com/shakalondon/image/upload/v1638347322/Papaya/afro-profile_guv3qt.jpg"
                }
                alt="User Avatar"
                className="rounded-circle"
                id="write-review-av"
                style={{
                  width: `${props.isLoggedIn ? "3rem" : "3.5rem"}`,
                  height: `${props.isLoggedIn ? "3rem" : "3.5rem"}`,
                  objectFit: "cover",
                }}
              />
            </Col>
            <Col 
            xs={4} 
            sm={4} 
            md={4} className="px-0 my-auto">
              <Container className="px-2">
                <Row>
                  <Col sm={6} md={12} className="px-0">
                    <h5 className="px-0 mb-0">{`${props.user.name} ${props.user.surname}`}</h5>
                  </Col>
                </Row>
                <Row>
                  <Col sm={6} md={12} className="px-0">
                    <h6 className="px-0 mb-0">Write a review</h6>
                  </Col>
                </Row>
              </Container>
              {/* <FontAwesomeIcon icon={faChevronRight}/> */}
            </Col>
            <Col
            sm={6}
            xs={6}
              md={6}
              className="d-flex align-items-center px-0 justify-content-end"
            >
              <div className="responsive-hide">
              <StarRating
                current={0}
                numberOfStars={5}
                fontSize={"3rem"}
                website={props.profile.website}
                relocate={true}
                selected={selected}
              />
              </div>
              <div className="responsive-show">
              <StarRating
                current={0}
                numberOfStars={5}
                fontSize={"1.5rem"}
                website={props.profile.website}
                relocate={true}
                selected={selected}
              />
              </div>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}
