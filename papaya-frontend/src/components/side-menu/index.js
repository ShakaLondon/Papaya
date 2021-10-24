import { Container, Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function SideMenu (props) {

    return (
    
        <Container fluid className="jumbotron d-flex align-content-around justify-content-center" id="side-nav-jumbo">
            {/* <div id="sidenav-topbar" className="fixed-top"></div> */}
            <Row id="side-menu-row" className="py-auto">
                <Col md={12}>
                    <div id="sidenav-topbar"></div>
                </Col>
                <Col md={12} className="py-4">
                    <h1 className="display-6 text-center py-2 mb-0">Categories</h1>
                    <h1 className="display-6 text-center py-2 mb-0">Companies</h1>
                    <h1 className="display-6 text-center py-2 mb-0">My Reviews</h1>
                    <h1 className="display-6 text-center py-2 mb-0">Profile</h1>
                </Col>
                {/* <Col md={12} className="side-text-box">
                    <h1 className="display-6 text-center py-0 mb-0">Companies</h1>
                </Col>
                <Col md={12} className="side-text-box">
                    <h1 className="display-6 text-center py-0 mb-0">My Reviews</h1>
                </Col>
                <Col md={12} className="mb-3 side-text-box">
                    <h1 className="display-6 text-center py-0 mb-0">Profile</h1>
                </Col> */}
                <Col md={12} className="px-5 side-text-button py-4">
                    <Button href="/login" className="container-fluid rounded-pill text-center mt-2 mb-1 py-1 menuButton">
                        <h3>Login</h3>
                    </Button>
                    <Button href="/register" className="container-fluid rounded-pill text-center mb-2 mt-1 py-1 menuButton">
                        <h3>Sign Up</h3>
                    </Button>
                </Col>
                {/* <Col md={12} className="px-5 side-text-button" id="bottom-side">
                    <Button className="container-fluid rounded-pill text-center mb-2 mt-1 py-1 menuButton">
                        <h3>Sign Up</h3>
                    </Button>
                </Col> */}
                
            </Row>

        </Container>

    );

  }