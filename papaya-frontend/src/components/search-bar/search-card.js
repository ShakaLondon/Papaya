import {
    Card,
    Container,
    ListGroup,
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
          className="mx-0 px-0 d-flex justify-content-center px-0 scrollNav"
          id="search-dropdown"
        >
            {searchResult?.Categories.length > 0 && <CategorySearch searchResult={searchResult}/>}
            {searchResult?.Businesses.length > 0 && <BusinessSearch searchResult={searchResult}/>}

        </Container>
    );
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchBarCard);
  