import { useEffect } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import Link from "next/link";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { getAppointment } from "../../services/AppointmentService";
import Image from "next/image";
const Appointment = (props) => {
  const router = useRouter();
  const id = router.query.id;
  const { appointment } = props;
  const data = appointment?.doctor;
  useEffect(() => {
    if (router.isReady) {
      getAppointment(id).then((res) => {
        props.dispatch({
          type: "GET_APPOINTMENT",
          payload: res.data,
        });
      });
    }
  }, [router, id]);
  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12} md={11}>
          <h1>
            <Link href="/dashboard">
              <a style={{ color: "blue", textDecoration: "none" }}>Kiadah</a>
            </Link>
          </h1>
        </Col>
        <Col md={1}>
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}/files/${data?.doctor_picture}`}
            width="80px"
            height="80px"
            alt="doctor"
            style={{ borderRadius: "50%" }}
          />
        </Col>
      </Row>
      <Row>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Key</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Doctor Name</td>
              <td>{data?.doctor_name}</td>
            </tr>
            <tr>
              <td>Patient Name</td>
              <td>{data?.patient_name}</td>
            </tr>
            <tr>
              <td>Status</td>
              <td>{data?.appointment_status}</td>
            </tr>
            <tr>
              <td>Charges</td>
              <td>{data?.charges}</td>
            </tr>
            <tr>
              <td>Started treatment</td>
              <td>{data?.has_started ? "Yes" : "No"}</td>
            </tr>
            <tr>
              <td>Followed Up</td>
              <td>{data?.is_followup ? "Yes" : "No"}</td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};
const mapStateToProps = (state) => {
  return {
    appointment: state.appointment,
  };
};
export default connect(mapStateToProps)(Appointment);
