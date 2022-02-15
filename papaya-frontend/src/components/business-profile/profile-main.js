import { faStar, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Nav, Container, Navbar, NavDropdown, Row, Col } from "react-bootstrap";
import userAuth from "../../services/user/user-auth";
import PersonalSettings from "./profile-cards/review-header";
import AddRatingContainer from "./profile-cards/add-rating";
import ReviewHeader from "./profile-cards/review-header";
import ReviewCard from "./profile-cards/review-card";
import BusinessTrans from "./profile-cards/business-transparency";
import BusinessInfo from "./profile-cards/business-information";

export default function BusinessMain(props) {
  return (
    <Container id="profile-main-container">
      <Row className="mx-0 px-0">
        <Col md={8}>
          <AddRatingContainer
            profile={props.profile}
            user={props.user}
            isLoggedIn={props.sLoggedIn}
          />
          <ReviewHeader
            profile={props.profile}
            user={props.profile}
            score={props.score}
            loading={props.loading}
          />
          <ReviewCard profile={props.profile} user={props.user} />
        </Col>
        <Col md={4}>
          <BusinessTrans profile={props.profile} user={props.user} />
          <BusinessInfo profile={props.profile} user={props.user} />
        </Col>
      </Row>
    </Container>
  );
}
