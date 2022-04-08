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
import { getAppointments } from "../services/AppointmentService";
import { getAds } from "../services/AdService";
import { getBlogs } from "../services/BlogService";
import { getReviews } from "../services/ReviewService";
import {
  getDoctorAlerts,
  getPatientAlerts,
} from "../services/NotificationService";
import { connect } from "react-redux";
import Dash from "../styles/Dashboard.module.css";
import Appointment from "./Appointments";
import LineChart from "./LineChart";
import BarChart from "./BarChart";

const Dashboard = (props) => {
  const { doctors, patients, appointments, user, blogs } = props;

  useEffect(() => {
    // const user = JSON.parse(Cookie.get("user"));
    if (user?.token) {
      getDoctors().then((res) => {
        props.dispatch({ type: "GET_DOCTORS", payload: res.doctors });
      });
      getPatients().then((res) => {
        props.dispatch({ type: "GET_PATIENTS", payload: res.patients });
      });
      getAppointments().then((res) => {
        props.dispatch({
          type: "GET_APPOINTMENTS",
          payload: res.data.appointments,
        });
      });
      getAds().then((res) => {
        props.dispatch({
          type: "GET_ADS",
          payload: res.data.ads,
        });
      });
      getBlogs().then((res) => {
        props.dispatch({
          type: "GET_BLOGS",
          payload: res.data.posts,
        });
      });
      getReviews().then((res) => {
        props.dispatch({
          type: "GET_REVIEWS",
          payload: res.data.reviews,
        });
      });
      getPatientAlerts().then((res) => {
        props.dispatch({
          type: "GET_PATIENT_ALERTS",
          payload: res.data.notifications,
        });
      });
      getDoctorAlerts().then((res) => {
        props.dispatch({
          type: "GET_DOCTOR_ALERTS",
          payload: res.data.notifications,
        });
      });
    }
  }, []);
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
              <h5 className={Dash.counterNumber}>{blogs?.length}</h5>
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
    user: state.user,
  };
};
export default connect(mapStateToProps)(Dashboard);
