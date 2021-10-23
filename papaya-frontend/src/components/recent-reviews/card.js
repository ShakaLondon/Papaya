import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function ReviewCard (props) {

    return (
    
        <Container fluid className="px-2 py-2 mx-0">
            
                <Card className="pb-0 px-4" style={{ width: '100%', height: "100%" }}>
                    <Row>
                    {/* <Col md={3} className="d-flex align-items-center justify-content-center px-0">
                        <Card.Img className="mx-2" src={props.iconLink} style={{ height: "2rem", width: "auto" }}/>
                    </Col> */}
                    <Col md={12} className="px-0">
                        <Card.Body className="px-0">
                            <Card.Title className="mb-0">
                                <h6 className="mb-0">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim ipsum vitae velit bibendum pharetra. Vivamus condimentum luctus sapien, quis interdum nulla lobortis quis. Aenean dapibus mollis ullamcorper. Proin elementum massa ut ligula dignissim, ut mollis mauris consequat. Integer non ipsum sed purus faucibus posuere sed ac orci. Donec nec orci pellentesque, euismod tortor maximus, eleifend magna. Ut eu dignissim lorem. Ut vestibulum velit sapien, eget tristique nunc convallis vitae.
                                </h6>
                            </Card.Title>
                        </Card.Body>
                    
                    </Col>
                    </Row>
                    </Card>
          
            
        </Container>

    );

  }