import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  PeopleFill,
  PhoneFill,
  BriefcaseFill,
  JournalMedical,
  PlusCircleFill,
} from "react-bootstrap-icons";
// import { Dash } from "react-bootstrap-icons";
import Dash from "../styles/Dashboard.module.css";
const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col className={Dash.counters}>
          <div className={Dash.counter}>
            <div className={Dash.counterIcon} style={{ background: "#FF6270" }}>
              <PeopleFill size={28} />
            </div>
            <div className={Dash.details}>
              <h6>Total Patients</h6>
              <h5 className={Dash.counterNumber}>1,000</h5>
            </div>
          </div>
          {/* number two */}
          <div className={Dash.counter}>
            <div className={Dash.counterIcon} style={{ background: "#FE764B" }}>
              <PlusCircleFill size={28} />
            </div>
            <div className={Dash.details}>
              <h6>Total Doctors</h6>
              <h5 className={Dash.counterNumber}>1,000</h5>
            </div>
          </div>
          {/* number three */}
          <div className={Dash.counter}>
            <div className={Dash.counterIcon} style={{ background: "#FFDE1f" }}>
              <BriefcaseFill size={28} />
            </div>
            <div className={Dash.details}>
              <h6>Total Apps</h6>
              <h5 className={Dash.counterNumber}>1,000</h5>
            </div>
          </div>
          {/* number four    */}
          <div className={Dash.counter}>
            <div className={Dash.counterIcon} style={{ background: "#70CF98" }}>
              <JournalMedical size={28} />
            </div>
            <div className={Dash.details}>
              <h6>Total Blogs</h6>
              <h5 className={Dash.counterNumber}>1,000</h5>
            </div>
          </div>
          {/* number five */}
          <div className={Dash.counter}>
            <div className={Dash.counterIcon} style={{ background: "#2984FF" }}>
              <PhoneFill size={28} />
            </div>
            <div className={Dash.details}>
              <h6>Total Installs</h6>
              <h5 className={Dash.counterNumber}>1,000</h5>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
