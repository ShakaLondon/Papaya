import { ListGroup, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import CategoryCard from '../card'

export default function CategoryListEight (props) {

    return (
    
        <Container fluid className="px-2">
            <ListGroup>
                <ListGroup.Item className="border-0 categoryListItem">
                    <CategoryCard linkTitle={"Shampoo"} iconLink={"https://img.icons8.com/color-glass/30/000000/shampoo.png"}></CategoryCard>
                </ListGroup.Item>
                <ListGroup.Item className="border-0 categoryListItem">
                    <CategoryCard linkTitle={"Shampoo"} iconLink={"https://img.icons8.com/color-glass/30/000000/shampoo.png"}></CategoryCard>
                </ListGroup.Item>
                <ListGroup.Item className="border-0 categoryListItem">
                    <CategoryCard linkTitle={"Shampoo"} iconLink={"https://img.icons8.com/color-glass/30/000000/shampoo.png"}></CategoryCard>
                </ListGroup.Item>
            </ListGroup>
        </Container>

    );

  }