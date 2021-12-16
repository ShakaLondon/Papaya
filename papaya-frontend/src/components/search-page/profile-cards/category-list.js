import { faGlobe, faStar, faThumbsUp, faChevronRight, faArrowCircleLeft, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Nav, Container, Navbar, NavDropdown, Row, Col, Card } from 'react-bootstrap'
import { propTypes } from 'react-bootstrap/esm/Image';
import { useHistory } from 'react-router';
import StarRating from '../../rating-component/index.js';



export default function CategoryList ({ category }) {

     const [currentCategory, setCurrentCategory] = useState(category.name);
    
    const selected = (value) => {
        // console.log(value + "selected")
        // setWriteReview({ ...writeReview, stars: value})
      }

      const history = useHistory();


      useEffect(() => {
          if ((currentCategory !== null) && (currentCategory !== category.name) )
           { let path = `/search/category/${currentCategory}`; 
            history.push(path);}

            // return () => {
                // window.removeEventListener("scroll", listenScrollEvent);
            //   };
       }, [currentCategory]);


      

//   function setCurrentCategory (categoryname) { 
//     let path = `/search/category/${categoryname}`; 
//     history.push(path);
//   }


//   useEffect

    if (category) {

        if (category.categoryLevel === 3){
    return (
        <Card style={{ width: '100%' }} className="my-4 py-4 profileCard">
            <Card.Body className="">
                <Container className="px-2 py-2">
                    <Row>
                        <h4>Categories</h4>
                    </Row>
                    <Row className="d-flex py-0">
                        <Col md={1} className="d-flex align-items-center pe-4">
                            <FontAwesomeIcon icon={faArrowCircleLeft} className="fa-sm align-self-center fa-regular"/>
                            {/* <h5 className="px-2 mb-0">Categories</h5> */}
                        </Col>
                        <Col md={10} className="d-flex align-items-center px-0">
                            {/* <FontAwesomeIcon icon={faArrowCircleLeft} className=""/> */}
                            <h6 className="mb-0 align-self-center smallTxt" onClick={() => setCurrentCategory(category?.parentCategory[0].parentCategory[0].name)}>{category?.parentCategory[0].parentCategory[0].name}</h6>
                        </Col>
                        
                    </Row>
                    <Row className="d-flex py-1">
                        <Col md={1} className="d-flex align-items-center pe-4">
                            {/* <FontAwesomeIcon icon={faArrowCircleLeft} className="fa-sm align-self-center"/> */}
                            {/* <h5 className="px-2 mb-0">Categories</h5> */}
                        </Col>
                        <Col md={10} className="d-flex align-items-center px-0">
                            {/* <FontAwesomeIcon icon={faArrowCircleLeft} className=""/> */}
                            <h6 className="mb-0 align-self-center smallTxt" onClick={() => setCurrentCategory(category?.parentCategory[0].name)}>{category?.parentCategory[0].name}</h6>
                        </Col>
                        
                    </Row>
                    <Row className="d-flex px-2">
                        <Col md={2} className="d-flex align-items-center pe-4">
                            {/* <FontAwesomeIcon icon={faArrowCircleLeft} className="fa-sm align-self-center"/> */}
                            {/* <h5 className="px-2 mb-0">Categories</h5> */}
                        </Col>
                        <Col md={10} className="d-flex align-items-center px-0">
                            {/* <FontAwesomeIcon icon={faArrowCircleLeft} className=""/> */}
                            <h6 className="mb-0 align-self-center smallTxt text-bold" onClick={() => setCurrentCategory(category?.name)}>{category?.name}</h6>
                        </Col>
                        
                    </Row>
                    {category.subCategories?.map((subCat) => (
                    <Row className="d-flex px-2" key={subCat._id}>
                        <Col md={2} className="d-flex align-items-center pe-4">
                            {/* <FontAwesomeIcon icon={faArrowCircleLeft} className="fa-sm align-self-center"/> */}
                            {/* <h5 className="px-2 mb-0">Categories</h5> */}
                        </Col>
                        <Col md={10} className="d-flex align-items-center px-0">
                            {/* <FontAwesomeIcon icon={faArrowCircleLeft} className=""/> */}
                            <h6 className="mb-0 align-self-center smallTxt" onClick={() => setCurrentCategory(subCat.name)}>{subCat.name}</h6>
                        </Col>
                        
                    </Row>
                    ))}
                </Container>
            </Card.Body>
        </Card>
    );
} else if (category.categoryLevel === 2){
    return (
        <Card style={{ width: '100%' }} className="my-4 py-4 profileCard">
            <Card.Body className="">
                <Container className="px-2 py-2">
                    <Row>
                        <h4>Categories</h4>
                    </Row>
                    <Row className="d-flex py-0">
                        <Col md={1} className="d-flex align-items-center pe-4">
                            <FontAwesomeIcon icon={faArrowCircleLeft} className="fa-sm align-self-center fa-regular"/>
                            {/* <h5 className="px-2 mb-0">Categories</h5> */}
                        </Col>
                        <Col md={10} className="d-flex align-items-center px-0">
                            {/* <FontAwesomeIcon icon={faArrowCircleLeft} className=""/> */}
                            <h6 className="mb-0 align-self-center smallTxt" onClick={() => setCurrentCategory(category?.parentCategory[0].name)}>{category?.parentCategory[0].name}</h6>
                        </Col>
                        
                    </Row>
                    <Row className="d-flex py-1">
                        <Col md={1} className="d-flex align-items-center pe-4">
                            {/* <FontAwesomeIcon icon={faArrowCircleLeft} className="fa-sm align-self-center"/> */}
                            {/* <h5 className="px-2 mb-0">Categories</h5> */}
                        </Col>
                        <Col md={10} className="d-flex align-items-center px-0">
                            {/* <FontAwesomeIcon icon={faArrowCircleLeft} className=""/> */}
                            <h6 className="mb-0 align-self-center smallTxt text-bold" onClick={() => setCurrentCategory(category.name)}>{category.name}</h6>
                        </Col>
                        
                    </Row>
                    {category.subCategories?.map((subCat) => (
                    <Row className="d-flex px-2 py-1" key={subCat._id}>
                        <Col md={2} className="d-flex align-items-center pe-4">
                            {/* <FontAwesomeIcon icon={faArrowCircleLeft} className="fa-sm align-self-center"/> */}
                            {/* <h5 className="px-2 mb-0">Categories</h5> */}
                        </Col>
                        <Col md={10} className="d-flex align-items-center px-0">
                            {/* <FontAwesomeIcon icon={faArrowCircleLeft} className=""/> */}
                            <h6 className="mb-0 align-self-center smallTxt" onClick={() => setCurrentCategory(subCat.name)}>{subCat.name}</h6>
                        </Col>
                        
                    </Row>
                    ))}
                </Container>
            </Card.Body>
        </Card>
    );
} else if (category.categoryLevel === 1){
    return (
        <Card style={{ width: '100%' }} className="my-4 py-4 profileCard">
            <Card.Body className="">
                <Container className="px-2 py-2">
                    <Row>
                        <h4>Categories</h4>
                    </Row>
                    <Row className="d-flex py-0">
                        <Col md={1} className="d-flex align-items-center pe-4">
                            <FontAwesomeIcon icon={faArrowCircleLeft} className="fa-sm align-self-center fa-regular"/>
                            {/* <h5 className="px-2 mb-0">Categories</h5> */}
                        </Col>
                        <Col md={10} className="d-flex align-items-center px-0">
                            {/* <FontAwesomeIcon icon={faArrowCircleLeft} className=""/> */}
                            <h6 className="mb-0 align-self-center smallTxt">All Categories</h6>
                        </Col>
                        
                    </Row>
                    <Row className="d-flex py-1">
                        <Col md={1} className="d-flex align-items-center pe-4">
                            {/* <FontAwesomeIcon icon={faArrowCircleLeft} className="fa-sm align-self-center"/> */}
                            {/* <h5 className="px-2 mb-0">Categories</h5> */}
                        </Col>
                        <Col md={10} className="d-flex align-items-center px-0">
                            {/* <FontAwesomeIcon icon={faArrowCircleLeft} className=""/> */}
                            <h6 className="mb-0 align-self-center smallTxt text-bold" onClick={() => setCurrentCategory(category.name)}>{category.name}</h6>
                        </Col>
                        
                    </Row>
                    {category.subCategories?.map((subCat) => (
                    <Row className="d-flex px-2 py-1" key={subCat._id}>
                        <Col md={2} className="d-flex align-items-center pe-4">
                            {/* <FontAwesomeIcon icon={faArrowCircleLeft} className="fa-sm align-self-center"/> */}
                            {/* <h5 className="px-2 mb-0">Categories</h5> */}
                        </Col>
                        <Col md={10} className="d-flex align-items-center px-0">
                            {/* <FontAwesomeIcon icon={faArrowCircleLeft} className=""/> */}
                            <h6 className="mb-0 align-self-center smallTxt" onClick={() => setCurrentCategory(subCat.name)}>{`${subCat.name} (${ category.categoryItems.length > 0 ? category.categoryItems?.length : 0 })`}</h6>
                        </Col>
                        
                    </Row>
                    ))}
                </Container>
            </Card.Body>
        </Card>
    );
}
}
  }