import { Container, Row, Col } from "react-bootstrap";
import AddReviewContainer from "./review-form";

export default function ReviewMain(props) {
  return (
    <Container id="review-main-container">
      <Row className="mx-0 px-0">
        <Col md={12}>
          <AddReviewContainer
            profile={props.profile}
            reDirect={props.reDirect}
          />
        </Col>
        {/* <Col md={4}>
                   

                </Col> */}
      </Row>
    </Container>
  );
}
