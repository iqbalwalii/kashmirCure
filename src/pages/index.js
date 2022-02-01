import { useState, useEffect } from "react";
import Dashboard from "../Components/Dashboard";
import Appointment from "../Components/Appointments";
import Side from "../Components/Navigator";
import { Container, Row, Col } from "react-bootstrap";
export default function Home() {
  return (
    <>
      <Row>
        <Col xs={12} sm={3}>
          <Side />
        </Col>
        <Col xs={12} sm={9}>
          <Dashboard />
          <Row>
            <Col sm={8}>
              <Appointment />
            </Col>
            <Col sm={4}></Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
