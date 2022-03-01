import { Container } from "react-bootstrap";
import CategorySlider from "../sliders/category-slider.js";

export default function Categories({sideMenu, categories}) {
  return (
    <Container fluid className="px-5" id="category-slider-cont">
      <CategorySlider categories={categories} sideMenu={sideMenu}/>
    </Container>
  );
}
