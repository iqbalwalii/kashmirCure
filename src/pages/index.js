import Dashboard from "../Components/Dashboard";
import Consultations from "../Components/Consultations";
import Side from "../Components/Navigator";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import Doctors from "../Components/Doctors";
import Patients from "../Components/Patients";
import Reviews from "../Components/Reviews";
import Device from "../Components/Device";
import { useEffect } from "react";
function Home(props) {
  useEffect(() => {
    fetch("https://kashmircure.herokuapp.com/api/doctor")
      .then((result) => result.json())
      .then((result) =>
        props.dispatch({ type: "GET_DOCTORS", payload: result.data })
      )
      .catch((err) => console.log("inside err", err));

    console.log(props);
  }, []);
  return (
    <>
      <Device />
      <Row className="main">
        <Col xs={12} sm={2}>
          <Side />
        </Col>
        <Col xs={12} sm={10}>
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
  return { ...state, doctors: state.doctors, patients: state.Patients };
};
export default connect(mapStateToProps)(Home);
