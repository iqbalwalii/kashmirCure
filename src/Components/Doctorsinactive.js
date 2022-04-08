import { Table } from "react-bootstrap";
import { useEffect } from "react";
import { connect } from "react-redux";
import { getInActiveDoctors } from "../services/DoctorService";
import Link from "next/link";
const Doctors = (props) => {
  const { doctors } = props;
  useEffect(() => {
    getInActiveDoctors().then((res) => {
      props.dispatch({ type: "GET_INACTIVE_DOCTORS", payload: res.doctors });
    });
  }, [doctors]);
  return (
    <>
      <div className="appointments">
        <h4>InActive/Active Unapproved Doctors</h4>
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
                <Link href={`/doctor/${doctor._id}`}>
                  <tr key={doctor._id}>
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
  return { ...state, doctors: state.inActivedoctors };
};
export default connect(mapStateToProps)(Doctors);
