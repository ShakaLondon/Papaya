import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap'
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

const NavBar = ({
    sideMenuState,
    setMenuState
}) => {

    return (
    
        <Navbar expand="lg" fixed="top" id="navbar-strip-top">
        <Container fluid className="mx-0">
          <Navbar.Brand href="/"><img src="./resources/logo/papaya-round.png" alt="Papaya Logo" id="papaya-logo-nav" className="mx-3 my-3"/></Navbar.Brand>
          <Navbar.Brand onClick={() => setMenuState(!sideMenuState)}>
              { sideMenuState ? <FontAwesomeIcon icon={faTimes} className="mx-3 my-3" id="main-nav-bar-icon"/> : <FontAwesomeIcon icon={faBars} className="mx-3 my-3" id="main-nav-bar-icon"/>}
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse> */}
        </Container>
      </Navbar>

    );

  }

  export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
