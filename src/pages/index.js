import { useState, useEffect } from "react";
import Dashboard from "../Components/Dashboard";
import Consultations from "../Components/Consultations";
import Side from "../Components/Navigator";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import Doctors from "../Components/Doctors";
import Patients from "../Components/Patients";
import Reviews from "../Components/Reviews";
function Home(props) {
  return (
    <>
      <Row>
        <Col xs={12} sm={3}>
          <Side />
        </Col>
        <Col xs={12} sm={9}>
          {props.tab === "dashboard" ? (
            <Dashboard />
          ) : props.tab === "app" ? (
            <Consultations />
          ) : props.tab === "doctor" ? (
            <Doctors />
          ) : props.tab === "patient" ? (
            <Patients />
          ) : (
            <Reviews />
          )}
        </Col>
      </Row>
    </>
  );
}
const mapStateToProps = (state) => {
  return { ...state };
};
export default connect(mapStateToProps)(Home);
