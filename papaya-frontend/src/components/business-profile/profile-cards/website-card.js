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

export default function WebsiteContainer(props) {
  return (
    <Card
      style={{ width: "100%" }}
      className="my-4 py-4 profileCard"
      id="websiteCard"
    >
      <a href={`https://${props.website}`}>
        <Card.Body>
          <Container className="px-2">
            <Row>
              <Col md={10} className="px-4">
                <Row>
                  <Col md={2} className="d-flex align-items-center px-2">
                    <FontAwesomeIcon
                      icon={faGlobe}
                      style={{ width: "1.5rem", height: "1.5rem" }}
                    />
                  </Col>
                  <Col md={10} className="d-flex align-items-center px-0">
                    <h4 className="">{props.website}</h4>
                  </Col>
                </Row>
                <Row>
                  <h6 className="mb-0">
                    <u>Visit this website</u>
                  </h6>
                </Row>
              </Col>
              <Col md={2} className="d-flex align-items-center px-3">
                <FontAwesomeIcon icon={faChevronRight} />
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </a>
    </Card>
  );
}
