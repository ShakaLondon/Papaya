import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faUser } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import { openNavAction } from '../../redux/actions'
import { useRef } from 'react'

const mapStateToProps = (state) => ({ sideMenuState: state.appState.sideMenu })

const mapDispatchToProps = (dispatch) => ({
  setMenuState: (action) => {
    dispatch(openNavAction(action))
  },
})

const NavBar = ({
    sideMenuState,
    setMenuState,
    colour
}) => {

  console.log(colour)



    return (
    
        <Navbar expand="lg" fixed="top" id="navbar-strip-top" style={{ backgroundColor: colour }}>
        <Container fluid className="mx-0 d-flex justify-content-between">
          <Navbar.Brand href="/"><img src="./resources/logo/papaya-round.png" alt="Papaya Logo" id="papaya-logo-nav" className="mx-3 my-3"/></Navbar.Brand>
          <Navbar.Brand className="d-flex align-items-center">
            {/* <FontAwesomeIcon icon={faUser} id="login-nav-bar-icon" className="mx-3 my-3"/> */}
              { sideMenuState ? <FontAwesomeIcon icon={faTimes} className="mx-3 my-3" id="main-nav-bar-icon" onClick={() => setMenuState(false)}/> : <FontAwesomeIcon icon={faBars} className="mx-3 my-3" id="main-nav-bar-icon" onClick={() => setMenuState(true)}/>}
          </Navbar.Brand>
        </Container>
      </Navbar>

    );

  }

  export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
