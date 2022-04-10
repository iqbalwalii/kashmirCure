import { Table, Button } from "react-bootstrap";
import { connect } from "react-redux";
import Link from "next/link";
import { useState } from "react";
const Consultations = (props) => {
  const { appointments } = props;
  // const onDeleteHandler = (id) => {
  //   deleteAppointment(id).then((res) => {
  //     getAppointments().then((res) => {
  //       props.dispatch({
  //         type: "GET_APPOINTMENTS",
  //         payload: res.data.appointments,
  //       });
  //     });
  //   });
  // };
  const [list, setList] = useState(12);
  return (
    <>
      <div className="appointments">
        <h4> Appointments</h4>
        <Table striped hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Date</th>
              <th>Age</th>
              <th>Status</th>
              {/* <th>Action</th> */}
            </tr>
          </thead>
          <tbody>
            {appointments?.slice(0, list)?.map((patient, index) => {
              return (
                <Link href={`appointment/${patient._id}`} key={index}>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{patient?.name}</td>
                    <td>{patient?.start_time?.slice(0, 10)}</td>
                    <td>{patient?.age}</td>
                    <td>{patient?.appointment_status}</td>
                    {/* <td>
                      <Button
                        variant="danger"
                        onClick={() => onDeleteHandler(patient?._id)}
                      >
                        <Trash />
                      </Button>
                    </td> */}
                  </tr>
                </Link>
              );
            })}
          </tbody>
        </Table>
        {appointments?.length > list && (
          <Row>
            <Col md={{ span: 2, offset: 5 }}>
              <Button
                onClick={() => {
                  setList(list + 5);
                }}
                variant="dark"
              >
                Load More
              </Button>
            </Col>
          </Row>
        )}
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    appointments: state.appointments,
  };
};
export default connect(mapStateToProps)(Consultations);
