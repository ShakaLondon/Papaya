import {
  Navbar,
  Container,
  Form,
  FormControl,
  Button,
  Row,
  Col,
  InputGroup,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarcode, faSearch } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { openNavAction } from "../../redux/actions";

const mapStateToProps = (state) => ({ sideMenuState: state.appState.sideMenu });
const mapDispatchToProps = (dispatch) => ({
  setMenuState: (action) => {
    dispatch(openNavAction(action));
  },
});

const SearchBar = ({ sideMenuState, setMenuState }) => {
  return (
    <Navbar expand="lg" id="search-bar-strip" className="d-flex align-items-center my-0 py-0">
      <Container fluid className="d-flex mx-0 justify-content-center align=items-center my-0 py-0">
        <Row>
          <Col md={12}>
            <Form
              className="container-fluid d-flex my-4 mx-3 onTop"
              id="search-bar-form"
            >
              <InputGroup className="">
                <FormControl
                  placeholder="Company, Category or Product Type"
                  aria-label="Company, Category or Product Type"
                  aria-describedby="basic-addon2"
                  className="px-4"
                  id="search-input"
                />
                <Button id="button-addon3" className="px-4 searchBarButton">
                  <img
                    src="https://img.icons8.com/pastel-glyph/64/000000/barcode-scanner--v2.png"
                    id="searchBarcode"
                  />
                </Button>
                <Button id="button-addon2" className="px-4 searchBarButton">
                  <FontAwesomeIcon icon={faSearch} className="fa-md"/>
                </Button>
              </InputGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
