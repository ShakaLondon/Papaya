import { Card, Container, Row, Col } from "react-bootstrap";
import React, { Component, } from "react";

export default class ReviewCardMain extends Component {
  // export default function ReviewCardMain ({review}) {

  // const [review, setReviews] = useState(props.review);

  // constructor(props) {
  //     super(props);
  //     this.state = {
  //       review: this.props.review,
  //     };
  //   }

  //   shouldComponentUpdate(nextProps, nextState) {
  //     return this.state.value != nextState.value;
  //   }

  render() {
    return (
      <Container fluid className="px-2 py-2 mx-0" key={this.props.review?._id}>
        <Card className="pb-0 px-4" style={{ width: "100%", height: "100%" }}>
          <Row>
            <Col md={12} className="px-0">
              <Card.Body className="px-0">
                <h6 className="mb-0">{this.props.review?.comment}</h6>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    );
  }
}
