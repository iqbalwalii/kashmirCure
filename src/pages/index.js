import Dashboard from "../Components/Dashboard";
import Side from "../Components/Navigator";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import Doctors from "../Components/Doctors";
import Patients from "../Components/Patients";
import Reviews from "../Components/Reviews";
import Device from "../Components/Device";
import Consultations from "../Components/Consultations";
import Ads from "../Components/Advertisements";
function Home(props) {
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
          ) : props.tab === "ads" ? (
            <Ads />
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
