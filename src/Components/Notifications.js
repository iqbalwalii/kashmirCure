import { Table, Row, Col, Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { setAlert } from "../services/NotificationService";

const Notifications = (props) => {
  const [doctorList, setDoctorList] = useState(12);
  const [patientList, setPatientList] = useState(12);
  const { doctorAlerts, patientAlerts } = props;
  const [popup, setPopup] = useState(false);
  const { handleSubmit, register } = useForm();
  const onSubmit = (data) => {
    setAlert(data).then((res) => {
      setPopup(false);
    });
  };
  return (
    <>
      <div className="appointments">
        <Row>
          <Col>
            <h2>Notifications</h2>
          </Col>
          <Col xs={2}>
            <Button variant="dark" onClick={() => setPopup(!popup)}>
              Create
            </Button>
          </Col>
        </Row>
        {popup === false ? (
          <Row>
            <Col>
              <h3>Doctor</h3>
              <Table striped hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Message</th>
                  </tr>
                </thead>
                <tbody>
                  {doctorAlerts?.slice(0, doctorList)?.map((Alert, index) => {
                    return (
                      // <Link href={`/notification/${Alert._id}`}>

                      <tr key={Alert._id}>
                        <td>{index + 1}</td>
                        <td>{Alert.title}</td>
                        <td style={{ fontSize: ".9rem" }}>
                          {Alert.description}
                        </td>
                      </tr>

                      // </Link>
                    );
                  })}
                </tbody>
              </Table>
              {doctorAlerts?.length > doctorList && (
                <Row>
                  <Col md={{ span: 4, offset: 4 }}>
                    <Button
                      onClick={() => {
                        setDoctorList(doctorList + 5);
                      }}
                      variant="dark"
                    >
                      Load More
                    </Button>
                  </Col>
                </Row>
              )}
            </Col>
            <Col>
              <h3>Patient</h3>
              <Table striped hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Message</th>
                  </tr>
                </thead>
                <tbody>
                  {patientAlerts?.slice(0, patientList)?.map((Alert, index) => {
                    return (
                      // <Link href={`/doctor/${Alert._id}`}>
                      <tr key={Alert._id}>
                        <td>{index + 1}</td>
                        <td>{Alert.title}</td>
                        <td style={{ fontSize: ".9rem" }}>
                          {Alert.description}
                        </td>
                      </tr>
                      // </Link>
                    );
                  })}
                </tbody>
              </Table>
              {patientAlerts?.length > patientList && (
                <Row>
                  <Col md={{ span: 4, offset: 4 }}>
                    <Button
                      onClick={() => {
                        setPatientList(patientList + 5);
                      }}
                      variant="dark"
                    >
                      Load More
                    </Button>
                  </Col>
                </Row>
              )}
            </Col>
          </Row>
        ) : (
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formBasicType">
              <Form.Label>Type</Form.Label>
              <Form.Control as="select" name="type" {...register("type")}>
                <option selected disabled>
                  Select Notification Type
                </option>
                <option value="doctor">Doctor</option>
                <option value="patient">Patient</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formBasicTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="Enter Title"
                {...register("title")}
              />
            </Form.Group>
            <Form.Group controlId="formBasicdescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                name="description"
                placeholder="Enter Description"
                {...register("description")}
              />
            </Form.Group>
            <div className="d-grid">
              <Button variant="dark" type="submit" className="mt-3">
                Create
              </Button>
            </div>
          </Form>
        )}
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    doctorAlerts: state.doctorAlerts,
    patientAlerts: state.patientAlert,
  };
};
export default connect(mapStateToProps)(Notifications);
