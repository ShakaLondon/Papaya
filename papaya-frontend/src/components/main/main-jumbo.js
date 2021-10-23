import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function MainJumbo (props) {

    return (
    
        <Container fluid className="px-0">
            <div className="jumbotron flex-row container-fluid" id="main-jumbo">
                <div id="jumbo-contents">
                    <h1 id="brand-heading">Papaya.</h1>
                    <p id="brand-tag">Find product reviews from people just like you!</p>
                    
                    <p id="brand-sub">Read Reviews. Write Reviews, Save Money.</p>
                </div>
            </div>
        </Container>

    );

  }