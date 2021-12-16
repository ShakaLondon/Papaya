import { ListGroup, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import CategoryCard from '../card'

export default function CategoryList ({ category }) {

    console.log(category, "category list")

    return (
    
        <Container fluid className="px-2 categoryListCont">
            <ListGroup>
                <ListGroup.Item className="border-0 categoryListItem">
                    {(category[0]) && <CategoryCard linkTitle={category[0]?.name} iconLink={"https://img.icons8.com/color-glass/30/000000/shampoo.png"}></CategoryCard>}
                </ListGroup.Item>
                <ListGroup.Item className="border-0 categoryListItem">
                    {(category[1]) && <CategoryCard linkTitle={category[1]?.name} iconLink={"https://img.icons8.com/color-glass/30/000000/shampoo.png"}></CategoryCard>}
                </ListGroup.Item>
                <ListGroup.Item className="border-0 categoryListItem">
                    {(category[2]) && <CategoryCard linkTitle={category[2]?.name} iconLink={"https://img.icons8.com/color-glass/30/000000/shampoo.png"}></CategoryCard>}
                </ListGroup.Item>
            </ListGroup>
        </Container>

    );

  }