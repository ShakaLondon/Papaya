import {
    Card,
  Col,
    Container,
    ListGroup,
    Row,
  } from "react-bootstrap";
  import { registerAction } from "../../redux/actions/auth";
  import { connect, } from "react-redux";
  import { colorChangeAction, openNavAction } from "../../redux/actions";
import CategorySearch from "./search-options/category-search";
import BusinessSearch from "./search-options/business-search";
  
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
  
  const SearchBarCard = ({
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


// if (searchResult){
    return (

        <Container
          fluid
          className="mx-0 px-0 flex-row justify-content-center px-0 scrollNav w-100"
          id="search-dropdown"
        >
          <Row className="px-0 mx-0">
            <Col md={12} xs={12} sm={12} className="px-0">
              {searchResult?.Categories.length > 0 && <CategorySearch searchResult={searchResult}/>}
            </Col>
          </Row>
          <Row className="px-0 mx-0">
          <Col md={12} xs={12} sm={12} className="px-0">
              {searchResult?.Businesses.length > 0 && <BusinessSearch searchResult={searchResult}/>}
            </Col>
          </Row>
          
        </Container>
    );
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchBarCard);
  