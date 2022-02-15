import { Card, Container } from "react-bootstrap";
import { useHistory } from "react-router";

function CatKeywords({ keywords }) {
  const history = useHistory();

  return (
    <div className="px-0">
      {keywords.map((word, idx) => (
        // <div key={idx} className="ps-0 pe-2">
        <Card
          onClick={() => history.push(`/search/category/${word.name}`)}
          // style={{ width: '18rem' }}
          className="d-inline-flex me-2 mb-2"
          key={word.name + idx}
        >
          <Card.Body className="d-flex px-2 py-2 text-nowrap">
            <Card.Text>{word.name}</Card.Text>
            {/* <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text> */}
          </Card.Body>
        </Card>
        // </div>
      ))}
    </div>
  );
}
export default CatKeywords;
