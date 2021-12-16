import { Card, Container } from "react-bootstrap";
import { useHistory } from "react-router";

function CatKeywords({ keywords }) {

  const history = useHistory()


  return (
    
    <Container className="px-0">
    {keywords.map((word, idx) => (
        <div key={idx} className="ps-0 pe-2">
        <Card onClick={() => history.push(`/search/category/${word.name}`)}
        // style={{ width: '18rem' }}
        >
        <Card.Body className="d-flex px-2 py-2">
          <Card.Text>{word.name}</Card.Text>
          {/* <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text> */}
        </Card.Body>
      </Card>
      </div>

         
         
      ))}
  </Container>
  );
}
export default CatKeywords;