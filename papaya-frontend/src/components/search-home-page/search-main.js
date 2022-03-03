
import { Container, Row, Col } from "react-bootstrap";
import AllCategoryList from "./profile-cards/all-categories";
import CategorySideBar from "./profile-cards/category-sidebar";
import { connect, } from "react-redux";

const mapStateToProps = (state) => ({
  error: state.appState.error,
  loading: state.appState.loading,
  isLoggedIn: state.user.isLoggedIn,
  userFound: state.user.userFound,
  userProf: state.user,
  colorChangeState: state.appState.colorChange,
  sideMenuState: state.appState.sideMenu,
});

const mapDispatchToProps = (dispatch) => ({

});

const CategoryMain = ({ category, user, isLoggedIn, sideMenuState }) => {
  return (
    <Container id="category-main-container" className={ `${sideMenuState ? "category-cont" : "container-padding category-cont" }`}>
      <Row className="mx-0 px-0">
        <Col md={4}  sm={12} xs={12}>
          <CategorySideBar
            category={category.allCategories}
            user={user}
            isLoggedIn={isLoggedIn}
          />
          {/* <ReviewHeader profile={props.profile} user={props.profile} score={props.score} loading={props.loading}/>
                    <ReviewCard profile={props.profile} user={props.user}/>  */}
        </Col>
        <Col md={8}  sm={12} xs={12}>
          <AllCategoryList category={category.allCategories} />
          {/* <BestCompaniesProducts 
                    // categoryItems={category.categoryItemScores} category={category.categoryID}
                    /> */}
        </Col>
      </Row>
    </Container>
  );
}


export default connect(mapStateToProps, mapDispatchToProps)(CategoryMain);