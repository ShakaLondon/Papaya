import { faStar, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Nav, Container, Navbar, NavDropdown, Row, Col } from "react-bootstrap";
import PublicProfile from "./profile-cards/public-profile";

export default function ProfileMain(props) {
  return (
    <Container id="profile-main-container">
      <Row className="mx-0 px-0">
        <Col md={8}>
          <PublicProfile profile={props.profile} />
        </Col>
        <Col md={4}></Col>
      </Row>
    </Container>
  );
}
