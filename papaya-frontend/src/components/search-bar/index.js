import { Navbar, Container, Form, FormControl, Button, Row, Col, InputGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import { openNavAction } from '../../redux/actions'

const mapStateToProps = (state) => ({ sideMenuState: state.appState.sideMenu })
const mapDispatchToProps = (dispatch) => ({
  setMenuState: (action) => {
    dispatch(openNavAction(action))
  },
})

const SearchBar = ({
    sideMenuState,
    setMenuState
}) => {

    return (
    
        <Navbar expand="lg" id="search-bar-strip">
        <Container fluid className="d-flex mx-0 justify-content-center">
            <Row>
                <Col md={12}>
                    <Form className="container-fluid d-flex my-4 mx-3" id="search-bar-form">
                        <InputGroup className="">
                            <FormControl
                            placeholder="Company, Category or Product Type"
                            aria-label="Company, Category or Product Type"
                            aria-describedby="basic-addon2"
                            className="px-4"
                            />
                            <Button variant="outline-secondary" id="button-addon2" className="px-4">
                            Search
                            </Button>
                        </InputGroup>
                        </Form>
                    </Col>
                </Row>
        </Container>
      </Navbar>

    );

  }

  export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
