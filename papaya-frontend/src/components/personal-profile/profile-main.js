import { faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Nav, Container, Navbar, NavDropdown, Row, Col } from 'react-bootstrap'
import userAuth from '../../services/user/user-auth';
import PersonalSettings from './profile-cards/personal-settings';
import ProfileDownload from './profile-cards/profile-download';
import ProfileDelete from './profile-cards/delete-profile';


export default function ProfileMain (props) {
    return (
        <Container id="profile-main-container">
            <Row className="mx-0 px-0">
                <Col md={8}>
                    <PersonalSettings/>
                    <ProfileDownload/>
                    <ProfileDelete/>
                </Col>
                <Col md={4}>

                </Col>
            </Row>

        </Container>
    );
  }