import NavBar from "../components/navbar-strip";
import SideMenu from "../components/side-menu";
import { connect } from "react-redux";
import { openNavAction } from "../redux/actions";
import { Container, Row, Col } from "react-bootstrap";
import ReviewContainer from "../components/add-review/index";


const mapStateToProps = (state) => ({ sideMenuState: state.appState.sideMenu });
const mapDispatchToProps = (dispatch) => ({
  setMenuState: (action) => {
    dispatch(openNavAction(action));
  },
});

// const usePageLocation = () => {
//     const pagelocation = useLocation()
//     const location = pagelocation.pathname
//     console.log(location)

//     return location
// }

const WriteReview = ({ sideMenuState, setMenuState }) => {
  // let location = useLocation();

  // useEffect(() => {
  //   console.log(location)
  //   return function() {
  //     location = null
  //   };
  // });

  return (
    <Container fluid id="review-app" className="mx-0 px-0">
      <NavBar colour="rgba(255, 255, 255, 0)" />
      <Container fluid id="review-app-body" className="px-0 mx-0">
        <Row className="full-height mx-0 px-0">
          <Col
          xs={12}
            sm={12}
            md={sideMenuState ? 9 : 12}
            className={`px-0 mx-0 scrollNav ${sideMenuState ? "mainpageSmall" : " "}`}
            id="review-app-main"
          >
            <Container className="px-0" style={{ maxWidth: "100vw" }}>
              <ReviewContainer />
              {/* <Footer/> */}
            </Container>
          </Col>
          {sideMenuState && <Col sm={12} md={3} className="px-0 onTop">
             <SideMenu />
          </Col>
            }
        </Row>
      </Container>
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(WriteReview);
