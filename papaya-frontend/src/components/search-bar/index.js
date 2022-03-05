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
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { connect, useDispatch } from "react-redux";
import { openNavAction, openSearchAction } from "../../redux/actions";
import SearchBarCard from "./search-card.js"
import { useEffect, useRef } from "react";

const mapStateToProps = (state) => ({ 
  sideMenuState: state.appState.sideMenu,
  searchState: state.appState.searchBar,
 });
const mapDispatchToProps = (dispatch) => ({
  setMenuState: (action) => {
    dispatch(openNavAction(action));
  },
  setSearchState: (action) => {
    dispatch(openSearchAction(action));
  },
});

const SearchBar = ({ sideMenuState, setMenuState, setSearchState, searchState }) => {

  const searchNode = useRef();
  const dispatch = useDispatch();


  useEffect(() => {

    const handleClick = (e) => {
      if (searchNode.current.contains(e.target)) {
        // inside click
        return;
      } else {
        // outside click
        dispatch(openSearchAction(false));
        // openMenu(false);
      }
    };


    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [dispatch]);

  const handleClick = (e) => {
    e.preventDefault()
    setSearchState(true)
  };




  return (
    <Navbar expand="lg" id="search-bar-strip" className="d-flex align-items-center my-0 py-0">
      <Container fluid className="d-flex mx-0 justify-content-center align=items-center my-0 py-0">
        <Row>
          <Col md={12}>
            <Form
              className="container-fluid d-block my-4 mx-3 onTop"
              id="search-bar-form"
              ref={searchNode}
            >
              <InputGroup className="input-group-search">
                  <FormControl
                    placeholder="Company, Category or Product Type"
                    aria-label="Company, Category or Product Type"
                    aria-describedby="basic-addon2"
                    className={`px-4 ${ searchState ? "search-input-open" : ""}`}
                    id="search-input"
                    onClick={handleClick}
                  />
                  <Button id="button-addon3" className="px-4 searchBarButton">
                    <img
                      src="https://img.icons8.com/pastel-glyph/64/000000/barcode-scanner--v2.png"
                      id="searchBarcode"
                      alt="Barcode Icon"
                    />
                  </Button>
                  <Button id="button-addon2" className={`px-4 searchBarButton ${ searchState ? "search-button-open" : "button-search"}`} >
                    <FontAwesomeIcon icon={faSearch} className="fa-md"/>
                  </Button>
                  

              </InputGroup>
              {searchState && <SearchBarCard/>}
            </Form>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
