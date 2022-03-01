
import { Container, Row, Col } from "react-bootstrap";
import CategoryList from "./profile-cards/category-list";
import PopularSubcat from "./profile-cards/popular-subcategories";
import BestCompaniesProducts from "./profile-cards/best-companies-products";

export default function CategorySearchMain({ category, user, isLoggedIn, categoryData }) {
  return (
    <Container id="category-search-main-container" className="container-padding category-cont">
      <Row className="mx-0 px-0">
        <Col md={4} xs={12} sm={12} className="px-4">
          <CategoryList
            category={category.categoryID}
            user={user}
            isLoggedIn={isLoggedIn}
            categoryData={categoryData}
          />
          {/* <ReviewHeader profile={props.profile} user={props.profile} score={props.score} loading={props.loading}/>
                    <ReviewCard profile={props.profile} user={props.user}/>  */}
        </Col>
        <Col md={8} xs={12} sm={12}>
          <PopularSubcat category={category.categoryID} categoryData={categoryData}/>
          <BestCompaniesProducts
            categoryItems={category.categoryItemScores}
            category={category.categoryID}
            categoryData={categoryData}
          />
        </Col>
      </Row>
    </Container>
  );
}
