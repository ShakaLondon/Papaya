import { faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Nav, Container, Navbar, NavDropdown, Row, Col } from 'react-bootstrap'
import CategoryList from './profile-cards/category-list';
import PopularSubcat from './profile-cards/popular-subcategories';
import BestCompaniesProducts from './profile-cards/best-companies-products';




export default function CategorySearchMain ({ category, user, isLoggedIn }) {
    return (
        <Container id="category-search-main-container">
            <Row className="mx-0 px-0">
                <Col md={4}>
                    <CategoryList category={category.categoryID} user={user} isLoggedIn={isLoggedIn}/>
                    {/* <ReviewHeader profile={props.profile} user={props.profile} score={props.score} loading={props.loading}/>
                    <ReviewCard profile={props.profile} user={props.user}/>  */}
                   
                </Col>
                <Col md={8}>
                    <PopularSubcat  category={category.categoryID}/>
                    <BestCompaniesProducts categoryItems={category.categoryItemScores} category={category.categoryID}/>

                </Col>
            </Row>

        </Container>
    );
  }