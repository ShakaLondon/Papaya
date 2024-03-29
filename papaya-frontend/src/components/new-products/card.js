import { Card, Button, Container, } from "react-bootstrap";

export default function ProductCard(props) {
  return (
    <Container fluid className="d-flex px-2 py-2 justify-content-center">
      <Card>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
