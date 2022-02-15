import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import RecentSlider from "../sliders/recent-reviews-slider.js";

export default function RecentReviews(props) {
  return (
    <Container fluid className="px-5" id="reviews-slider-cont">
      <RecentSlider reviews={props.reviews} />
    </Container>
  );
}
