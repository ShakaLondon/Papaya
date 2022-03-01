import {
  Button,
  Container,
  Form,
  FloatingLabel,
  Row,
  Col,
} from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import { loginAction, logoutAction } from "../../redux/actions/auth.js";
import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { colorChangeAction, openNavAction } from "../../redux/actions";

const mapStateToProps = (state) => ({
  error: state.appState.error,
  loading: state.appState.loading,
  isLoggedIn: state.user.isLoggedIn,
  userFound: state.user.userFound,
});

const mapDispatchToProps = (dispatch) => ({
  //functions
  login: (email, password) => dispatch(loginAction(email, password)),
  logout: () => dispatch(logoutAction()),
  setMenuState: (action) => {
    dispatch(openNavAction(action));
  },
  colorChange: (action) => dispatch(colorChangeAction(action)),
});

const LoginContainer = ({
  login,
  loading,
  error,
  isLoggedIn,
  userFound,
  logout,
  setMenuState,
  colorChange
}) => {

  const dispatch = useDispatch();


  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    dispatch(colorChangeAction(false))
    dispatch(openNavAction(false))
  }, [dispatch])

  const handleSubmit = (e) => {
    e.preventDefault();
    login(userInfo.email, userInfo.password);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    let name = e.target.name;
    setUserInfo({ ...userInfo, [name]: e.target.value });
  };

  if (isLoggedIn) {
    return <Redirect to="/main" />;
  } else if (!isLoggedIn && userFound === null) {
    logout();
    return <Redirect to="/register" />;
  } else {
    return (
      <>
        <Container
          fluid
          id="login-app-component"
          className="mx-auto d-flex justify-content-center"
        >
          <Container fluid id="login-form" className="flex-row my-auto">
            <Row>
              <Col
                md={12}
                className="d-inline-flex justify-content-center align-content-center my-3"
              >
                <img
                  src="https://res.cloudinary.com/shakalondon/image/upload/v1636974558/Papaya/papaya-round_y4c6uq.png"
                  alt="Papaya Logo"
                  id="papaya-logo-login"
                  className="d-flex align-self-center mx-2"
                />
                <h1 className="brand-heading-h1 mb-0 mx-2">Papaya.</h1>
              </Col>
              {/* <Col md={9} className="d-flex align-items-center">
                        <h1 className="brand-heading-h1 mb-0">Papaya.</h1>
                    </Col> */}
            </Row>
            <Row>
              <Col md={12}></Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form onSubmit={handleSubmit}>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                  >
                    <Form.Control
                      type="email"
                      value={userInfo.email}
                      onChange={handleChange}
                      name="email"
                      placeholder="name@example.com"
                      className="register-input"
                    />
                  </FloatingLabel>
                  <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control
                      type="password"
                      value={userInfo.password}
                      onChange={handleChange}
                      name="password"
                      placeholder="Password"
                      className="register-input"
                    />
                  </FloatingLabel>
                  <Button
                    type="submit"
                    className="container-fluid rounded-pill text-center my-4 py-2 registerButton"
                  >
                    <h3>Login</h3>
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </Container>
      </>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
