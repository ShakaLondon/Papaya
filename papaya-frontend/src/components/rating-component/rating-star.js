// import { FaStar } from "react-icons/fa";


function Star({ filled, onClick, ratingValue, onMouseOver, hoverValue, onMouseOut, fontSize }) {

    console.log(ratingValue)
    console.log(hoverValue)


    const hoverColour = (hoverValue < 3) ? "red" : (hoverValue < 4) ? "orange" : "green"
    const ratingColour = (ratingValue < 3) ? "red" : (ratingValue < 4) ? "orange" : "green"

    const fillColour = filled ? ( hoverValue !== 0 ? hoverColour : ratingColour ) : 'gray'

  return (
    
     <div onClick={onClick} onMouseOver={onMouseOver} onMouseOut={onMouseOut} style={{ color: fillColour, fontSize: fontSize }} className="d-flex align-items-center pe-1">
         {/* <p className="mb-0"> */}
             <span className="icon-papaya-logo"></span>
             {/* </p> */}
     </div>
  );
}
export default Star;