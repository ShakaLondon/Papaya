import {
  Container,
  Row,
} from "react-bootstrap";
import { useEffect } from "react";
import { registerAction } from "../../redux/actions/auth";
import { connect, useDispatch } from "react-redux";
import { useLocation } from "react-router";
import LoadingStar from "./loading-star";
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

const LoadingSpinner = ({
  colorChange,
}) => {
  const locationUrl = useLocation();

  console.log(locationUrl);

  const routePath = locationUrl.pathname;
  console.log(routePath);

  const businessNamePath = routePath.replace("/review/", "www.");
  console.log(businessNamePath);

  const dispatch = useDispatch();

  //   const [updateUser, setUpdateUser] = useState({
  //       email: userProf.email,
  //       name: userProf.name,
  //       surname: userProf.surname,
  //     })

  useEffect(() => {
    dispatch(colorChangeAction(false))
    dispatch(openNavAction(false))
  }, [dispatch])

  // const [colorChange, setColorchange] = useState(false);

  useEffect(() => {
    const appPages = document.getElementsByClassName("scrollNav");

    console.log(appPages);

    const elemArray = Array.from(appPages);

    const changeNavbarColor = (scroll) => {
      if (scroll >= 30) {
        dispatch(colorChangeAction(true));
      } else {
        dispatch(colorChangeAction(false));
      }
    };

    elemArray.forEach((page) => {
      page.addEventListener("scroll", () => {
        console.log(page.scrollTop);

        changeNavbarColor(page.scrollTop);
      });
    });
    return () => {
      // window.removeEventListener("scroll", listenScrollEvent);
    };
  }, [dispatch]);




  return (
    // <>
    <Container
      fluid
      // id="loading-app-component"
      className="mx-0 d-flex justify-content-center px-0"
      style={{ height: "800px" }}
    >
      <Container
        fluid
        // id="loading-container"
        className="flex-row mx-0 px-0"
      >
        <Row className="mx-0 px-0 container-fluid">
          <LoadingStar colour={"#ef7c53"} position={"front"} />
          <LoadingStar colour={"#ffef93"} position={"back"} />
        </Row>
      </Container>
    </Container>
  );
  // }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoadingSpinner);
