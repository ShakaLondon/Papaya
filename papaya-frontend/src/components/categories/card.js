import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function CategoryCard (props) {

    return (
    
        <Container fluid className="px-0 mx-0">
            
                <Row>
                <Card className="pb-0 px-4" style={{ width: '100%', height: "100%" }}>
                    <Row>
                    <Col md={3} className="d-flex align-items-center justify-content-center px-0">
                        <Card.Img className="mx-2" src={props.iconLink} style={{ height: "2rem", width: "auto" }}/>
                    </Col>
                    <Col md={9} className="px-0">
                        <Card.Body className="px-0">
                            <Card.Title className="mb-0"><h6 className="mb-0">{props.linkTitle}</h6></Card.Title>
                        </Card.Body>
                    
                    </Col>
                    </Row>
                    </Card>
                </Row>
            
        </Container>

    );

  }