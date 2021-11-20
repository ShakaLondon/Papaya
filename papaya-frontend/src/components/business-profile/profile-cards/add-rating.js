import { faGlobe, faStar, faThumbsUp, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Nav, Container, Navbar, NavDropdown, Row, Col, Card } from 'react-bootstrap'
import StarRating from '../../rating-component/index.js';



export default function AddRatingContainer (props) {
    return (
        <Card style={{ width: '100%' }} className="my-4 py-4 profileCard">
            <Card.Body className="py-2">
                <Container  className="px-2">
                    <Row>
                        <Col md={2} className="">
                            <img src={props.profile.avatar.avatar} alt="User Avatar" className="rounded-circle" style={{ width: "3rem", height: "3rem", objectFit: "cover" }}/>
                        </Col>
                        <Col md={4} className="d-inline-flex px-0 align-items-center">
                            <Container className="px-0">
                            <Row>
                                <Col md={12} className="px-0">
                                <h5 className="px-0 mb-0">{`${props.profile.name} ${props.profile.surname}`}</h5>
                                </Col>
                                
                            </Row>
                            <Row>
                            <Col md={12} className="px-0">
                            <h6 className="px-0 mb-0">Write a review</h6>
                                </Col>
                                
                            </Row>
                            </Container>
                            {/* <FontAwesomeIcon icon={faChevronRight}/> */}
                        </Col>
                        <Col md={6}  className="d-flex align-items-center px-2 justify-content-end">
                            <StarRating  currentRating={0} numberOfStars={5} fontSize={"3rem"}/>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );
  }