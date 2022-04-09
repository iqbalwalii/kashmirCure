import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import { getDoctors } from "../services/DoctorService";
import Link from "next/link";
import { useEffect } from "react";
const Doctors = (props) => {
  const { doctors } = props;
  useEffect(() => {
    getDoctors().then((res) => {
      props.dispatch({
        type: "GET_ACTIVE_DOCTORS",
        payload: res,
      });
    });
  }, []);
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
              <th>Approval</th>
            </tr>
          </thead>
          <tbody>
            {doctors?.map((doctor, index) => {
              return (
                <Link href={`/doctor/${doctor._id}`} key={doctor._id}>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{doctor.name}</td>
                    <td>{doctor.gender}</td>
                    <td>
                      {doctor?.specializations?.map((e) => e?.name + ", ")}
                    </td>
                    <td>
                      {doctor?.isActive === false ? "Inactive" : "Active"}
                    </td>
                    <td>
                      {doctor.is_verified === false
                        ? "Not Approved"
                        : "Approved"}
                    </td>
                  </tr>
                </Link>
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
