import NavBar from "../components/navbar-strip";
import SideMenu from "../components/side-menu";
import { connect } from "react-redux";
import { openNavAction } from "../redux/actions";
import { Container, Row, Col } from "react-bootstrap";
import MainSearch from "../components/main/main-jumbo";
import MainContainer from "../components/main";
import Categories from "../components/categories";
import Footer from "../components/footer";

const mapStateToProps = (state) => ({ sideMenuState: state.appState.sideMenu });
const mapDispatchToProps = (dispatch) => ({
  setMenuState: (action) => {
    dispatch(openNavAction(action));
  },
});

const HomePage = ({ sideMenuState, setMenuState }) => {
  return (
    <Container fluid id="main-app" className="mx-0 px-0">
      <NavBar colour="rgba(255, 255, 255, 0)" />
      <Container fluid id="main-app-body" className="px-0 mx-0">
        <Row className="full-height mx-0 px-0">
          <Col sm={12} md={sideMenuState ? 9 : 12} className={`px-0 ${sideMenuState ? "mainpageSmall" : " "}`}>
            {/* <Container className="px-0 flex-row"> */}
            <MainContainer />
            {/* <Footer/> */}
            {/* </Container> */}
          </Col>
          {sideMenuState && <Col sm={12} md={3} className="px-0">
             <SideMenu />
          </Col>
}
        </Row>
      </Container>
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
