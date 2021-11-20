import { useState } from "react";
import Star from "./rating-star.js";

function StarRating(props) {

    const [rating, setRating] = useState(0);
    const [hoverValue, setHoverValue] = useState(0);

    const changeRating = (newRating) => {
        setRating(newRating);
        // onChange?.(newRating);
      };

    const changeHoverRating = (e, newRating) => {

        console.log(newRating)

        const divstars = e.target.parentElement

        const divstarcont = divstars.parentElement.children

        console.log(divstarcont)

        // const starArray = Array.from(divstarcont)

        // console.log(starArray)

        setHoverValue(newRating)

        console.log(hoverValue + 'hover')
      };



    const changeHoverRatingEnd = (e) => {

        setHoverValue(0)

      };

  return (
    <div className="d-flex">
      {[1, 2, 3, 4, 5].map((value) => (
          <Star 
           key={value} 
           filled={ hoverValue !== 0 ? hoverValue >= value : value <= rating}
           ratingValue={rating}
           hoverValue={value}
           onClick={() => changeRating(value)} 
           onMouseOver={(e) => changeHoverRating(e, value)}
           onMouseOut={() => changeHoverRatingEnd()}
           className="star"
           fontSize={props.fontSize}
           />

           
           
        ))}
    </div>
  );
}
export default StarRating;