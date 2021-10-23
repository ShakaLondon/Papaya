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
import CategoryCard from "../categories/card";
import ReviewCard from "../recent-reviews/card";

export default class RecentSlider extends Component {
  render() {
    var settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      rows: 2,
      slidesPerRow: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
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
      <div id="review-slider-comp" className="py-5">
        <h2 className="px-3 mb-3">Recent Reviews</h2>
        <Slider {...settings}>
          <div>
            <ReviewCard/>
          </div>
          <div>
            <ReviewCard/>
          </div>
          <div>
            <ReviewCard/>
          </div>
          <div>
            <ReviewCard/>
          </div>
          <div>
            <ReviewCard/>
          </div>
          <div>
            <ReviewCard/>
          </div>
          <div>
            <ReviewCard/>
          </div>
          <div>
            <ReviewCard/>
          </div>
        </Slider>
      </div>
    );
  }
}