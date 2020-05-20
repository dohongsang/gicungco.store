import { Card, Col, Row } from 'react-bootstrap';
import Link from 'next/link';

function ProductList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number, i) =>
    <Col xs="12" sm="6" md="4" lg="4" xl="3" className="p-2" key={i}>
      <Link href="/product/detail">
        <Card className="shadow-sm cursor-pointer h-100">
          <Card.Img variant="top" src={number.image} />
          <Card.Body>
            <Card.Title className="h6">{number.name}</Card.Title>
            <Card.Text className="small">{number.description}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </Link>
    </Col>
  );
  return (
    <Row className="m-0 align-items-stretch">{listItems}</Row>
  );
}

const numbers = [];
const Products = () => (
  <ProductList numbers={numbers}></ProductList>
)
export default Products