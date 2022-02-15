import {
  faArrowRight,
  faCalendar,
  faCalendarAlt,
  faCheckCircle,
  faInfoCircle,
  faMapMarkerAlt,
  faPhone,
  faSearch,
  faStar,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  Card,
  Button,
  Container,
  Row,
  Col,
  Form,
  FloatingLabel,
  FormControl,
  ProgressBar,
  InputGroup,
} from "react-bootstrap";
import { connect } from "react-redux";
import { openNavAction } from "../../../redux/actions";
import {
  updateUserAction,
  updateUserImageAction,
  updateUserCoverAction,
} from "../../../redux/actions/user";
import FilesUploadComponent from "../upload";
import DropdownCard from "./dropdown-card";
import Keywords from "./keywords.js";

const mapStateToProps = (state) => ({
  sideMenuState: state.appState.sideMenu,
  userProf: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  setMenuState: (action) => {
    dispatch(openNavAction(action));
  },

  updateUserProf: (action) => {
    dispatch(updateUserAction(action));
  },

  updateUserImage: (action) => {
    dispatch(updateUserImageAction(action));
  },

  updateUserCover: (action) => {
    dispatch(updateUserCoverAction(action));
  },
});

const BusinessInfo = ({
  sideMenuState,
  setMenuState,
  userProf,
  updateUserProf,
  updateUserImage,
  updateUserCover,
  profile,
}) => {
  const [percentage, setPercentage] = useState(30);

  return (
    <Card style={{ width: "100%" }} className="my-4 pt-4 profileCard">
      {profile.businessUserID && (
        <Card className="profileCard borderBottom">
          <Card.Body className>
            {/* <Card.Title > */}
            <h5 className="px-2 mb-1">Business Title</h5>
            <h6 className="extraSmallTxt mb-0 px-2 py-2">
              {profile.businessUserID
                ? "Information written by the company"
                : "Information provided by various external sources"}
            </h6>

            <img
              src="https://res.cloudinary.com/shakalondon/image/upload/v1636933603/Papaya/618db3c8935db55fdd67108c-ShakaLondon.jpg"
              alt="Business Image"
              className="px-4 py-3 img-fluid"
              // style={{ width: "3rem", height: "3rem", objectFit: "cover" }}
            />
            <Card.Text className="px-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu
              ornare risus. Sed tempor quam eget consectetur consectetur.
              Maecenas eget elit sem. Pellentesque massa ligula, tempor eu
              congue in, mattis eu est. Suspendisse varius arcu at purus
              pulvinar tincidunt. Nunc eu sodales erat, id interdum orci. Sed
              vitae consectetur massa. Phasellus lobortis, tellus sed euismod
              tincidunt, orci libero accumsan nulla, at fermentum lorem ligula
              auctor augue. Suspendisse et gravida ante, vel cursus massa.
              Aenean bibendum nisi leo, quis pharetra leo lacinia vel. Sed
              turpis risus, venenatis non ornare eget, dapibus nec nibh. Nulla
              pulvinar pellentesque lacus et consequat. Vivamus ligula nisl,
              volutpat sit amet tempus eu, dictum vehicula purus. Nullam tortor
              sem, tempor vel urna sit amet, semper posuere lorem. Etiam
              volutpat sapien id consectetur pharetra. Nunc pharetra sapien
              nulla, ac consectetur sapien aliquam non. Nullam dolor massa,
              pulvinar ac urna ac, iaculis porttitor nisi. Phasellus vel arcu ac
              dolor cursus placerat. Duis gravida justo at massa pharetra, ac
              porta tortor laoreet. Mauris ornare rhoncus elit sit amet finibus.
              Donec nunc ligula, imperdiet vel quam ut, viverra convallis arcu.
              Duis rutrum eros odio, quis aliquam libero ornare id. Ut bibendum
              ante non enim luctus, eu vehicula nunc condimentum.
            </Card.Text>

            {/* </Card.Title> */}
          </Card.Body>
        </Card>
      )}
      <Card className="profileCard borderBottom">
        <Card.Body className="px-4">
          <h5 className="px-2 mb-1">About TrailFinders</h5>
          <h6 className="extraSmallTxt mb-0 px-2 py-2">
            Information written by the company
          </h6>
        </Card.Body>
      </Card>

      <Card className="profileCard borderBottom">
        <Card.Body className>
          {/* <Card.Title > */}
          <h5 className="px-2 mb-1">Contact</h5>

          <Container className="px-2 py-2">
            <Row>
              <Col md={1} className="pe-3">
                <FontAwesomeIcon icon={faPhone} className="fa-xs" />
              </Col>
              <Col md={10} className="px-0 d-flex align-items-center">
                {/* <Row className="px-0"> */}
                <Card.Text className="px-1 mb-0">
                  Claimed their Papaya profile: December 2017.
                  <FontAwesomeIcon icon={faInfoCircle} className="fa-xs mx-2" />
                </Card.Text>

                {/* </Row> */}
              </Col>
            </Row>
            <Row>
              <Col md={1} className="pe-3">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="fa-xs" />
              </Col>
              <Col md={10} className="px-0 d-flex align-items-center">
                {/* <Row className="px-0"> */}
                <Card.Text className="px-1 mb-0">
                  Verified additional company details{" "}
                  <FontAwesomeIcon icon={faInfoCircle} className="fa-xs mx-2" />
                </Card.Text>

                {/* </Row> */}
              </Col>
            </Row>
          </Container>

          {/* </Card.Title> */}
        </Card.Body>
      </Card>
      <Card className="profileCard">
        <Card.Body className>
          <h5 className="px-2 mb-1">Category</h5>
        </Card.Body>
      </Card>
    </Card>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessInfo);
