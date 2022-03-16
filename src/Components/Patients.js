import React, { useEffect } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { getPatients, deletePatient } from "../services/PatientService";
import { connect } from "react-redux";
import { Trash } from "react-bootstrap-icons";
const Patients = (props) => {
  useEffect(() => {
    getPatients().then((res) => {
      props.dispatch({ type: "GET_PATIENTS", payload: res.patients });
    });
  }, []);
  const onDeleteHandler = (id) => {
    deletePatient(id).then(() => {
      getPatients().then((res) => {
        props.dispatch({ type: "GET_PATIENTS", payload: res.patients });
      });
    });
  };
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
              <th>Action</th>
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
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => onDeleteHandler(patient?._id)}
                    >
                      <Trash />
                    </Button>
                  </td>
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
