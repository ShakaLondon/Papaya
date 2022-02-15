import { faStar, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Nav, Container, Navbar, NavDropdown, Row, Col } from "react-bootstrap";
import AllCategoryList from "./profile-cards/all-categories";
import CategorySideBar from "./profile-cards/category-sidebar";

export default function CategoryMain({ category, user, isLoggedIn }) {
  return (
    <Container id="category-main-container">
      <Row className="mx-0 px-0">
        <Col md={4}>
          <CategorySideBar
            category={category.allCategories}
            user={user}
            isLoggedIn={isLoggedIn}
          />
          {/* <ReviewHeader profile={props.profile} user={props.profile} score={props.score} loading={props.loading}/>
                    <ReviewCard profile={props.profile} user={props.user}/>  */}
        </Col>
        <Col md={8}>
          <AllCategoryList category={category.allCategories} />
          {/* <BestCompaniesProducts 
                    // categoryItems={category.categoryItemScores} category={category.categoryID}
                    /> */}
        </Col>
      </Row>
    </Container>
  );
}
