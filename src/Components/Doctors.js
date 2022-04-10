import { Table, Button, Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { getDoctors } from "../services/DoctorService";
import Link from "next/link";
import { useEffect, useState } from "react";
const Doctors = (props) => {
  const { doctors } = props;
  console.log(doctors.length);
  const [list, setList] = useState(12);
  useEffect(() => {
    getDoctors().then((res) => {
      props.dispatch({
        type: "GET_ACTIVE_DOCTORS",
        payload: res,
      });
    });
  }, [doctors]);
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
            {doctors?.slice(0, list).map((doctor, index) => {
              return (
                <>
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
                </>
              );
            })}
          </tbody>
        </Table>
        {doctors?.length > list && (
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
  return { ...state, doctors: state.doctors };
};
export default connect(mapStateToProps)(Doctors);
