import React, { useEffect } from "react";
import { Container, Row, Tab, Col, Table, Button } from "react-bootstrap";
import { getDoctor } from "../../services/DoctorService";
import { connect } from "react-redux";
import { useRouter } from "next/router";
const Doctor = (props) => {
  console.log(props);
  const router = useRouter();
  useEffect(() => {
    getDoctor(router.query.id).then((res) => {
      console.log(res.doctor);
      props.dispatch({ type: "GET_DOCTOR", payload: res.doctor });
    });
  }, [router.query.id]);
  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12} md={6}>
          <h1>
            Kashmir <span style={{ color: "blue" }}>Cure</span>
          </h1>
        </Col>
        <Col xs={12} md={{ span: 2, offset: 4 }}>
          <Button variant="info">Update</Button>
          <Button variant="danger">Delete</Button>
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
              <td>{props.doctor.name}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{props.doctor.gender}</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>{props.doctor.phone}</td>
            </tr>
            <tr>
              <td>Category</td>
              <td>{props.doctor.category}</td>
            </tr>
            <tr>
              <td>Recommendation Count</td>
              <td>{props.doctor.recommendation_count}</td>
            </tr>
            <tr>
              <td>Status</td>
              <td>
                {props.doctor.status === 0 ? (
                  <Button variant="danger">Not Active</Button>
                ) : (
                  <Button variant="success">Active</Button>
                )}
              </td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
    doctor: state.doctor,
  };
};
export default connect(mapStateToProps)(Doctor);
