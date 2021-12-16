import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';

export default function CategoryCard (props) {

    const history = useHistory()

    return (
    
        <Container fluid className="px-0 mx-0">
            
                <Row>
                <Card className="pb-0 px-3 categoryCard" style={{ width: '100%', height: "100%" }} onClick={() => history.push(`/search/category/${props.linkTitle}`)}>
                    <Row>
                    <Col md={2} className="d-flex align-items-center justify-content-center px-3">
                        {/* <Card.Img className="mx-2" src="https://res.cloudinary.com/shakalondon/image/upload/v1637049769/Papaya/papaya-yellow_yqta5g.png" style={{ height: "1.5rem", width: "auto" }}/>
                    */}
                    <div style={{ fontSize: "1.5rem" }} className="d-flex align-items-center">
                    <span className="icon-papaya-logo"></span>
                        </div>
                        
                        </Col> 
                    <Col md={10} className="px-1">
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