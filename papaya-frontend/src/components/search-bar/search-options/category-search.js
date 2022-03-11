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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThLarge } from "@fortawesome/free-solid-svg-icons";
  
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
  
  const CategorySearch = ({
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



    return (

        <Container
          fluid
          className="mx-0 px-0 d-flex justify-content-center px-0 scrollNav"
        >
            <Card id="search-card-list" className="no-radius" style={{ width: '100%' }}>
                <Card.Header className="text-bold">{Object.keys(searchResult)[0]}</Card.Header>
                    <ListGroup variant="flush">
                        {searchResult?.Categories.map((category, idx) => {

                          if (idx < 5) {
                            return (<ListGroup.Item key={category._id} onClick={() => history.push(`/search/category/${category.name}`)}>
                              
                                      <Container fluid className="px-0 mx-0">
                                        <Row className="px-0 mx-0">
                                          <Col md={1} xs={1} sm={1} className="px-0 mx-0" style={{ width: "auto" }}>
                                            <img
                                                src="https://res.cloudinary.com/shakalondon/image/upload/v1637049769/Papaya/papaya-yellow_yqta5g.png"
                                                alt="Papaya Logo"
                                                className="mx-3 my-3 icon-papaya-logo"
                                                className="papaya-logo-small"
                                              />
                                          </Col>
                                          <Col  md={11} xs={11} sm={11}>
                                            {category.name}
                                          </Col>
                                        </Row>
                                      </Container>
                                    </ListGroup.Item>)
                          }
                          
                        })}
                    </ListGroup>
            </Card>

        </Container>
    );
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CategorySearch);