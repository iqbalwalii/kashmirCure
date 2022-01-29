import Head from "next/head";
import Image from "next/image";
import Sidebar from "../styles/Sidebar.module.css";
import Dashboard from "../components/Dashboard";
import { Container, Row, Col } from "react-bootstrap";
import {
  GridFill,
  BriefcaseFill,
  PersonFill,
  PeopleFill,
  JournalFill,
  ArrowBarRight,
  Journal,
} from "react-bootstrap-icons";

export default function Home() {
  return (
    <>
      <Row>
        <Col xs={12} sm={3}>
          <div className={Sidebar.main}>
            <h2>K-Cure</h2>
            <ul>
              <li>
                <GridFill /> &nbsp; <span> Dashboard</span>
              </li>
              <li>
                <BriefcaseFill /> &nbsp; <span> Appointments</span>
              </li>
              <li>
                <PersonFill /> &nbsp; <span>Doctors</span>
              </li>
              <li>
                <PeopleFill /> &nbsp; <span>Patients</span>
              </li>
            </ul>
            <hr />
            <ul>
              <li>
                <Journal /> &nbsp; <span> Blog</span>
              </li>
              <li>
                <ArrowBarRight /> &nbsp; <span> Logout</span>
              </li>
            </ul>
          </div>
        </Col>
        <Col xs={12} sm={9}>
          <Dashboard />
        </Col>
      </Row>
    </>
  );
}
