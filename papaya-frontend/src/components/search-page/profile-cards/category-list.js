import {
  faArrowCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import { useHistory } from "react-router";

export default function CategoryList({ category }) {
  const [currentCategory, setCurrentCategory] = useState(category?.name);



  const history = useHistory();

  useEffect(() => {
    if (currentCategory !== null && currentCategory !== category.name) {
      let path = `/search/category/${currentCategory}`;
      history.push(path);
    }

    // return () => {
    // window.removeEventListener("scroll", listenScrollEvent);
    //   };
  }, [currentCategory, history, category.name]);

  //   function setCurrentCategory (categoryname) {
  //     let path = `/search/category/${categoryname}`;
  //     history.push(path);
  //   }

  //   useEffect

  if (category) {
    if (category.categoryLevel === 3) {
      return (
        <Card style={{ width: "100%" }} className="my-4 py-4 profileCard">
          <Card.Body className="">
            <Container className="px-2">
              <Row>
                <h4>Categories</h4>
              </Row>
              <Row className="d-flex py-0">
                <Col md={2} xs={2} sm={2} className="d-flex align-items-center pe-4">
                  <FontAwesomeIcon
                    icon={faArrowCircleLeft}
                    className="fa-sm align-self-center fa-regular"
                  />
                  {/* <h5 className="px-2 mb-0">Categories</h5> */}
                </Col>
                <Col md={10} xs={10} sm={10} className="d-flex align-items-center px-0">
                  {/* <FontAwesomeIcon icon={faArrowCircleLeft} className=""/> */}
                  <h6
                    className="mb-0 align-self-center smallTxt"
                    onClick={() =>
                      setCurrentCategory(
                        category?.parentCategory[0].parentCategory[0].name
                      )
                    }
                  >
                    {category?.parentCategory[0].parentCategory[0].name}
                  </h6>
                </Col>
              </Row>
              <Row className="d-flex py-1">
                <Col md={2} xs={2} sm={2} className="d-flex align-items-center pe-4">
                  {/* <FontAwesomeIcon icon={faArrowCircleLeft} className="fa-sm align-self-center"/> */}
                  {/* <h5 className="px-2 mb-0">Categories</h5> */}
                </Col>
                <Col md={10} xs={10} sm={10} className="d-flex align-items-center px-0">
                  {/* <FontAwesomeIcon icon={faArrowCircleLeft} className=""/> */}
                  <h6
                    className="mb-0 align-self-center smallTxt"
                    onClick={() =>
                      setCurrentCategory(category?.parentCategory[0].name)
                    }
                  >
                    {category?.parentCategory[0].name}
                  </h6>
                </Col>
              </Row>
              <Row className="d-flex px-2 py-1">
                <Col md={2} xs={2} sm={2} className="d-flex align-items-center pe-4">
                  {/* <FontAwesomeIcon icon={faArrowCircleLeft} className="fa-sm align-self-center"/> */}
                  {/* <h5 className="px-2 mb-0">Categories</h5> */}
                </Col>
                <Col md={10} xs={10} sm={10} className="d-flex align-items-center px-0">
                  {/* <FontAwesomeIcon icon={faArrowCircleLeft} className=""/> */}
                  <h6
                    className="mb-0 align-self-center smallTxt text-bold"
                    onClick={() => setCurrentCategory(category?.name)}
                  >{`${category?.name} (${
                    category.categoryListNo > 0 ? category.categoryListNo : 0
                  })`}</h6>
                </Col>
              </Row>
              {category.parentCategory[0].subCategories.length > 0 &&
                category.parentCategory[0].subCategories?.forEach((subCat) => {
                  console.log(currentCategory, subCat);
                  if (subCat.name !== currentCategory) {
                    return (
                      <Row className="d-flex px-2 py-1" key={subCat._id}>
                        <Col md={2} xs={2} sm={2} className="d-flex align-items-center pe-4">
                          {/* <FontAwesomeIcon icon={faArrowCircleLeft} className="fa-sm align-self-center"/> */}
                          {/* <h5 className="px-2 mb-0">Categories</h5> */}
                        </Col>
                        <Col md={10} xs={10} sm={10} className="d-flex align-items-center px-0">
                          {/* <FontAwesomeIcon icon={faArrowCircleLeft} className=""/> */}
                          <h6
                            className="mb-0 align-self-center smallTxt"
                            onClick={() => setCurrentCategory(subCat.name)}
                          >{`${subCat.name} (${
                            subCat.categoryListNo > 0
                              ? subCat.categoryListNo
                              : 0
                          })`}</h6>
                        </Col>
                      </Row>
                    );
                  }
                })}
            </Container>
          </Card.Body>
        </Card>
      );
    } else if (category.categoryLevel === 2) {
      const subCatList = category?.subCategories;

      let subCatListNo;

      if (subCatList.length > 0) {
        let catListTotal = subCatList?.reduce(function (a, b) {
          // console.log( "a", a, "b", b)
          return { categoryListNo: a.categoryListNo + b.categoryListNo }; // returns object with property x
        });

        console.log(catListTotal);

        subCatListNo = {
          ...catListTotal,
          categoryListNo: category.categoryListNo,
        };
      } else {
        subCatListNo = { categoryListNo: category.categoryListNo };
      }

      console.log(subCatListNo);

      return (
        <Card style={{ width: "100%" }} className="my-4 py-4 profileCard">
          <Card.Body className="">
            <Container className="px-2">
              <Row>
                <h4>Categories</h4>
              </Row>
              <Row className="d-flex py-0">
                <Col md={2} xs={2} sm={2} className="d-flex align-items-center pe-4">
                  <FontAwesomeIcon
                    icon={faArrowCircleLeft}
                    className="fa-sm align-self-center fa-regular"
                  />
                  {/* <h5 className="px-2 mb-0">Categories</h5> */}
                </Col>
                <Col md={10} xs={10} sm={10} className="d-flex align-items-center px-0">
                  {/* <FontAwesomeIcon icon={faArrowCircleLeft} className=""/> */}
                  <h6
                    className="mb-0 align-self-center smallTxt"
                    onClick={() =>
                      setCurrentCategory(category?.parentCategory[0].name)
                    }
                  >
                    {category?.parentCategory[0].name}
                  </h6>
                </Col>
              </Row>
              <Row className="d-flex py-1">
                <Col md={2} xs={2} sm={2} className="d-flex align-items-center pe-4">
                  {/* <FontAwesomeIcon icon={faArrowCircleLeft} className="fa-sm align-self-center"/> */}
                  {/* <h5 className="px-2 mb-0">Categories</h5> */}
                </Col>
                <Col md={10} xs={10} sm={10} className="d-flex align-items-center px-0">
                  {/* <FontAwesomeIcon icon={faArrowCircleLeft} className=""/> */}
                  <h6
                    className="mb-0 align-self-center smallTxt text-bold"
                    onClick={() => setCurrentCategory(category.name)}
                  >{`${category.name}  (${
                    subCatListNo?.categoryListNo > 0
                      ? subCatListNo?.categoryListNo
                      : 0
                  })`}</h6>
                </Col>
              </Row>
              {category.subCategories?.map((subCat) => {
                const subCatList = subCat.subCategories;

                const catListTotal = subCatList?.reduce(function (a, b) {
                  console.log("a", a.name, "b", b.name);
                  return {
                    categoryListNo: a.categoryListNo + b.categoryListNo,
                  }; // returns object with property x
                });

                return (
                  <Row className="d-flex px-2 py-1" key={subCat._id}>
                    <Col md={2} xs={2} sm={2} className="d-flex align-items-center pe-4">
                      {/* <FontAwesomeIcon icon={faArrowCircleLeft} className="fa-sm align-self-center"/> */}
                      {/* <h5 className="px-2 mb-0">Categories</h5> */}
                    </Col>
                    <Col md={10} xs={10} sm={10} className="d-flex align-items-center px-0">
                      {/* <FontAwesomeIcon icon={faArrowCircleLeft} className=""/> */}
                      <h6
                        className="mb-0 align-self-center smallTxt"
                        onClick={() => setCurrentCategory(subCat.name)}
                      >{`${subCat.name}  (${
                        catListTotal?.categoryListNo > 0
                          ? catListTotal?.categoryListNo
                          : 0
                      })`}</h6>
                    </Col>
                  </Row>
                );
              })}
            </Container>
          </Card.Body>
        </Card>
      );
    } else if (category.categoryLevel === 1) {
      const subCatListOne = category?.subCategories;

      let catListTotalOne = subCatListOne?.map((x) => {
        const subCatListArray = x?.subCategoryIDs;

        console.log(subCatListArray);

        if (subCatListArray.length > 0) {
          let secondArrayTotal = subCatListArray?.reduce(function (a, b) {
            return { categoryListNo: a.categoryListNo + b.categoryListNo }; // returns object with property x
          });

          return { ...secondArrayTotal, categoryListNo: x.categoryListNo };
        } else {
          let secondArrayTotalNum = { categoryListNo: x.categoryListNo };

          return secondArrayTotalNum;
        }
        // console.log( "a", a, "b", b)
        // returns object with property x
      });

      console.log(catListTotalOne);

      const catFinalTotal = catListTotalOne?.reduce(function (a, b) {
        return { categoryListNo: a.categoryListNo + b.categoryListNo }; // returns object with property x
      });

      console.log(catFinalTotal);

      return (
        <Card style={{ width: "100%" }} className="my-4 py-4 profileCard">
          <Card.Body className="">
            <Container className="px-2">
              <Row>
                <h4>Categories</h4>
              </Row>
              <Row className="d-flex py-0">
                <Col md={2} xs={2} sm={2} className="d-flex align-items-center pe-4">
                  <FontAwesomeIcon
                    icon={faArrowCircleLeft}
                    className="fa-sm align-self-center fa-regular"
                  />
                  {/* <h5 className="px-2 mb-0">Categories</h5> */}
                </Col>
                <Col md={10} xs={10} sm={10} className="d-flex align-items-center px-0">
                  {/* <FontAwesomeIcon icon={faArrowCircleLeft} className=""/> */}
                  <h6
                    onClick={() => history.push(`/search/category/All`)}
                    className="mb-0 align-self-center smallTxt"
                  >
                    All Categories
                  </h6>
                </Col>
              </Row>
              <Row className="d-flex py-1">
                <Col md={2} xs={2} sm={2} className="d-flex align-items-center pe-4">
                  {/* <FontAwesomeIcon icon={faArrowCircleLeft} className="fa-sm align-self-center"/> */}
                  {/* <h5 className="px-2 mb-0">Categories</h5> */}
                </Col>
                <Col md={10} xs={10} sm={10} className="d-flex align-items-center px-0">
                  {/* <FontAwesomeIcon icon={faArrowCircleLeft} className=""/> */}
                  <h6
                    className="mb-0 align-self-center smallTxt text-bold"
                    onClick={() => setCurrentCategory(category.name)}
                  >{`${category.name} (${
                    catFinalTotal.categoryListNo > 0
                      ? catFinalTotal.categoryListNo
                      : 0
                  })`}</h6>
                </Col>
              </Row>
              {category.subCategories?.map((subCat) => {
                const subCatList = subCat.subCategories;

                const catListNum = subCatList?.reduce(function (a, b) {
                  console.log("a", a.name, "b", b.name);
                  return {
                    categoryListNo: a.categoryListNo + b.categoryListNo,
                  }; // returns object with property x
                });

                const catListTotal = {
                  ...catListNum,
                  categoryListNo: subCat.categoryListNo,
                };

                console.log(catListTotal);

                return (
                  <Row className="d-flex px-2 py-1" key={subCat._id}>
                    <Col md={2} xs={2} sm={2} className="d-flex align-items-center pe-4">
                      {/* <FontAwesomeIcon icon={faArrowCircleLeft} className="fa-sm align-self-center"/> */}
                      {/* <h5 className="px-2 mb-0">Categories</h5> */}
                    </Col>
                    <Col md={10} xs={10} sm={10} className="d-flex align-items-center px-0">
                      {/* <FontAwesomeIcon icon={faArrowCircleLeft} className=""/> */}
                      <h6
                        className="mb-0 align-self-center smallTxt"
                        onClick={() => setCurrentCategory(subCat.name)}
                      >{`${subCat.name} (${
                        catListTotal.categoryListNo > 0
                          ? catListTotal.categoryListNo
                          : 0
                      })`}</h6>
                    </Col>
                  </Row>
                );
              })}
            </Container>
          </Card.Body>
        </Card>
      );
    }
  }
}
