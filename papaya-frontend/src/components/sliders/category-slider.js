import React, { Component } from "react";
import Slider from "react-slick";
import CategoryListOne from "../categories/lists/list-one";
import CategoryListTwo from "../categories/lists/list-two";
import CategoryListThree from "../categories/lists/list-three";
import CategoryListFour from "../categories/lists/list-four";
import CategoryListFive from "../categories/lists/list-five";
import CategoryListSix from "../categories/lists/list-six";
import CategoryListSeven from "../categories/lists/list-seven";
import CategoryListEight from "../categories/lists/list-eight";

export default class CategorySlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div id="category-slider-comp" className="py-5">
        <h2 className="px-3 mb-3">Explore Categories</h2>
        <Slider {...settings}>
          <div>
            <CategoryListOne/>
          </div>
          <div>
            <CategoryListTwo/>
          </div>
          <div>
            <CategoryListThree/>
          </div>
          <div>
            <CategoryListFour/>
          </div>
          <div>
            <CategoryListFive/>
          </div>
          <div>
            <CategoryListSix/>
          </div>
          <div>
            <CategoryListSeven/>
          </div>
          <div>
            <CategoryListEight/>
          </div>
        </Slider>
      </div>
    );
  }
}