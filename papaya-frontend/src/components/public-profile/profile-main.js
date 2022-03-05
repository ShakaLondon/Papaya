
import { Container, Row, Col } from "react-bootstrap";
import PublicProfile from "./profile-cards/public-profile";
import { connect, } from "react-redux";
import { colorChangeAction, openNavAction } from "../../redux/actions";
import { registerAction } from "../../redux/actions/auth";

const mapStateToProps = (state) => ({
  error: state.appState.error,
  loading: state.appState.loading,
  isLoggedIn: state.user.isLoggedIn,
  userFound: state.user.userFound,
  userProf: state.user,
  colorChangeState: state.appState.colorChange,
  sideMenuState: state.appState.sideMenu,
});

const mapDispatchToProps = (dispatch) => ({
  //functions
  register: (userObj) => dispatch(registerAction(userObj)),
  colorChange: (action) => dispatch(colorChangeAction(action)),
  setMenuState: (action) => {
    dispatch(openNavAction(action));
  },
});

const PublicProfileMain = ({
  login,
  loading,
  error,
  isLoggedIn,
  userFound,
  register,
  userProf,
  colorChange,
  colorChangeState,
  sideMenuState,
  profile
}) => {
  return (
    <Container id="public-profile-main-container" className={ `${sideMenuState ? "" : "container-padding"}`}>
      <Row className="mx-0 px-0">
        <Col md={8}>
          <PublicProfile profile={profile} />
        </Col>
        <Col md={4}></Col>
      </Row>
    </Container>
  );
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PublicProfileMain);