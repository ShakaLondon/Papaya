import { Container, Row, Col } from "react-bootstrap";
import AddRatingContainer from "./profile-cards/add-rating";
import ReviewHeader from "./profile-cards/review-header";
import ReviewCard from "./profile-cards/review-card";
import BusinessTrans from "./profile-cards/business-transparency";
import BusinessInfo from "./profile-cards/business-information";
import DropdownSection from "./profile-cards/dropdown-section";

export default function BusinessMain(props) {
  return (
    <Container id="business-main-container" className="container-padding">
       <Row className="mx-0 px-0">
        <Col md={12} xs={12} sm={12} className="hide-column dropdown-section-hide">
          <DropdownSection  profile={props.profile} user={props.user} />
        </Col>
      </Row>
      <Row className="mx-0 px-0">
        <Col md={8} sm={12} xs={12}>
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
        <Col md={4} xs={4} sm={4} className="hide-column">
          <BusinessTrans profile={props.profile} user={props.user} />
          <BusinessInfo profile={props.profile} user={props.user} />
        </Col>
      </Row>
    </Container>
  );
}
