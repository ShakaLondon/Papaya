import React, { Component } from "react";
import Slider from "react-slick";
import CategoryList from "../categories/lists/category-list.js";

export default class CategorySlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideMenuState: this.props.sideMenu,
    };
  }

  componentDidUpdate(prevProps) {
    if(this.props.sideMenu !== prevProps.sideMenu){ //<---- see here
       this.setState({ sideMenuState: this.props.sideMenu});//<---- see here
    }
 }

  render() {
    // const { categories } = this.state;
    const settings = {
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
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
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
      <div 
      id="category-slider-comp" 
      className="py-5 slider-comp"
      // className={`${ this.state.sideMenuState? "px-0 py-5": "py-5"}`}
      style={{ padding: `${this.state.sideMenuState? "0rem 0rem 0rem" : "0rem 8rem 0rem"}`}}
      >
        <h4 className="px-3 mb-3">Explore Categories</h4>
        <Slider {...settings}>
          {this.props.categories.pages?.length > 0 &&
            this.props.categories.pages?.map((category, idx) => {
              // if (category.length > 0) {
                return (
                  <div key={idx}>
                    <CategoryList category={category} />
                  </div>
                );
              // }
            })}
        </Slider>
      </div>
    );
  }
}
