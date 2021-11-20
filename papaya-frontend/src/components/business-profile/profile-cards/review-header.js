import { faSearch, faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Card, Button, Container, Row, Col, Form, FloatingLabel, FormControl, ProgressBar, InputGroup } from 'react-bootstrap'
import { connect } from 'react-redux';
import { openNavAction,  } from '../../../redux/actions';
import { updateUserAction, updateUserImageAction, updateUserCoverAction } from '../../../redux/actions/user'
import FilesUploadComponent from '../upload';
import Keywords from './keywords.js'




const mapStateToProps = (state) => ({ 
    sideMenuState: state.appState.sideMenu,
    userProf: state.user
})

const mapDispatchToProps = (dispatch) => ({
  setMenuState: (action) => {
    dispatch(openNavAction(action))
  },

  updateUserProf: (action) => {
    dispatch(updateUserAction(action))
  },

  updateUserImage: (action) => {
    dispatch(updateUserImageAction(action))
  },

  updateUserCover: (action) => {
      dispatch(updateUserCoverAction(action))
  }
})


const ReviewHeader = ({
    sideMenuState,
    setMenuState,
    userProf,
    updateUserProf,
    updateUserImage,
    updateUserCover
}) => { 

      const [percentage, setPercentage] = useState(30)


    return (
        <Card style={{ width: '100%' }} className="my-4 pt-4 profileCard">
            <Card.Body>
                {/* <Card.Title > */}
                <h4 className="px-2 mb-1">Reviews</h4>
                {/* </Card.Title> */}
                <hr className="mx-2"/>
                
                {/* EXCELLENT BAR */}
                <Container  className="px-2 py-2">
                
                    
                    <Row>
                        <Col md={1} className="">
                            <Row>
                            <Form>
                                    <div key={`default-checkbox`} className="">
                                    <Form.Check 
                                        type={'checkbox'}
                                        id={`default-checkbox`}
                                    />
                                    </div>
                                </Form>
                            </Row>
                        </Col>
                        <Col md={2} className="px-0 d-flex align-items-center">
                            <Row className="px-0">
                            <h6 className="px-0 mb-0">Excellent</h6>
                            </Row>
                        </Col>
                        <Col md={8} className="px-0 flex-row align-self-center">
                            <Row>
                                <Container>
                                <ProgressBar now={percentage} variant="success"/>
                                </Container>
                            </Row>
                        </Col>
                        <Col md={1} className="d-flex justify-content-end px-2 align-items-center">
                            <Row>
                            <h6 className=" mb-0">{`${percentage}%`}</h6>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                {/* GOOD BAR */}
                <Container  className="px-2 py-2">
                    
                    <Row>
                        <Col md={1} className="">
                            <Row>
                            <Form>
                                    <div key={`default-checkbox`} className="">
                                    <Form.Check 
                                        type={'checkbox'}
                                        id={`default-checkbox`}
                                    />
                                    </div>
                                </Form>
                            </Row>
                        </Col>
                        <Col md={2} className="px-0 d-flex align-items-center">
                            <Row className="px-0">
                            <h6 className="px-0 mb-0">Good</h6>
                            </Row>
                        </Col>
                        <Col md={8} className="px-0 flex-row align-self-center">
                            <Row>
                                <Container>
                                <ProgressBar now={percentage} variant="success"/>
                                </Container>
                            </Row>
                        </Col>
                        <Col md={1} className="d-flex justify-content-end px-2 align-items-center">
                            <Row>
                            <h6 className=" mb-0">{`${percentage}%`}</h6>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                {/* AVERAGE BAR */}
                <Container  className="px-2 py-2">
                    
                    <Row>
                        <Col md={1} className="">
                            <Row>
                            <Form>
                                    <div key={`default-checkbox`} className="">
                                    <Form.Check 
                                        type={'checkbox'}
                                        id={`default-checkbox`}
                                    />
                                    </div>
                                </Form>
                            </Row>
                        </Col>
                        <Col md={2} className="px-0 d-flex align-items-center">
                            <Row className="px-0">
                            <h6 className="px-0 mb-0">Average</h6>
                            </Row>
                        </Col>
                        <Col md={8} className="px-0 flex-row align-self-center">
                            <Row>
                                <Container>
                                <ProgressBar now={percentage} variant="warning"/>
                                </Container>
                            </Row>
                        </Col>
                        <Col md={1} className="d-flex justify-content-end px-2 align-items-center">
                            <Row>
                            <h6 className=" mb-0">{`${percentage}%`}</h6>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                {/* POOR BAR */}
                <Container  className="px-2 py-2">
                    
                    <Row>
                        <Col md={1} className="">
                            <Row>
                            <Form>
                                    <div key={`default-checkbox`} className="">
                                    <Form.Check 
                                        type={'checkbox'}
                                        id={`default-checkbox`}
                                    />
                                    </div>
                                </Form>
                            </Row>
                        </Col>
                        <Col md={2} className="px-0 d-flex align-items-center">
                            <Row className="px-0">
                            <h6 className="px-0 mb-0">Poor</h6>
                            </Row>
                        </Col>
                        <Col md={8} className="px-0 flex-row align-self-center">
                            <Row>
                                <Container>
                                <ProgressBar now={percentage} variant="danger"/>
                                </Container>
                            </Row>
                        </Col>
                        <Col md={1} className="d-flex justify-content-end px-2 align-items-center">
                            <Row>
                            <h6 className=" mb-0">{`${percentage}%`}</h6>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                {/* BAD BAR */}
                <Container  className="px-2 py-2">
                    
                    <Row>
                        <Col md={1} className="">
                            <Row>
                            <Form>
                                    <div key={`default-checkbox`} className="">
                                    <Form.Check 
                                        type={'checkbox'}
                                        id={`default-checkbox`}
                                    />
                                    </div>
                                </Form>
                            </Row>
                        </Col>
                        <Col md={2} className="px-0 d-flex align-items-center">
                            <Row className="px-0">
                            <h6 className="px-0 mb-0">Bad</h6>
                            </Row>
                        </Col>
                        <Col md={8} className="px-0 flex-row align-self-center">
                            <Row>
                                <Container>
                                <ProgressBar now={percentage} variant="danger"/>
                                </Container>
                            </Row>
                        </Col>
                        <Col md={1} className="d-flex justify-content-end px-2 align-items-center">
                            <Row>
                            <h6 className=" mb-0">{`${percentage}%`}</h6>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <Container className="px-2 py-3">
                    <Keywords keywords={["All Reviews", "Service", "Booking", "Options"]} />
                
                        </Container>
                        <Container className="px-2 py-3">
                        <Form className="container-fluid d-flex px-0" id="search-review-form">
                        <InputGroup className="">
                        <Button id="button-addon3" className="px-4 searchBarButton">
                            <FontAwesomeIcon icon={faSearch}/>
                            </Button>
                            <FormControl
                            placeholder="Company, Category or Product Type"
                            aria-label="Company, Category or Product Type"
                            aria-describedby="basic-addon2"
                            className="px-4"
                            id="search-input"
                            />
                            
                            
                        </InputGroup>
                        </Form>
                        </Container>
            </Card.Body>
        </Card>
    );
  }

  export default connect(mapStateToProps, mapDispatchToProps)(ReviewHeader)