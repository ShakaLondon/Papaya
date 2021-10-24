import React, { Component } from "react";
import Slider from "react-slick";
import ProductCard from "../new-products/card";

export default class NewProductSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 5000,
      cssEase: "linear"
    };
    return (
    <div id="product-slider-comp" className="py-5">
        <h4 className="px-3 mb-3">Recent Added</h4>
        <Slider {...settings}>
          <div>
            <ProductCard/>
          </div>
          <div>
            <ProductCard/>
          </div>
          <div>
            <ProductCard/>
          </div>
          <div>
            <ProductCard/>
          </div>
          <div>
            <ProductCard/>
          </div>
          <div>
            <ProductCard/>
          </div>
        </Slider>
      </div>
    );
  }
}