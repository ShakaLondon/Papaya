import { Container, Row, Col } from "react-bootstrap";
import AddRatingContainer from "./profile-cards/add-rating";
import ReviewHeader from "./profile-cards/review-header";
import ReviewCard from "./profile-cards/review-card";
import BusinessTrans from "./profile-cards/business-transparency";
import BusinessInfo from "./profile-cards/business-information";
import DropdownSection from "./profile-cards/dropdown-section";
import { registerAction } from "../../redux/actions/auth";
import { colorChangeAction, openNavAction } from "../../redux/actions";
import { connect, } from "react-redux";


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

const BusinessMain = ({
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
  profile,
  user,
  score
}) => {
  return (
    <Container id="business-main-container" className={ `${sideMenuState ? "" : "container-padding"}`}>
       <Row className="mx-0 px-0">
        <Col md={12} xs={12} sm={12} className="hide-column dropdown-section-hide">
          <DropdownSection  profile={profile} user={user} />
        </Col>
      </Row>
      <Row className="mx-0 px-0">
        <Col md={8} sm={12} xs={12}>
          <AddRatingContainer
            profile={profile}
            user={user}
            isLoggedIn={isLoggedIn}
          />
          <ReviewHeader
            profile={profile}
            user={profile}
            score={score}
            loading={loading}
          />
          <ReviewCard profile={profile} user={user} />
        </Col>
        <Col md={4} xs={4} sm={4} className="hide-column">
          <BusinessTrans profile={profile} user={user} />
          <BusinessInfo profile={profile} user={user} />
        </Col>
      </Row>
    </Container>
  );
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessMain);