import { useState } from "react";
import {
  Card,
  Button,
  Container,
  Row,
  Col,
  Form,
  FloatingLabel,
} from "react-bootstrap";
import { connect } from "react-redux";
import { openNavAction } from "../../../redux/actions";
import {
  updateUserAction,
  updateUserImageAction,
  updateUserCoverAction,
} from "../../../redux/actions/user";
import FilesUploadComponent from "../upload";

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

const PersonalSettings = ({
  sideMenuState,
  setMenuState,
  userProf,
  updateUserProf,
  updateUserImage,
  updateUserCover,
}) => {
  const [updateUser, setUpdateUser] = useState({
    email: userProf.email,
    name: userProf.name,
    surname: userProf.surname,
  });

  const [formData, setFormData] = useState({
    image: null,
  });

  const [coverFormData, setCoverFormData] = useState({
    cover: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserProf(updateUser);
  };

  const handleSubmitImage = (e) => {
    e.preventDefault();
    updateUserImage(formData.image);
  };

  const handleSubmitCover = (e) => {
    e.preventDefault();
    updateUserCover(coverFormData.cover);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    let name = e.target.name;
    setUpdateUser({ ...updateUser, [name]: e.target.value });
  };

  const addFile = (e) => {
    // event to update state when form inputs change
    console.log(e.target.files);
    const files = e.target.files;
    const fd = new FormData();
    fd.append("avatar", files[0]);

    console.log(fd);

    setFormData({ image: fd });
  };

  const addFileCover = (e) => {
    // event to update state when form inputs change
    console.log(e.target.files);
    const files = e.target.files;
    const fd = new FormData();
    fd.append("cover", files[0]);

    console.log(fd);

    setCoverFormData({ cover: fd });
  };

  return (
    <Card style={{ width: "100%" }} className="my-4 py-4 profileCard">
      <Card.Body>
        {/* <Card.Title > */}
        <h4 className="px-2 mb-4">Personal Settings</h4>
        {/* </Card.Title> */}
        <Container className="px-2">
          <Row>
            <Col md={6} className="px-4">
              <Row>
                {/* <Card.Text> */}
                <h6 className="px-0 mb-1">Profile picture</h6>
                {/* </Card.Text> */}
                <FilesUploadComponent addFile={addFile} />
              </Row>
              <Row>
                <Button
                  className="container-fluid rounded text-center py-2 profileButton"
                  onClick={handleSubmitImage}
                >
                  Upload your profile picture
                </Button>
              </Row>
            </Col>
            <Col md={6} className="px-4">
              <Row>
                {/* <Card.Text> */}
                <h6 className="px-0 mb-1">Profile header</h6>
                <FilesUploadComponent addFile={addFileCover} />
                {/* </Card.Text> */}
              </Row>
              <Row>
                <Button
                  className="container-fluid rounded text-center py-2 profileButton"
                  onClick={handleSubmitCover}
                >
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
          <Form onSubmit={handleSubmit}>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="my-3"
            >
              <Form.Control
                type="email"
                value={updateUser.email}
                onChange={handleChange}
                name="email"
                className="register-input"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Username"
              className="my-3"
            >
              <Form.Control
                disabled
                type="text"
                value={userProf.username}
                onChange={handleChange}
                name="username"
                className="register-input"
              />
            </FloatingLabel>
            <Container fluid className="mx-0 px-0">
              <Row className="mx-0 px-0">
                <Col md={6} className="ps-0">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="First Name"
                    className="my-0"
                  >
                    <Form.Control
                      type="text"
                      value={updateUser.name}
                      onChange={handleChange}
                      name="name"
                      className="register-input"
                    />
                  </FloatingLabel>
                </Col>
                <Col md={6} className="pe-0">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Last Name"
                    className="my-0"
                  >
                    <Form.Control
                      type="text"
                      value={updateUser.surname}
                      onChange={handleChange}
                      name="surname"
                      className="register-input"
                    />
                  </FloatingLabel>
                </Col>
              </Row>
              <Row className="mx-0 px-0">
                <Col md={6} className="ps-0 mt-3">
                  <Button
                    type="submit"
                    className="container-fluid rounded text-center py-2 profileButton"
                  >
                    Save changes
                  </Button>
                </Col>
                <Col md={6} className="px-0"></Col>
              </Row>
            </Container>
          </Form>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonalSettings);
