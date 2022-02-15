import { Card, Container } from "react-bootstrap";

function Keywords({ keywords }) {
  return (
    <div className="d-inline-flex">
      {keywords.map((word, idx) => (
        <div key={idx} className="d-flex ps-0 pe-1">
          <Card
          // style={{ width: '18rem' }}
          >
            <Card.Body className="px-2 py-2">
              <Card.Text>{word}</Card.Text>
              {/* <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text> */}
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}
export default Keywords;
