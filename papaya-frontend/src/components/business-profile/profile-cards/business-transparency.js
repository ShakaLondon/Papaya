import {
  faArrowRight,
  faCalendarAlt,
  faCheckCircle,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Card,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { connect } from "react-redux";
import { openNavAction } from "../../../redux/actions";
import {
  updateUserAction,
  updateUserImageAction,
  updateUserCoverAction,
} from "../../../redux/actions/user";
import DropdownCard from "./dropdown-card";


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

const BusinessTrans = ({
  profile,
}) => {


  return (
    <Card style={{ width: "100%" }} className="py-4 pt-4 profileCard bus-info-drop">
      <Card className="profileCard borderBottom">
        <Card.Body className="px-4">
          {/* <Card.Title > */}
          <h5 className="px-2 mb-1">Business Transparency</h5>

          <Container className="px-2 py-2">
            <Row>
              <Col md={1} xs={1} sm={1} className="me-2 d-flex pt-2">
                <FontAwesomeIcon
                  icon={faCalendarAlt}
                  className="fa-xs text-secondary"
                />
              </Col>
              <Col md={10} xs={10} sm={10} className="px-0 d-flex align-items-center">
                {/* <Row className="px-0"> */}
                <Card.Text className="px-1 mb-0">
                  {profile.businessUserID
                    ? `Claimed their Papaya profile: ${profile.businessUserID.createdAt}.`
                    : "This Papaya profile has never been claimed"}
                  <FontAwesomeIcon
                    icon={faInfoCircle}
                    className="fa-xs mx-2 text-secondary"
                  />
                </Card.Text>

                {/* </Row> */}
              </Col>
            </Row>
            <Row>
              <Col md={1} xs={1} sm={1} className="me-2 d-flex pt-2">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className={`fa-xs ${
                    profile.businessUserID ? "text-success" : "text-secondary"
                  }`}
                />
              </Col>
              <Col md={10} xs={10} sm={10} className="px-0 d-flex align-items-center">
                {/* <Row className="px-0"> */}
                {profile.businessUserID ? (
                  <Card.Text className="px-1 mb-0">
                    Verified additional company details{" "}
                    <FontAwesomeIcon
                      icon={faInfoCircle}
                      className="fa-xs mx-2"
                    />
                  </Card.Text>
                ) : (
                  <Card.Text className="px-1 mb-0">
                    Hasn’t verified additional company details yet{" "}
                    <FontAwesomeIcon
                      icon={faInfoCircle}
                      className="fa-xs mx-2 text-secondary"
                    />
                  </Card.Text>
                )}

                {/* </Row> */}
              </Col>
            </Row>
          </Container>

          {/* </Card.Title> */}
        </Card.Body>
      </Card>
      <Card className="profileCard borderBottom">
        <Card.Body className="px-4">
          <h6 className="extraSmallTxt mb-0 px-2">
            See how this company has been using Papaya for the past 12 months
          </h6>
        </Card.Body>
      </Card>
      {profile.businessUserID && (
        <>
          <DropdownCard
            innerText={
              "Asks their customers for reviews — whether positive or negative."
            }
            dropdownText={
              "Companies who regularly ask their customers to review them tend to have a more representative star rating."
            }
          />

          <DropdownCard
            innerText={"Pays to access extra Papaya features."}
            dropdownText={
              "Our paid plans offer more review invitations, marketing materials, business support, and more."
            }
          />

          <DropdownCard
            innerText={
              "Typically replies to negative reviews in 24 hours or less."
            }
            dropdownText={
              "We take all days of the week into account (including weekends) and consider 1- and 2-star reviews to be negative."
            }
          />

          <DropdownCard
            innerText={"Has replied to 7 out of 8 negative reviews."}
            dropdownText={"We consider 1- and 2-star reviews to be negative."}
          />

          <DropdownCard
            innerText={"Has reviews that were merged into this profile"}
            dropdownText={
              "Profiles can be merged for one of these reasons, Identical domains, Rebranding or a Business merger or change in ownership"
            }
          />
        </>
      )}

      {!profile.businessUserID && (
        <DropdownCard
          innerText={
            "Hasn't replied to negative reviews for the past 12 months."
          }
          dropdownText={"We consider 1- and 2-star reviews to be negative."}
        />
      )}

      <Card className="profileCard">
        <Card.Body className="px-4">
          <Button className="container-fluid d-inline-flex align-items-center justify-content-center rounded text-center py-2 profileButton">
            <h6 className="mb-0">See a detailed overview</h6>
            <FontAwesomeIcon icon={faArrowRight} className="fa-xs mx-2" />
          </Button>
        </Card.Body>
      </Card>
    </Card>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessTrans);
