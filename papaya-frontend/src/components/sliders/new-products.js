import React, { Component } from "react";
import Slider from "react-slick";
import ProductCard from "../new-products/card";

export default class NewProductSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideMenuState: this.props.sideMenu,
      reviews: this.props.reviews
    };
  }

  componentDidUpdate(prevProps) {
    if(this.props.sideMenu !== prevProps.sideMenu){ //<---- see here
       this.setState({ sideMenuState: this.props.sideMenu});//<---- see here
    }
 }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 10000,
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
      <div id="product-slider-comp" className="py-5 slider-comp"
      style={{ padding: `${this.state.sideMenuState? "0rem 0rem 0rem" : "0rem 8rem 0rem"}`}}>
        <h4 className="px-3 mb-3">Recent Added</h4>
        <Slider {...settings}>
          <div>
            <ProductCard />
          </div>
          <div>
            <ProductCard />
          </div>
          <div>
            <ProductCard />
          </div>
          <div>
            <ProductCard />
          </div>
          <div>
            <ProductCard />
          </div>
          <div>
            <ProductCard />
          </div>
        </Slider>
      </div>
    );
  }
}
