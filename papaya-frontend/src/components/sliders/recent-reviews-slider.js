import React, { Component } from "react";
import Slider from "react-slick";
import ReviewCardMain from "../recent-reviews/card";

export default class RecentSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.reviews,
    };
  }

  // componentDidMount() {
  //   fetch(`http://localhost:3005/reviews`)
  //     .then(res => res.json())
  //     .then(result => {
  //       console.log(result)
  //       this.setState({
  //         reviews: result,
  //       });
  //     });
  // }

  render() {
    // const { reviews } = this.state;
    // console.log(reviews)
    const settings = {
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
            dots: true,
          },
        },
        {
          breakpoint: 800,
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
      <div id="review-slider-comp" className="py-5">
        <h4 className="px-3 mb-3">Recent Reviews</h4>
        <Slider {...settings}>
          {this.state.reviews?.length > 0 &&
            this.state.reviews?.map((review, idx) => {
              // if (reviews.length > 0) {
              console.log(review);
              return (
                <div key={review._id}>
                  <ReviewCardMain review={review} />
                </div>
              );
              // }
            })}
        </Slider>
      </div>
    );
  }
}
