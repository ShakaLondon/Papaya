// import { FaStar } from "react-icons/fa";

import { propTypes } from "react-bootstrap/esm/Image";
import { animated, useSpring } from 'react-spring'

// import './star-rating.css';


function LoadingStar(props) {

//     console.log(ratingValue)
//     console.log(hoverValue)


//     const hoverColour = (hoverValue < 3) ? "red" : (hoverValue < 4) ? "orange" : "green"
//     const ratingColour = (ratingValue < 3) ? "red" : (ratingValue < 4) ? "orange" : "green"
//     const currentRatingColour = (ratingValue < 2.8) ? "red" : (ratingValue < 3.8) ? "orange" : "green"
//     const currentRatingHalf = (ratingValue < 2) ? "red" : (ratingValue < 3) ? "orange" : "green"
// // if remainer is not modular 0

//     const valueCheck = hoverValue == 0 ? ratingColour : hoverColour
// // const 
//     const fillColour = filled ? valueCheck : 'gray'

const styles = useSpring({
    loop: true,
    from: { 
        // rotateZ: 0
        transform: "rotateY(180deg)"
     },
    to: { 
    //     // rotateZ: 180 
        transform: "rotateY(0deg)"
    },
  })


  return (
    
     <animated.div style={{ 
        color: props.colour,
        fontSize: "10rem", 
        ...styles
      }} 
      className={`d-flex align-items-center justify-content-center ${props.position}`}>
         {/* <p className="mb-0"> */}
             <span className="icon-papaya-logo"></span>
             {/* </p> */}
     </animated.div>
  );

}
export default LoadingStar;