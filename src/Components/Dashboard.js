import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  PeopleFill,
  BriefcaseFill,
  JournalMedical,
  PlusCircleFill,
} from "react-bootstrap-icons";
import { getDoctors } from "../services/DoctorService";
import { getPatients } from "../services/PatientService";
import { getAppointments } from "../services/AppointmentService";
import { getBlogs } from "../services/BlogService";
import { getReviews } from "../services/ReviewService";
import {
  getDoctorAlerts,
  getPatientAlerts,
  getDashboard,
  setDashboard,
} from "../services/NotificationService";
import { connect } from "react-redux";
import Dash from "../styles/Dashboard.module.css";
import Appointment from "./Appointments";
import LineChart from "./LineChart";
import BarChart from "./BarChart";

const Dashboard = (props) => {
  const { register, handleSubmit } = useForm();
  const { patients, appointments, user, blogs, doctors, dashboard } = props;
  console.log(dashboard);
  useEffect(() => {
    // const user = JSON.parse(Cookie.get("user"));
    if (user?.token) {
      getDoctors().then((res) => {
        props.dispatch({ type: "GET_DOCTORS", payload: res });
      });
      getDashboard().then((res) => {
        console.log(res);
        props.dispatch({ type: "SET_DASHBOARD", payload: res });
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
  const onSubmit = (data) => {
    console.log(data);
    setDashboard(data).then((res) => {
      console.log(res.data);
      props.dispatch({
        type: "SET_DASHBOARD",
        payload: res.data,
      });
    });
  };
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
              <h5 className={Dash.counterNumber}>
                {dashboard?.total_patients}
              </h5>
            </div>
          </div>
          {/* number two */}
          <div className={Dash.counter}>
            <div className={Dash.counterIcon} style={{ background: "#FE764B" }}>
              <PlusCircleFill size={28} />
            </div>
            <div className={Dash.details}>
              <h6>Total Doctors</h6>
              <h5 className={Dash.counterNumber}>{dashboard?.total_doctors}</h5>
            </div>
          </div>
          {/* number three */}
          <div className={Dash.counter}>
            <div className={Dash.counterIcon} style={{ background: "#FFDE1f" }}>
              <BriefcaseFill size={28} />
            </div>
            <div className={Dash.details}>
              <h6>Total Appointments</h6>
              <h5 className={Dash.counterNumber}>
                {dashboard?.total_appointments}
              </h5>
            </div>
          </div>
          {/* number four    */}
          <div className={Dash.counter}>
            <div className={Dash.counterIcon} style={{ background: "#70CF98" }}>
              <JournalMedical size={28} />
            </div>
            <div className={Dash.details}>
              <h6>Total Blogs</h6>
              <h5 className={Dash.counterNumber}>{dashboard?.total_posts}</h5>
            </div>
          </div>
        </Col>
      </Row>
      {/* Counters End*/}
      <Row>
        <Col xs={12} className="datePicker">
          <Form onSubmit={handleSubmit(onSubmit)} className="d-flex  ">
            <Form.Group controlId="startdate" className="d-flex">
              <Form.Label>From</Form.Label>
              <Form.Control
                type="date"
                name="startdate"
                {...register("start_date")}
                style={{ height: "40px" }}
                className="mx-2 "
                required
              />
            </Form.Group>
            <Form.Group controlId="enddate" className="d-flex">
              <Form.Label>To</Form.Label>
              <Form.Control
                type="date"
                name="enddate"
                {...register("end_date")}
                style={{ height: "40px" }}
                className="mx-2 "
                required
              />
            </Form.Group>
            <Form.Group controlId="submit">
              <Button variant="dark" type="submit">
                Submit
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
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
    doctors: state.doctors,
    patients: state.patients,
    appointments: state.appointments,
    blogs: state.blogs,
    user: state.user,
    dashboard: state.dashboard,
  };
};
export default connect(mapStateToProps)(Dashboard);
