import React, { Component } from "react";
import { Form } from "react-bootstrap";

export default class FilesUploadComponent extends Component {
  // constructor() {
  //     super();
  //     this.state = {
  //       form: null
  //     };

  //     this.addFile = this.addFile.bind(this)
  //   }

  //   addFile = (file) => {
  //     // event to update state when form inputs change
  //     const fd = new FormData();
  //     fd.append('avatar', file);

  //     console.log(fd)

  //     this.setState({ form: fd });
  //   }

  //   onSubmit = (e) => {
  //     e.preventDefault();
  //     // event to submit the data to the server
  //   }

  render() {
    // const { form } = this.state;
    // const input = document.getElementById('avatar');

    // add event listener
    // input.addEventListener('change', () => {
    //     this.addFile(input.file);
    // });

    return (
      <div className="container">
        <div className="row">
          <Form className="px-0 py-3">
            <div className="form-group">
              <input
                type="file"
                name="image"
                id="image"
                onChange={(e) => this.props.addFile(e)}
                className="register-input"
                style={{ width: "15rem" }}
              />
            </div>
            {/* <FloatingLabel controlId="floatingInput" label="File Upload" className="my-3">
                                <Form.Control type="file" onChange={e => this.props.addFile(e)} name="image" className="register-input"/>
                            </FloatingLabel> */}
          </Form>
        </div>
      </div>
    );
  }
}
