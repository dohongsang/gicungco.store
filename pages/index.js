import Head from "next/head";
import {
  Navbar,
  Nav,
  InputGroup,
  FormControl,
  Button,
  Row,
  Col,
} from "react-bootstrap";

import ProductList from "../components/products";
import { withApollo } from "../lib/client";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const USER_QUERY = gql`
  query UserQuery {
    users {
      id_
      name
      email
    }
  }
`;

const Home = () => {
  const { data, loading } = useQuery(USER_QUERY);
  console.log(data);

  return (
    <div>
      <Head>
        <title>Chuyên dụng cụ cầu lông</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="main">
          <div className="header bg-white shadow-sm">
            <Row className="justify-content-md-center m-0">
              <Col sm="12" lg="10" xl="9">
                <Navbar
                  collapseOnSelect
                  expand="lg"
                  variant="light"
                  className="p-0"
                >
                  <Navbar.Brand href="#home">
                    <img src="logo.png" width="100" />
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    {/* <Nav>
                      <Nav.Link href="#deets">Cầu lông</Nav.Link>
                    </Nav> */}
                    <Nav className="ml-auto">
                      <InputGroup size="sm">
                        <FormControl
                          style={{ width: "20rem" }}
                          placeholder="Tìm kiếm sản phẩm cầu lông..."
                          aria-label="Recipient's username"
                          aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                          <Button variant="outline-secondary" className="p-0">
                            <i className="mi md-18 ml-2 mr-2">search</i>
                          </Button>
                        </InputGroup.Append>
                      </InputGroup>
                    </Nav>
                    <Nav className="ml-3">
                      <Nav.Link href="#deets">
                        <i className="mi md-24 md-dark">shopping_cart</i>
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
              </Col>
            </Row>
          </div>
          <Row className="justify-content-md-center m-0">
            <Col sm="12" lg="10" xl="9" className="p-0 shadow">
              <section className="content">
                <aside className="sidebar">
                  <div className="nav-side-bar">
                    <ul>
                      <li className="active">
                        <a href="#">Vợt</a>
                      </li>
                      <li>
                        <a href="#">Balo</a>
                      </li>
                      <li>
                        <a href="#">Quần áo</a>
                      </li>
                      <li>
                        <a href="#">Quấn cán vợt</a>
                      </li>
                      <li>
                        <a href="#">Quấn chân</a>
                      </li>
                      <li>
                        <a href="#">Quấn tay</a>
                      </li>
                    </ul>
                  </div>
                </aside>
                <div className="content-body">
                  <div className="child">
                    <ProductList />
                  </div>
                </div>
              </section>
              <footer className="bg-light">
                <div className="container">
                  <Row className="justify-content-between">
                    <Col>
                      <div className="p-4">
                        <span className="logo">
                          <span id="st">GiCungCo</span>
                          <span id="st-prefix">Store</span>
                        </span>
                        <span className="text-primary name-logo">
                          Dụng cụ thể thao - cầu lông
                        </span>
                        <div className="about-us">
                          <br />
                          <h6>Về chúng tôi</h6>
                          <p>
                            Chuyên đồ cầu lông như vợt, quấn cán, quần áo.Mặt
                            hàng đa dạng, mẫu mã phong phú. Hàng hóa đảm bảo uy
                            tín và chất lượng
                          </p>
                          <br />
                          <h6>Liên hệ</h6>
                          <div className="d-flex align-items-center">
                            <i className="mi md-18">smartphone</i>
                            <div className="phone">0349685808 - 0349691183</div>
                          </div>
                          <div className="d-flex align-items-center">
                            <i className="mi md-18">place</i>
                            <div className="address">
                              22/14 Phan Văn Hớn, phường Tân Thới Nhất, Quận 12
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div className="p-4 text-right">
                        <div
                          className="fb-page"
                          data-href="https://www.facebook.com/G&#xec;-C&#x169;ng-C&#xf3;-Chuy&#xea;n-c&#x1ea7;u-l&#xf4;ng-257923138485946/"
                          data-tabs=""
                          data-width=""
                          data-height=""
                          data-small-header="true"
                          data-adapt-container-width="true"
                          data-hide-cover="true"
                          data-show-facepile="true"
                        >
                          <blockquote
                            cite="https://www.facebook.com/G&#xec;-C&#x169;ng-C&#xf3;-Chuy&#xea;n-c&#x1ea7;u-l&#xf4;ng-257923138485946/"
                            className="fb-xfbml-parse-ignore"
                          >
                            <a href="https://www.facebook.com/G&#xec;-C&#x169;ng-C&#xf3;-Chuy&#xea;n-c&#x1ea7;u-l&#xf4;ng-257923138485946/">
                              Gì Cũng Có - Chuyên cầu lông
                            </a>
                          </blockquote>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </footer>
            </Col>
          </Row>
        </div>
      </main>
    </div>
  );
};
export default withApollo(Home);
