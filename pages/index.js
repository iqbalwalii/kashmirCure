import Head from "next/head";
import Image from "next/image";
import Sidebar from "../styles/Sidebar.module.css";
import { Container, Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Row>
        <Col xs={12} md={3}>
          <div className={Sidebar.main}>
            <h2>K-Cure</h2>
            <ul>
              <li>Dashboard</li>
              <li>Appointments</li>
              <li>Doctors</li>
              <li>Patients</li>
            </ul>
          </div>
        </Col>
        <Col xs={12} md={9}>
          2
        </Col>
      </Row>
    </>
  );
}
