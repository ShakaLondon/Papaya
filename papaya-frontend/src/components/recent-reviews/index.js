import { Container } from "react-bootstrap";
import RecentSlider from "../sliders/recent-reviews-slider.js";

export default function RecentReviews({sideMenu, reviews}) {
  return (
    <Container fluid className="px-5" id="reviews-slider-cont">
      <RecentSlider reviews={reviews}  sideMenu={sideMenu}/>
    </Container>
  );
}
