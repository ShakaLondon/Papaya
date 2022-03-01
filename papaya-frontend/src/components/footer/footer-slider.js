import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";

export default class FooterSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      speed: 100,
    //   autoplaySpeed: 10000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div id="footer-slider-comp" className="py-5">
        {/* <h4 className="px-3 mb-3">Recent Added</h4> */}
        <Slider {...settings} className="px-3">
          <div>
            <h2>About</h2>
            <h6 className="py-2">About us</h6>
            <h6>Jobs</h6>
            <h6>Contact</h6>
            <h6>How Trustpilot works</h6>
            <h6>Transparency Report</h6>
          </div>
          <div>
          <h2>Community</h2>
          <h6 className="py-2">Trust in reviews</h6>
          <h6>Support Center</h6>
          <h6>Log in</h6>
          <h6>Chrome App</h6>
          <h6>Investor Relations</h6>
          </div>
          <div>
          <h2>Businesses</h2>
          <h6 className="py-2">Papaya Business</h6>
          <h6>Products</h6>
          <h6>Plans & Pricing</h6>
          <h6>Blog for Business</h6>
          <h4>Choose Country</h4>
          </div>
          <div>
          <h2>Follow us on</h2>
          <Container fluid className="px-0 mx-0">
          {/* <Col md={3} className="py-2 d-inline-flex"> */}
            <Row>
              <Col md={2} xs={2} sm={2}>
                <FontAwesomeIcon icon={faInstagram} />
              </Col>
              <Col md={2} xs={2} sm={2}>
                <FontAwesomeIcon icon={faTwitter} />
              </Col>
              <Col md={2} xs={2} sm={2}>
                <FontAwesomeIcon icon={faFacebook} />
              </Col>
              <Col md={2} xs={2} sm={2}>
                <FontAwesomeIcon icon={faLinkedin} />
              </Col>
              <Col md={2} xs={2} sm={2}>
                <FontAwesomeIcon icon={faYoutube} />
              </Col>
            </Row>
          {/* </Col> */}
          </Container>
          </div>
        </Slider>
      </div>
    );
  }
}


// <Col md={3} className="py-2">
            
//           </Col>
//           <Col md={3} className="py-2">
            
//           </Col>
//           <Col md={3} className="py-2">
            
//           </Col>