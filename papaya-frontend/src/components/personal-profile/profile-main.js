import { Container, Row, Col } from "react-bootstrap";
import PersonalSettings from "./profile-cards/personal-settings";
import ProfileDownload from "./profile-cards/profile-download";
import ProfileDelete from "./profile-cards/delete-profile";
import { connect, } from "react-redux";
import { registerAction } from "../../redux/actions/auth";
import { colorChangeAction, openNavAction } from "../../redux/actions";

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

const ProfileMain = ({
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
    <Container id="profile-main-container" className={ `${sideMenuState ? "" : "container-padding"}`}>
      <Row className="mx-0 px-2">
        <Col md={8} xs={12} sm={12}>
          <PersonalSettings />
          <ProfileDownload />
          <ProfileDelete />
        </Col>
        <Col md={4} xs={12} sm={12}></Col>
      </Row>
    </Container>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileMain);
