import { Table, Button } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
import { connect } from "react-redux";
import { deleteAppointment } from "../services/AppointmentService";
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
            {appointments?.map((patient, index) => {
              return (
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
              );
            })}
          </tbody>
        </Table>
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
