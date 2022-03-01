import { useState } from "react";
import { useHistory } from "react-router";
import Star from "./rating-star.js";

function StarRating({
  currentNum,
  relocate,
  current,
  changeable,
  fontSize,
  website,
  selected,
}) {
  const [rating, setRating] = useState(0);
  const [hoverValue, setHoverValue] = useState(0);
  const [currentRating, setCurrentRating] = useState(current);

  // let currentRating = props.currentRating

  const history = useHistory();


  const changeRating = (newRating, website) => {
    setRating(newRating);
    // selected(newRating)
    // onChange?.(newRating);
    if (relocate) {
      const websiteShort = website.replace("www.", "");
      history.push(`/review/${websiteShort}/new?stars=${newRating}`);
    }
  };

  const changeRatingSet = (newRating) => {
    if (changeable) {
      setRating(newRating);
      // selected(newRating)
      setCurrentRating(0);
    }
    // onChange?.(newRating);

    // if ( props.relocate ) {
    // const websiteShort = website.replace("www.", "")
    // history.push(`/review/${websiteShort}/new?stars=${newRating}`)}
  };

  const changeHoverRating = (e, newRating) => {
    console.log(newRating);

    const divstars = e.target.parentElement;

    const divstarcont = divstars.parentElement.children;

    console.log(divstarcont);

    // const starArray = Array.from(divstarcont)

    // console.log(starArray)

    setHoverValue(newRating);

    console.log(hoverValue + "hover");
  };

  const changeHoverRatingEnd = (e) => {
    setHoverValue(0);
  };

  if (currentRating > 0) {
    const currentRate = current;

    const roundDown = Math.floor(currentRate);
    const remainder = currentRate - roundDown;

    // const roundUp = Math.ceil(currentRate);

    const halfValue = remainder < 0.3 ? 0 : remainder < 0.8 ? 0.5 : 1;

    return (
      <div className="d-flex">
        {[1, 2, 3, 4, 5].map((value) => (
          <Star
            key={value}
            filled={
              halfValue === 1
                ? value <= currentRating + 1
                : value <= currentRating
            }
            ratingValue={currentRating}
            number={value}
            hoverValue={0}
            onClick={() => {
              selected(value);
              changeRatingSet(value);
            }}
            onMouseOver={(e) => changeHoverRating(e, value)}
            onMouseOut={() => changeHoverRatingEnd()}
            half={halfValue}
            set={currentRating}
            className="star mx-1"
            fontSize={fontSize}
            //  selected={selected(value)}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div className="d-flex">
        {[1, 2, 3, 4, 5].map((value) => (
          <Star
            key={value}
            number={value}
            filled={hoverValue !== 0 ? hoverValue >= value : rating >= value}
            ratingValue={rating}
            hoverValue={hoverValue}
            onClick={() => {
              selected(value);
              changeRating(value, website);
            }}
            onMouseOver={(e) => changeHoverRating(e, value)}
            onMouseOut={() => changeHoverRatingEnd()}
            set={0}
            className="star"
            fontSize={fontSize}
          />
        ))}
      </div>
    );
  }
}
export default StarRating;
