
import { Container, Row, Col } from "react-bootstrap";
import PublicProfile from "./profile-cards/public-profile";

export default function ProfileMain(props) {
  return (
    <Container id="public-profile-main-container" className="container-padding">
      <Row className="mx-0 px-0">
        <Col md={8}>
          <PublicProfile profile={props.profile} />
        </Col>
        <Col md={4}></Col>
      </Row>
    </Container>
  );
}
