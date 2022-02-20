import React from "react";
import { Container, Row, Tab, Col, Table } from "react-bootstrap";

const Doctor = (props) => {
  console.log(props);
  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12}>
          <h1>
            Kashmir <span style={{ color: "blue" }}>Cure</span>
          </h1>
        </Col>
      </Row>
      <Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Key</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>@twitter</td>
              <td colSpan={1}>Larry the Bird</td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default Doctor;
