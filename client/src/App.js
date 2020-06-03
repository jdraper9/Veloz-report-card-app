import React from 'react';

import './App.css';

import { Container, Navbar, NavbarBrand, Row, Col, Table } from 'reactstrap';

class App extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    // };
  }

  render() {
    return (
      <Container fluid className="centered">
        <Navbar dark color="dark">
          <NavbarBrand>
            <h1>John Doe - Report Card</h1>
          </NavbarBrand>
          <span className="float-right" style={{ color: 'white' }}>
            123-456-789
          </span>
        </Navbar>
        {/* <Row>
          <Col md={{ offset: 1 }}>Name</Col>
          <Col md={{ offset: 1 }}>John Doe</Col>
          <Col></Col>
          <Col></Col>
        </Row>
        <Row>
          <Col md={{ offset: 1 }}>GPA</Col>
          <Col md={{ offset: 1 }}>3.63</Col>
          <Col></Col>
          <Col></Col>
        </Row> */}

        <Row>
          <Col sm={{ size: 6, order: 2, offset: 1 }}>
            <Table striped>
              <thead>
                <tr>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" style={{ width: '40%' }}>
                    Name
                  </th>
                  <td>John Doe</td>
                </tr>
                <tr>
                  <th scope="row">GPA</th>
                  <td>3.63</td>
                </tr>
                <tr>
                  <th scope="row">Major</th>
                  <td>Computer Science</td>
                </tr>
              </tbody>
            </Table>
            <br></br>

            <Table striped>
              <thead>
                <tr>
                  <th style={{ width: '40%' }}>Winter 2013</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Math 1C</td>
                  <td>B+</td>
                </tr>
                <tr>
                  <td>Comp Sci 100</td>
                  <td>A</td>
                </tr>
                <tr>
                  <td>Comp Sci 111</td>
                  <td>A-</td>
                </tr>
              </tbody>
            </Table>
            <br></br>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
