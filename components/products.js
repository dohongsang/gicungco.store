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

const numbers = [{
  name: "Quấn cán cầu lông",
  image: "https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-9/89198936_501975514080706_8672999835030257664_o.jpg?_nc_cat=106&_nc_sid=110474&_nc_ohc=451crIpm6REAX-kEdtj&_nc_ht=scontent-hkt1-1.xx&oh=02a0176c1df62602374451c4695f1d69&oe=5E9A6BAB",
  description: "Quấn cán cầu lông #12K <10 cái #10K >10 cái - Có lỗ kim thoáng khí, thấm hút mồ hôi cực tốt. - Cầm lên tay rất êm,bám tay và chống trơn trượt."
}, {
  name: "ÁO VICTOR NAM NỮ",
  image: "https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-9/87947653_497255121219412_7397167623521173504_n.jpg?_nc_cat=105&_nc_sid=110474&_nc_ohc=i0D5ie8B8-YAX8kLLrW&_nc_ht=scontent-hkt1-1.xx&oh=28d84b0dc2e2bf1a5a325bde1d59d019&oe=5E9A42DE",
  description: "Chất vải thun lạnh, dày dặn. \nCó đủ size cho Nam Nữ cả nhà nhé. \nGiá iu thương #135k"
}, {
  name: "Quấn cán cầu lông",
  image: "https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-9/89198936_501975514080706_8672999835030257664_o.jpg?_nc_cat=106&_nc_sid=110474&_nc_ohc=451crIpm6REAX-kEdtj&_nc_ht=scontent-hkt1-1.xx&oh=02a0176c1df62602374451c4695f1d69&oe=5E9A6BAB",
  description: "Quấn cán cầu lông #12K <10 cái #10K >10 cái - Có lỗ kim thoáng khí, thấm hút mồ hôi cực tốt. - Cầm lên tay rất êm,bám tay và chống trơn trượt."
}, {
  name: "ÁO VICTOR NAM NỮ",
  image: "https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-9/87947653_497255121219412_7397167623521173504_n.jpg?_nc_cat=105&_nc_sid=110474&_nc_ohc=i0D5ie8B8-YAX8kLLrW&_nc_ht=scontent-hkt1-1.xx&oh=28d84b0dc2e2bf1a5a325bde1d59d019&oe=5E9A42DE",
  description: "Chất vải thun lạnh, dày dặn. \nCó đủ size cho Nam Nữ cả nhà nhé. \nGiá iu thương #135k"
}, {
  name: "Quấn cán cầu lông",
  image: "https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-9/89198936_501975514080706_8672999835030257664_o.jpg?_nc_cat=106&_nc_sid=110474&_nc_ohc=451crIpm6REAX-kEdtj&_nc_ht=scontent-hkt1-1.xx&oh=02a0176c1df62602374451c4695f1d69&oe=5E9A6BAB",
  description: "Quấn cán cầu lông #12K <10 cái #10K >10 cái - Có lỗ kim thoáng khí, thấm hút mồ hôi cực tốt. - Cầm lên tay rất êm,bám tay và chống trơn trượt."
}, {
  name: "ÁO VICTOR NAM NỮ",
  image: "https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-9/87947653_497255121219412_7397167623521173504_n.jpg?_nc_cat=105&_nc_sid=110474&_nc_ohc=i0D5ie8B8-YAX8kLLrW&_nc_ht=scontent-hkt1-1.xx&oh=28d84b0dc2e2bf1a5a325bde1d59d019&oe=5E9A42DE",
  description: "Chất vải thun lạnh, dày dặn. \nCó đủ size cho Nam Nữ cả nhà nhé. \nGiá iu thương #135k"
}, {
  name: "Quấn cán cầu lông",
  image: "https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-9/89198936_501975514080706_8672999835030257664_o.jpg?_nc_cat=106&_nc_sid=110474&_nc_ohc=451crIpm6REAX-kEdtj&_nc_ht=scontent-hkt1-1.xx&oh=02a0176c1df62602374451c4695f1d69&oe=5E9A6BAB",
  description: "Quấn cán cầu lông #12K <10 cái #10K >10 cái - Có lỗ kim thoáng khí, thấm hút mồ hôi cực tốt. - Cầm lên tay rất êm,bám tay và chống trơn trượt."
}, {
  name: "ÁO VICTOR NAM NỮ",
  image: "https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-9/87947653_497255121219412_7397167623521173504_n.jpg?_nc_cat=105&_nc_sid=110474&_nc_ohc=i0D5ie8B8-YAX8kLLrW&_nc_ht=scontent-hkt1-1.xx&oh=28d84b0dc2e2bf1a5a325bde1d59d019&oe=5E9A42DE",
  description: "Chất vải thun lạnh, dày dặn. \nCó đủ size cho Nam Nữ cả nhà nhé. \nGiá iu thương #135k"
},];
const Products = () => (
  <ProductList numbers={numbers}></ProductList>
)
export default Products