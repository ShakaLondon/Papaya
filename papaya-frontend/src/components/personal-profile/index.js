import {
  Container,
  Row,
} from "react-bootstrap";
import Footer from "../footer";
import { useEffect } from "react";
import { registerAction } from "../../redux/actions/auth";
import { connect, useDispatch } from "react-redux";
import ProfileNav from "./profile-nav";
import ProfileMain from "./profile-main";
import LoadingSpinner from "../loading/index";
import { colorChangeAction, openNavAction } from "../../redux/actions";

const mapStateToProps = (state) => ({
  error: state.appState.error,
  loading: state.appState.loading,
  isLoggedIn: state.user.isLoggedIn,
  userFound: state.user.userFound,
  userProf: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  //functions
  register: (userObj) => dispatch(registerAction(userObj)),
  colorChange: (action) => dispatch(colorChangeAction(action)),
  setMenuState: (action) => {
    dispatch(openNavAction(action));
  },
});

const ProfileContainer = ({
  login,
  loading,
  error,
  isLoggedIn,
  userFound,
  register,
  userProf,
  setMenuState,
  colorChange
}) => {

  const dispatch = useDispatch();


  // const [userInfo, setUserInfo] = useState({
  //   email: "",
  //   password: "",
  //   name: "",
  //   surname: "",
  //   username: "",
  //   dateOfBirth: "",
  // });

  useEffect(() => {
    dispatch(colorChangeAction(false))
    dispatch(openNavAction(false))
  }, [dispatch])


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   register(userInfo);
  // };

  // const handleChange = (e) => {
  //   console.log(e.target.value);
  //   let name = e.target.name;
  //   setUserInfo({ ...userInfo, [name]: e.target.value });
  // };

  //   if (isLoggedIn) {
  //     return <Redirect to='/main' />
  // } else {
  return (
    <>
      <Container
        fluid
        id="profile-app-component"
        className="mx-0 d-flex justify-content-center px-0"
      >
        {loading ? (
          <Container fluid id="profile-form" className="flex-row mx-0 px-0">
            <LoadingSpinner />
          </Container>
        ) : (
          <Container fluid id="profile-form" className="flex-row mx-0 px-0">
            {/* <Row className="mx-0 px-0" style={{ backgroundColor: "#ffd800"}}> */}
            {/* <Col md={12} id="profile-topbar" className="d-inline-flex justify-content-center align-items-center my-0">
                        <h1 id="profile-brand-h1" className="brand-heading-h1 mb-0 mx-2">Papaya.</h1>
                    </Col> */}
            {/* <Col md={9} className="d-flex align-items-center">
                        <h1 className="brand-heading-h1 mb-0">Papaya.</h1>
                    </Col> */}
            {/* </Row> */}
            <Row className="mx-0 px-0">
              <ProfileNav user={userProf} />
            </Row>
            <Row className="mx-0 px-0">
              <ProfileMain user={userProf} />
            </Row>
          </Container>
        )}
      </Container>
      <Footer />
    </>
  );
  // }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
