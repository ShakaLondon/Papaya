import { Container } from "react-bootstrap";
import NewProductSlider from "../sliders/new-products.js";

export default function NewProducts({sideMenu}) {
  return (
    <Container fluid className="px-5" id="product-slider-cont">
      <NewProductSlider sideMenu={sideMenu} />
    </Container>
  );
}
