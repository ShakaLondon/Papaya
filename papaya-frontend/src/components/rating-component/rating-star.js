// import { FaStar } from "react-icons/fa";

import './star-rating.css';


function Star({ filled, onClick, ratingValue, onMouseOver, hoverValue, onMouseOut, fontSize, half, number, set }) {

    console.log(ratingValue)
    console.log(hoverValue)


    const hoverColour = (hoverValue < 3) ? "red" : (hoverValue < 4) ? "orange" : "green"
    const ratingColour = (ratingValue < 3) ? "red" : (ratingValue < 4) ? "orange" : "green"
    const currentRatingColour = (ratingValue < 2.8) ? "red" : (ratingValue < 3.8) ? "orange" : "green"
    const currentRatingHalf = (ratingValue < 2) ? "red" : (ratingValue < 3) ? "orange" : "green"
// if remainer is not modular 0

    const valueCheck = hoverValue == 0 ? ratingColour : hoverColour
// const 
    const fillColour = filled ? valueCheck : 'gray'

    if ( (half === 0.5) && (number === Math.floor(ratingValue)+1)) {
      return (
    
        <div onClick={onClick} onMouseOver={onMouseOver} onMouseOut={onMouseOut} style={{ background: `-webkit-linear-gradient(left, ${currentRatingColour} 50%, gray 50%)`, fontSize: fontSize, marginRight: "5px" }} className="d-flex align-items-center  justify-content-center halfStar">
            {/* <p className="mb-0"> */}
                <span className="icon-papaya-logo"></span>
                {/* </p> */}
        </div>
     );
    } else { 

      console.log(ratingValue)

  return (
    
     <div onClick={onClick} onMouseOver={onMouseOver} onMouseOut={onMouseOut} style={{ color: fillColour, fontSize: fontSize, marginRight: "5px" }} className="d-flex align-items-center justify-content-center">
         {/* <p className="mb-0"> */}
             <span className="icon-papaya-logo"></span>
             {/* </p> */}
     </div>
  );
}
}
export default Star;