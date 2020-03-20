import { Card, Col, Row } from 'react-bootstrap';

function ProductList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <Col sm="6" xl="4" className="p-2">
      <Card className="shadow-sm">
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
        </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </Col>
  );
  return (
    <Row className="m-0">{listItems}</Row>
  );
}

const numbers = [1, 2, 3, 4, 5];
const Products = () => (
  <ProductList numbers={numbers}></ProductList>
)
export default Products