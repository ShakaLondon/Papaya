import { Container } from "react-bootstrap";


export default function MainJumbo(props) {
  return (
    <Container fluid className="px-0">
      <div className="jumbotron flex-row container-fluid main-jumbo" id="main-jumbo-page">
        <div id="jumbo-contents">
          <h1 id="brand-heading">Papaya.</h1>
          <p id="brand-tag">Find product reviews from people just like you!</p>

          <p id="brand-sub">Read Reviews. Write Reviews, Save Money.</p>
        </div>
      </div>
    </Container>
  );
}
