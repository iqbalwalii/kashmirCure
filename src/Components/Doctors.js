import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import Link from "next/link";
const Doctors = (props) => {
  const { doctors } = props;
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
                    <td>{doctor.stus === 0 ? "Not Approved" : "Approved"}</td>
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
