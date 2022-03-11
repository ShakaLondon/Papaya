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
import { useEffect, useRef, useState } from "react";
import appData from "../../services/app-data/app-data.js";

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

  const [searchRequest, setSearchRequest] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [barcodeHover, setBarcodeHover] = useState(false);


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

  const handleRequest = (e) => {
    e.preventDefault()
    setSearchRequest(e.target.value)
  };

  useEffect(() => {

    if (searchRequest.length > 3){

    appData.getSearchResult(searchRequest)
      .then((res) => {
        const searchRes = res.data;
        console.log(searchRes);
        // console.log(busFound.reviewIDs)
        // const reviews = busFound.reviewIDs
        // setAllCategories((allCategories) => categoryRes);
        // console.log(categoryRes);

        setSearchResult(searchRes)

        // setDataLoading(false);
      })

      .catch((error) => {
        console.log(error);
      });}

  }, [searchRequest]);




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
                    onChange={handleRequest}
                    value={searchRequest}
                  />
                  <Button id="button-addon3" className="px-4 searchBarButton"  onMouseOver={() => setBarcodeHover(true)}  onMouseOut={() => setBarcodeHover(false)}>
                    <img
                      src={ barcodeHover ? "https://img.icons8.com/pastel-glyph/64/EF7C53/barcode-scanner--v2.png" : "https://img.icons8.com/pastel-glyph/64/FFD800/barcode-scanner--v2.png" }
                      className="searchBarcode"
                      alt="Barcode Icon"
                    />
                  </Button>
                  <Button id="button-addon2" className={`px-4 searchBarButton ${ searchState ? "search-button-open" : "button-search"}`} >
                    <FontAwesomeIcon icon={faSearch} className="fa-md"/>
                  </Button>
                  

              </InputGroup>
              {searchState && <SearchBarCard searchResult={searchResult} />}
            </Form>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
