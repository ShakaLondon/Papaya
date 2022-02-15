import React, { Component } from "react";

// import './star-rating.css';

class StarRating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRating: this.props.currentRating,
    };

    this.rating = React.createRef();
  }

  componentDidMount() {
    this.setRating();
  }

  hoverHandler = (ev) => {
    const stars = ev.target.parentElement.getElementsByClassName("star");
    const hoverValue = ev.target.dataset.value;
    Array.from(stars).forEach((star) => {
      star.innerHTML =
        this.state.currentRating >= star.dataset.value
          ? '<img src="https://res.cloudinary.com/shakalondon/image/upload/v1637049769/Papaya/papaya-yellow_yqta5g.png" alt="Papaya Logo" className="mx-3 my-3 "/>'
          : '<img src="https://res.cloudinary.com/shakalondon/image/upload/v1637049769/Papaya/papaya-gray_mxtkm6.png" alt="Papaya Logo" className="mx-3 my-3 "/>';

      star.firstElementChild.style.width = "3rem";
      star.firstElementChild.style.height = "3rem";
    });
  };

  setRating = (ev) => {
    const stars = this.rating.current.getElementsByClassName("star");

    const starArray = Array.from(stars);

    console.log(starArray[3]);

    starArray.forEach((star) => {
      // star.setAttribute("class", "star")

      star.innerHTML =
        this.state.currentRating >= star.dataset.value
          ? '<img src="https://res.cloudinary.com/shakalondon/image/upload/v1637049769/Papaya/papaya-yellow_yqta5g.png" alt="Papaya Logo" className="mx-3 my-3"/>'
          : '<img src="https://res.cloudinary.com/shakalondon/image/upload/v1637049769/Papaya/papaya-gray_mxtkm6.png" alt="Papaya Logo" className="mx-3 my-3"/>';

      star.firstElementChild.style.width = "3rem";
      star.firstElementChild.style.height = "3rem";
    });

    if (this.props.currentRating % 1 !== 0) {
      const currentRate = this.props.currentRating;

      const roundDown = Math.floor(currentRate);
      const remainder = currentRate - roundDown;

      const roundUp = Math.ceil(currentRate);

      console.log(remainder);
      console.log(roundUp);

      console.log(starArray[roundUp - 1]);

      remainder < 0.3
        ? (starArray[roundUp - 1].innerHTML =
            '<img src="https://res.cloudinary.com/shakalondon/image/upload/v1637049769/Papaya/papaya-gray_mxtkm6.png" alt="Papaya Logo" className="mx-3 my-3" />')
        : remainder < 0.8
        ? (starArray[roundUp - 1].innerHTML =
            '<img src="https://res.cloudinary.com/shakalondon/image/upload/v1637049769/Papaya/papaya-half_q68pbh.png" alt="Papaya Logo" className="mx-3 my-3"/>')
        : (starArray[roundUp].innerHTML =
            '<img src="https://res.cloudinary.com/shakalondon/image/upload/v1637049769/Papaya/papaya-yellow_yqta5g.png" alt="Papaya Logo" className="mx-3 my-3"/>');

      starArray[roundUp - 1].firstElementChild.style.width = "3rem";
      starArray[roundUp - 1].firstElementChild.style.height = "3rem";
    }
  };

  starClickHandler = (ev) => {
    let rating = ev.target.dataset.value;
    this.setState({ currentRating: rating }); // set state so the rating stays highlighted
    if (this.props.onClick) {
      this.props.onClick(rating); // emit the event up to the parent
    }
  };

  render() {
    return (
      <div
        className="rating container-fluid d-flex px-0"
        ref={this.rating}
        data-rating={this.state.currentRating}
        onMouseOut={this.setRating}
      >
        {[...Array(+this.props?.numberOfStars).keys()].map((n) => {
          return (
            <span
              className="star px-auto"
              key={n + 1}
              data-value={n + 1}
              onMouseOver={this.hoverHandler}
              onClick={this.starClickHandler}
              style={{ width: "3.5rem", height: "3.5rem" }}
            >
              <img
                src="https://res.cloudinary.com/shakalondon/image/upload/v1637049769/Papaya/papaya-yellow_yqta5g.png"
                alt="Papaya Logo"
                className="mx-3 my-3"
              />
            </span>
          );
        })}
      </div>
    );
  }
}

export default StarRating;
