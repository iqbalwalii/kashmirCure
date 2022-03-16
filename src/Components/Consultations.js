import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
const Consultations = (props) => {
  const { appointments } = props;

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
            </tr>
          </thead>
          <tbody>
            {appointments?.map((patient, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{patient?.name}</td>
                  <td>{patient?.start_time.slice(0, 10)}</td>
                  <td>{patient?.age}</td>
                  <td>{patient?.appointment_status}</td>
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
