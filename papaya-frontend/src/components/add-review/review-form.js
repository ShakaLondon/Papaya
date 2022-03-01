import {
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { connect } from "react-redux";
import { loginAction, logoutAction } from "../../redux/actions/auth.js";
import ReviewCard from "./review-card";

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
});

const AddReviewContainer = ({
  login,
  reDirect,
}) => {
  // const [userInfo, setUserInfo] = useState({
  //   email: "",
  //   password: "",
  // });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   login(userInfo.email, userInfo.password);
  // };

  // const handleChange = (e) => {
  //   console.log(e.target.value);
  //   let name = e.target.name;
  //   setUserInfo({ ...userInfo, [name]: e.target.value });
  // };


  return (
    <>
      <Container
        fluid
        id="review-form-component"
        className="mx-auto d-flex justify-content-center"
      >
        <Container fluid id="review-form" className="flex-row my-auto px-0">
          <Container className="px-0" style={{ top: "40" }}>
            
            <Row>
              <Col md={12}>
             
                <ReviewCard reDirect={reDirect} />
              </Col>
            </Row>
          </Container>
        </Container>
      </Container>
    </>
  );
};
//   }

export default connect(mapStateToProps, mapDispatchToProps)(AddReviewContainer);
