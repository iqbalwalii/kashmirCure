import { useEffect } from "react";
import { Card, Row, Col, Table } from "react-bootstrap";
import Link from "next/link";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { getAppointment } from "../../services/AppointmentService";
import Side from "../../Components/Navigator";
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
    <Row>
      <Col xs={2}>
        <Side />
      </Col>
      <Col xs={9}>
        <Row className="mt-3">
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
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={`${process.env.NEXT_PUBLIC_API_URL}/files/${data?.doctor_picture}`}
          />
          <Card.Body>
            <Card.Title>Doctor</Card.Title>
            <Card.Text>Dr. {data?.doctor_name}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
const mapStateToProps = (state) => {
  return {
    appointment: state.appointment,
  };
};
export default connect(mapStateToProps)(Appointment);
