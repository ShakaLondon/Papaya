import { faCircle, faDotCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router";
import StarRating from "../../rating-component/index.js"


function CompanyProductCard({ catList }) {

  const history = useHistory()

  console.log(catList)

  // const [categoryList, setCategoryList] = useState(catList)


  const selected = (value) => {
    // console.log(value + "selected")
    // setWriteReview({ ...writeReview, stars: value})
  }

  if (catList?.length > 0) {

  return (
    
    <div className="px-0">
      {catList.map((item, idx) => {
        // <div key={idx} className="ps-0 pe-2">

        const businessweb = item.business.website

        const shortWebsite = businessweb.replace("www.", '')


       return ( <Card 
        onClick={() => history.push(`/review/${shortWebsite}`)}
        style={{ width: '100%' }}
        className="d-inline-flex me-2 mb-2"
        key={item.business._id}
        >
        <Card.Body className="d-flex px-2 py-2 text-nowrap">
         <Container>
           <Row>
             <Col md={4}>
             <Card.Img className="my-2" src={item.business.avatar.avatar} style={{ height: "auto", width: "100%" }}/>
             </Col>
             <Col md={8}>
             <Card.Title >
                <h4 className="px-2 my-2">{item.business.businessName}</h4>
                </Card.Title>
                <Card.Body className="px-2 py-0 d-flex">
                    <StarRating current={item.average}  changeable={false} fontSize={"1.5rem"} selected={selected}/>
                    <h6 className="d-flex px-2 mb-0 extraSmallTxt align-items-center">{`${item.average.toFixed(1)} Papaya Points`}</h6>
                </Card.Body>

                <Card.Body className="px-2 py-0 d-flex align-items-center">
                  <h6 className="my-3 extraSmallTxt">{`${item.business.reviewIDs.length} reviews`}</h6>
                  <FontAwesomeIcon icon={faCircle} style={{ fontSize: "0.2rem" }} className="mx-2"/>
                  <h6 className="my-3 extraSmallTxt">{`${item.business.categoryID.parentCategoryID.name}`}</h6>
                </Card.Body>
             </Col>
           </Row>
         </Container>
         
        </Card.Body>
      </Card>)
      // </div>

         
         
       })}
  
  </div> 
  ); }

  else {

    return (
      <div className="px-0"> 
      <h5>
        There are no items in this category.</h5></div>
    )
    
  } 
}
export default CompanyProductCard;