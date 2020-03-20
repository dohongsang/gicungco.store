import Head from 'next/head'
import ProductList from '../components/products';
import { Navbar, Nav, InputGroup, FormControl, Button, Row, Col } from 'react-bootstrap';

const Home = () => (
  <div>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <div className="main">
        <div className="header bg-white shadow-sm">
          <Row className="justify-content-md-center">
            <Col sm="12" xl="8" className="p-0">
              <Navbar collapseOnSelect expand="lg" variant="light" className="p-0">
                <Navbar.Brand href="#home">
                  <span className="logo">
                    <span id="st">GiCungCo</span>
                    <span id="st-prefix">Store</span>
                  </span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav>
                    <Nav.Link href="#deets">Cầu lông</Nav.Link>
                  </Nav>
                  <Nav className="ml-auto">
                    <InputGroup size="sm">
                      <FormControl
                        style={{ width: '20rem' }}
                        placeholder="Tìm kiếm sản phẩm cầu lông..."
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                      />
                      <InputGroup.Append>
                        <Button variant="outline-secondary" className="p-0"><i className="mi md-18 ml-2 mr-2">search</i></Button>
                      </InputGroup.Append>
                    </InputGroup>
                  </Nav>
                  <Nav className="ml-3">
                    <Nav.Link href="#deets"><i className="mi md-24 md-dark">shopping_cart</i></Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Col>
          </Row>
        </div>
        <Row className="justify-content-md-center">
          <Col sm="12" xl="8" className="p-0">
            <section className="content">
              <aside className="sidebar">
                <div className="nav-side-bar">
                  <ul>
                    <li className="active"><a href="#">Vợt</a></li>
                    <li><a href="#">Balo</a></li>
                    <li><a href="#">Quần áo</a></li>
                    <li><a href="#">Quấn cán vợt</a></li>
                    <li><a href="#">Quấn chân</a></li>
                    <li><a href="#">Quấn tay</a></li>
                  </ul>
                </div>
              </aside>
              <div className="content-body">
                <div className="child bg-light">
                  <ProductList />
                </div>
              </div>
            </section>
          </Col>
        </Row>
      </div>
    </main>
  </div>
)

export default Home
