import { faStar, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
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
} from "react-bootstrap";
import { connect } from "react-redux";
import { useLocation } from "react-router";
import { openNavAction } from "../../../redux/actions";
import {
  updateUserAction,
  updateUserImageAction,
  updateUserCoverAction,
} from "../../../redux/actions/user";

export default function PublicProfile(props) {
  // let locationUrl = useLocation();

  //   console.log(locationUrl)

  //   const params = new URLSearchParams(locationUrl.search);
  //   const searchReq = params.get('username');
  //   console.log(searchReq)

  const [userProf, setUserProf] = useState(props.profile);

  return (
    <Card style={{ width: "100%" }} className="my-4 py-4 profileCard">
      <Card.Body>
        {/* <Card.Title > */}
        <h4 className="px-2 mb-4">Personal Settings</h4>
        {/* </Card.Title> */}
        <Container className="px-2">
          <Row>
            <Col md={6} className="px-4 user-profile-input">
              <Row>
                {/* <Card.Text> */}
                <h6 className="px-0 mb-3">Profile picture</h6>
                {/* </Card.Text> */}
                {/* <FilesUploadComponent addFile={addFile}/> */}
              </Row>
              <Row>
                <Button className="container-fluid rounded text-center py-2 profileButton">
                  Upload your profile picture
                </Button>
              </Row>
            </Col>
            <Col md={6} className="px-4 user-profile-input">
              <Row>
                {/* <Card.Text> */}
                <h6 className="px-0 mb-3">Profile header</h6>
                {/* <FilesUploadComponent addFile={addFileCover}/> */}
                {/* </Card.Text> */}
              </Row>
              <Row>
                <Button className="container-fluid rounded text-center py-2 profileButton">
                  Upload a header image
                </Button>
              </Row>
            </Col>
          </Row>
        </Container>
        <Container className="px-2">
          {/* <Card.Text> */}
          <h6 className="px-0 mb-1 mt-5">Profile information</h6>
          {/* </Card.Text> */}
          {/* <Form onSubmit={handleSubmit}>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email address"
                                className="my-3"
                            >
                                <Form.Control type="email" value={updateUser.email} onChange={handleChange} name="email" className="register-input" />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingInput" label="Username" className="my-3">
                                <Form.Control disabled type="text" value={userProf.username} onChange={handleChange} name="username" className="register-input"/>
                            </FloatingLabel>
                            <Container fluid className="mx-0 px-0">
                                <Row className="mx-0 px-0">
                                    <Col md={6} className="ps-0">
                                        <FloatingLabel controlId="floatingInput" label="First Name" className="my-0">
                                            <Form.Control type="text" value={updateUser.name} onChange={handleChange} name="name" className="register-input"/>
                                        </FloatingLabel>
                                    </Col>
                                    <Col md={6} className="pe-0">
                                        <FloatingLabel controlId="floatingInput" label="Last Name" className="my-0">
                                            <Form.Control type="text" value={updateUser.surname} onChange={handleChange} name="surname" className="register-input"/>
                                        </FloatingLabel> 
                                    </Col>
                                </Row>
                                <Row className="mx-0 px-0">
                                    <Col md={6}  className="ps-0 mt-3">
                                        <Button type="submit" className="container-fluid rounded text-center py-2 profileButton">
                                            Save changes
                                        </Button>
                                    </Col>
                                    <Col md={6}  className="px-0">
                                    </Col>
                                </Row>
                            </Container>
                            
                        </Form> */}
        </Container>
      </Card.Body>
    </Card>
  );
}
