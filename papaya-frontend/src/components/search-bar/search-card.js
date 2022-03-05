import {
    Card,
    Container,
    ListGroup,
  } from "react-bootstrap";
  import { registerAction } from "../../redux/actions/auth";
  import { connect, } from "react-redux";
  import { colorChangeAction, openNavAction } from "../../redux/actions";
  
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
    setMenuState
  }) => {



    return (

        <Container
          fluid
          className="mx-0 px-0 d-flex justify-content-center px-0 scrollNav"
        >
            <Card id="search-card-list" style={{ width: '100%' }}>
                <Card.Header>Featured</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
            </Card>

        </Container>
    );
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchBarCard);
  