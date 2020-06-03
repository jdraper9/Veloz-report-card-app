import React from 'react';
import CourseTable from './components/CourseTable';

import './App.css';

import { Container, Navbar, NavbarBrand, Row, Col, Table } from 'reactstrap';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      semesters: {},
      gpa: null,
    };
  }

  componentDidMount() {
    this.getGradeList();
  }

  getGradeList = () => {
    fetch('/api/grades')
      .then((res) => res.json())
      .then((res) => {
        // res is json returned from db. Send to React state in correct array / object format.
        // console.log(res);
        let semesters = {};
        for (const key in res) {
          let grade = res[key];
          // if a semester key isn't added yet, add one
          if (!semesters[grade.semester]) {
            semesters[grade.semester] = [];
          }
          semesters[grade.semester].push([
            grade.course_name,
            grade.letter,
            grade.grade_id,
          ]);
        }
        this.setState({ semesters }, this.calcGPA);
      });
  };

  calcGPA = () => {
    const letterMap = {
      A: 5,
      'A-': 4.5,
      'B+': 4.5,
      B: 4,
      'B-': 3.5,
      'C+': 3.5,
      C: 3,
      'C-': 2.5,
      'D+': 2.5,
      D: 2,
      'D-': 1.5,
      'F+': 1.5,
      F: 1,
    };
    console.log(this.state.semesters);
  };

  _renderGrades = () => {
    return Object.entries(this.state.semesters)
      .slice(0)
      .reverse()
      .map(([semester, courses], i) => {
        return (
          <Table borderless key={i}>
            <thead>
              <tr>
                <th style={{ width: '40%', fontSize: '1.5rem' }}>{semester}</th>
              </tr>
            </thead>
            <CourseTable courses={courses} />
          </Table>
        );
      });
  };

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

        <Row>
          <Col sm={{ size: 6, order: 2, offset: 1 }}>
            <Table borderless>
              <thead>
                <tr>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th
                    scope="row"
                    style={{ width: '40%' }}
                    className="student-table"
                  >
                    Name
                  </th>
                  <td className="student-table">John Doe</td>
                </tr>
                <tr>
                  <th className="student-table" scope="row">
                    GPA
                  </th>
                  <td className="student-table">3.63</td>
                </tr>
                <tr>
                  <th className="student-table" scope="row">
                    Major
                  </th>
                  <td className="student-table">Computer Science</td>
                </tr>
              </tbody>
            </Table>
            <br></br>
            {/* render individual course grades */}
            {this.state.semesters === {} ? (
              <div>loading...</div>
            ) : (
              this._renderGrades()
            )}
            <br></br>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
