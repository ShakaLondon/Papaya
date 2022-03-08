import {
    Card,
    Container,
    ListGroup,
  } from "react-bootstrap";
  import { registerAction } from "../../../redux/actions/auth";
  import { connect, } from "react-redux";
  import { colorChangeAction, openNavAction } from "../../../redux/actions";
import { useHistory } from "react-router";
  
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



    return (

        <Container
          fluid
          className="mx-0 px-0 d-flex justify-content-center px-0 scrollNav"
        >
            <Card id="search-card-list" style={{ width: '100%' }}>
                <Card.Header className="text-bold">{Object.keys(searchResult)[1]}</Card.Header>
                    <ListGroup variant="flush">
                        {searchResult?.Businesses.map((business) => (
                            <ListGroup.Item key={business._id} onClick={() => history.push(`/review/${business.website.slice(4)}`)}>{business.businessName}</ListGroup.Item>
                        ))}
                    </ListGroup>
            </Card>

        </Container>
    );
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(BusinessSearch);