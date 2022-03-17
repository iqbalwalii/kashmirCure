import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  PeopleFill,
  BriefcaseFill,
  JournalMedical,
  PlusCircleFill,
} from "react-bootstrap-icons";
import { getDoctors } from "../services/DoctorService";
import { getPatients } from "../services/PatientService";
import Dash from "../styles/Dashboard.module.css";
import Appointment from "./Appointments";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import { connect } from "react-redux";
const Dashboard = (props) => {
  const { doctors, patients, appointments, blogs } = props;
  useEffect(() => {
    getDoctors().then((res) => {
      props.dispatch({ type: "GET_DOCTORS", payload: res.doctors });
    });
    getPatients().then((res) => {
      props.dispatch({ type: "GET_PATIENTS", payload: res.patients });
    });
  }, []);
  console.log(props);
  return (
    <Container>
      {/* Counters Start */}

      <Row>
        <Col className={Dash.counters} xs={12}>
          <div className={Dash.counter}>
            <div className={Dash.counterIcon} style={{ background: "#FF6270" }}>
              <PeopleFill size={28} />
            </div>
            <div className={Dash.details}>
              <h6>Total Patients</h6>
              <h5 className={Dash.counterNumber}>{patients?.length}</h5>
            </div>
          </div>
          {/* number two */}
          <div className={Dash.counter}>
            <div className={Dash.counterIcon} style={{ background: "#FE764B" }}>
              <PlusCircleFill size={28} />
            </div>
            <div className={Dash.details}>
              <h6>Total Doctors</h6>
              <h5 className={Dash.counterNumber}>{doctors?.length}</h5>
            </div>
          </div>
          {/* number three */}
          <div className={Dash.counter}>
            <div className={Dash.counterIcon} style={{ background: "#FFDE1f" }}>
              <BriefcaseFill size={28} />
            </div>
            <div className={Dash.details}>
              <h6>Total Appointments</h6>
              <h5 className={Dash.counterNumber}>{appointments?.length}</h5>
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
        </Col>
      </Row>
      {/* Counters End*/}
      <Row>
        <Col className="appointments mt-3 p-1" sm={6}>
          <LineChart />
        </Col>
        {/* <Col sm={1}></Col> */}
        <Col
          style={{ marginLeft: "2.4rem" }}
          className="appointments mt-3 p-1"
          sm={5}
        >
          <BarChart />
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <Appointment />
        </Col>
        {/* <Col
					sm={4}
					style={{
						transform: 'scale(0.7)',
						boxShadow: '2px 2px 10px #ebebeb',
					}}
				>
					<PieChart />
				</Col> */}
      </Row>
    </Container>
  );
};
const mapStateToProps = (state) => {
  return {
    ...state,
    doctors: state.doctors,
    patients: state.patients,
    appointments: state.appointments,
    blogs: state.blogs,
  };
};
export default connect(mapStateToProps)(Dashboard);
