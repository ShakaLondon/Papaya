import {
    Card,
  Col,
    Container,
    ListGroup,
    Row,
  } from "react-bootstrap";
  import { registerAction } from "../../../redux/actions/auth";
  import { connect, } from "react-redux";
  import { colorChangeAction, openNavAction } from "../../../redux/actions";
import { useHistory } from "react-router";
import StarRating from "../../rating-component";
  
  const mapStateToProps = (state) => ({
    error: state.appState.error,
    loading: state.appState.loading,
    isLoggedIn: state.user.isLoggedIn,
    userFound: state.user.userFound,
    userProf: state.user,
    colorChangeState: state.appState.colorChange,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    //functions
    register: (userObj) => dispatch(registerAction(userObj)),
    colorChange: (action) => dispatch(colorChangeAction(action)),
    setMenuState: (action) => {
      dispatch(openNavAction(action));
    },
  });
  
  const BusinessSearch = ({
    login,
    loading,
    error,
    isLoggedIn,
    userFound,
    register,
    userProf,
    colorChange,
    colorChangeState,
    setMenuState,
    searchResult
  }) => {

    const history = useHistory()


    const selected = (value) => {
      // console.log(value + "selected")
      // setWriteReview({ ...writeReview, stars: value})
    };


    return (

        <Container
          fluid
          className="mx-0 px-0 d-flex justify-content-center px-0 scrollNav"
        >                     
            <Card id="search-card-list" style={{ width: '100%' }} className="no-radius">
                <Card.Header className="text-bold">{Object.keys(searchResult)[1]}</Card.Header>
                    <ListGroup variant="flush">
                        {searchResult?.Businesses.map((business, idx) => {
                            if (idx < 5) {
                              return (<ListGroup.Item className="" key={business._id} onClick={() => history.push(`/review/${business.website.slice(4)}`)}>
                              
                              <Container fluid className="px-0 mx-0">
                                        <Row className="d-flex px-0 mx-0">
                                          <Col md={1} xs={1} sm={1} className="px-0 mx-0" style={{ width: "auto" }}>
                                            <img
                                                src={business?.avatar.avatar}
                                                alt="Papaya Logo"
                                                className="mx-3 my-3 icon-papaya-logo"
                                                className="papaya-logo-small rounded-circle img-fluid"
                                              />
                                          </Col>
                                          <Col  md={5} xs={5} sm={5}>
                                            {business.businessName}
                                          </Col>
                                          <Col md={5} xs={5} sm={5} className="d-flex w-auto ms-auto justify-content-end px-0">
                                              <StarRating
                                                  current={business.score[0].average}
                                                  fontSize={colorChangeState ? "1.5rem" : "3rem"}
                                                  changeable={false}
                                                  selected={selected}
                                                  
                                                />
                                          </Col>
                                          <Col  md={1} xs={1} sm={1} className="d-flex w-auto justify-content-end align-items-center ps-1">
                                             <h6 className="mb-0">{business.score[0].average.toFixed(1)}</h6>
                                          </Col>
                                        </Row>
                                      </Container>
                              </ListGroup.Item>
                        )}})
                            }
                    </ListGroup>
            </Card>

        </Container>
    );
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(BusinessSearch);