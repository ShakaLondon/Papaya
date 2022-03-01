import { Container } from "react-bootstrap";


export default function LoginJumbo(props) {
  return (
    <Container fluid className="px-0">
      <div className="jumbotron flex-row container-fluid main-jumbo" id="main-jumbo-login">
        <div id="jumbo-contents-login">
          <h1 id="brand-heading">Papaya.</h1>
          <p id="brand-sub">Read Reviews. Write Reviews, Save Money.</p>
        </div>
      </div>
    </Container>
  );
}
