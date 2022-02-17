import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router";

export default function CategoryCard(props) {
  const history = useHistory();

  return (
    <Container fluid className="px-0 mx-0">
      <Row>
        <Col md={12} className="px-0 mx-0">
        <Card
          className="pb-0 px-2 categoryCard"
          style={{ width: "100%", height: "100%" }}
          onClick={() => history.push(`/search/category/${props.linkTitle}`)}
        >
          <Container fluid className="px-0 mx-0">
          <Row className="mx-0 d-flex justify-content-around">
            <Col
              md={2}
              sm={2}
              xs={2}
              className="d-flex align-items-center justify-content-center px-3 categoryCardCol"
            >
              {/* <Card.Img className="mx-2" src="https://res.cloudinary.com/shakalondon/image/upload/v1637049769/Papaya/papaya-yellow_yqta5g.png" style={{ height: "1.5rem", width: "auto" }}/>
               */}
               {/* <Card.Body className="px-0">
                <Card.Title className="mb-0"> */}
              <div
                style={{ fontSize: "1.5rem" }}
                className="d-flex align-items-center"
              >
                <span className="icon-papaya-logo"></span>
              </div>
              {/* </Card.Title>
              </Card.Body> */}
            </Col>
            <Col md={10} sm={10} xs={10} className="px-1 categoryCardCol">
              <Card.Body className="px-0">
                <Card.Title className="mb-0">
                  <h6 className="mb-0  text-truncate">{props.linkTitle}</h6>
                </Card.Title>
              </Card.Body>
            </Col>
          </Row>
          </Container>
        </Card>
        </Col>
      </Row>
    </Container>
  );
}
