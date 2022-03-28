import React, { useState } from "react";
import { Navbar, Container, NavDropdown, Nav, Button } from "react-bootstrap";
import "./App.css";
import Data from "./data";
import { Link, Route, Switch } from "react-router-dom";
import Detail from "./Detail";

function App() {
  let [shoes, shoes변경] = useState(Data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/detail/:id">Detail</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
        <Route path="/" exact>
          <div className="Jumbotron">
            <h1>20% Season Off</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured
              content or information.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </div>
          {/* Jumbotron 끝 */}
          <div className="container">
            <div className="row">
              {/* ↓아래 주석은 내가 한 것. 하드코딩이라 보기 좋지 않음. */}
              {/* {shoes.map(function (글, i) {
            return (
              <div className="col-md-4">
                <img src="https://codingapple1.github.io/shop/shoes[i].jpg" width="100%" alt="" />
                <h4>{shoes[i].title}</h4>
                <p>
                  {shoes[i].content} & {shoes[i].price}
                </p>
              </div>
            );
          })} */}
              {/* ↑여기까지가 내가 한 것. */}

              {shoes.map((t, i) => {
                // 반복문을 만들 때는 key={i}를 반드시 생성하자.
                return <Card shoes={shoes[i]} i={i} key={i} />;
              })}
            </div>
          </div>
        </Route>
        <Route path="/detail/:id" exact>
          <Detail shoes={shoes}></Detail>
        </Route>
      </Switch>
    </div>
  );

  function Card(props) {
    return (
      <div className="col-md-4">
        <img src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`} width="100%" alt="" />
        <h4>{props.shoes.title}</h4>
        <p>
          {props.shoes.content} & {props.shoes.price}
        </p>
      </div>
    );
  }
}

export default App;
