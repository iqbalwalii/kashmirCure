import { Table, Button, Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { getDoctors } from "../services/DoctorService";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
const Doctors = (props) => {
  const { doctors, dashboard } = props;
  console.log(dashboard?.total_doctors);
  let active = 1;
  let items = [];
  const pages = Math.ceil(dashboard?.total_doctors / 10);
  const handleRequest = (num) => {
    getDoctors(num).then((res) => {
      let num = active;
      props.dispatch({
        type: "GET_DOCTORS",
        payload: res,
      });
    });
  };
  for (let number = 1; number <= pages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => handleRequest(number)}
      >
        {number}
      </Pagination.Item>
    );
  }
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
            {doctors?.map((doctor, index) => {
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
        <Row>
          <Col md={{ span: 2, offset: 5 }}>
            <Pagination size="sm">{items}</Pagination>
          </Col>
        </Row>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return { ...state, doctors: state.doctors, dashboard: state.dashboard };
};
export default connect(mapStateToProps)(Doctors);
