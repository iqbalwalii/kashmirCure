import React, { useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { getPatients } from "../services/PatientService";
import { connect } from "react-redux";
const Patients = (props) => {
  useEffect(() => {
    getPatients().then((res) => {
      props.dispatch({ type: "GET_PATIENTS", payload: res.patients });
    });
  }, []);
  return (
    <>
      <div className="appointments">
        <h4>Patients</h4>
        <Table striped hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Phone</th>
              <th>City</th>
              <th>State</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {props?.patients.map((patient, index) => {
              return (
                // <Link href="/doctor/[id]" as={`/doctor/${patient._id}`}>
                <tr key={patient?._id}>
                  <td>{index + 1}</td>
                  <td>{patient?.name}</td>
                  <td>{patient?.gender}</td>
                  <td>{patient?.phone}</td>
                  <td>{patient?.address?.city}</td>
                  <td>{patient?.address?.state}</td>
                  <td>{patient?.staus === 0 ? "Not Treated" : "Treated"}</td>
                </tr>
                // </Link>
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
    patients: state.patients,
  };
};
export default connect(mapStateToProps)(Patients);
