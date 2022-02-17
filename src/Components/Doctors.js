import React, { useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { connect } from "react-redux";
// import doc from "../services/fetchDoctors";
const Doctors = (props) => {
  //   useEffect(() => {
  //     fetch("https://kashmircure.herokuapp.com/api/doctor")
  //       .then((result) => result.json())
  //       .then((result) =>
  //         props.dispatch({ type: "GET_DOCTORS", payload: result.data })
  //       )
  //       .catch((err) => console.log("inside err", err));
  //     console.log(props);
  //   }, []);
  return (
    <>
      <div className="appointments">
        <h4>Doctors</h4>
        <Table striped hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Speciality</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {props.doctors?.map((doctor, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{doctor.name}</td>
                  <td>{doctor.gender}</td>
                  <td>{doctor?.specializations?.map((e) => e?.name + ", ")}</td>

                  <td>{doctor.stus === 0 ? "Not Approved" : "Approved"}</td>
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
  return { ...state, doctors: state.doctors };
};
export default connect(mapStateToProps)(Doctors);
