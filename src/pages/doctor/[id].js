import React, { useEffect, useState } from "react";
import { Container, Row, Tab, Col, Table, Button } from "react-bootstrap";
import { getDoctor, deleteDoctor } from "../../services/DoctorService";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
// import UpdateDoctor from "../../Components/UpdateDoctor";
const Doctor = (props) => {
  console.log(props);
  const { doctor } = props;
  const router = useRouter();
  useEffect(() => {
    getDoctor(router.query.id).then((res) => {
      console.log(res.doctor);
      props.dispatch({ type: "GET_DOCTOR", payload: res.doctor });
    });
  }, [router.query.id]);
  const onDeleteHandler = () => {
    deleteDoctor(props.doctor._id).then((res) => {
      console.log(res);
      router.push("/");
    });
  };
  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12} md={6}>
          <h1>
            <span style={{ color: "blue" }}>Kiadah</span>
          </h1>
        </Col>
        {/* <Col xs={12} md={{ span: 2, offset: 4 }}>
          <Button
            variant="info"
            onClick={() => {
              setPopup(!popup);
            }}
          >
            Update
          </Button>
          <Button variant="danger" onClick={onDeleteHandler}>
            Delete
          </Button>
        </Col> */}
      </Row>
      <Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Key</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{doctor?.name}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{doctor?.gender}</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>{doctor?.phone}</td>
            </tr>
            <tr>
              <td>Category</td>
              <td>{doctor?.category}</td>
            </tr>
            <tr>
              <td>Recommendation Count</td>
              <td>{doctor?.recommendation_count}</td>
            </tr>
            <tr>
              <td>Status</td>
              <td>
                {doctor?.status === 0 ? (
                  <Button variant="danger">Not Active</Button>
                ) : (
                  <Button variant="success">Active</Button>
                )}
              </td>
            </tr>
            <tr>
              <td>Documents</td>
              <td>
                {doctor?.documents?.map((document) => {
                  return (
                    <Link
                      href={`${process.env.NEXT_PUBLIC_API_URL}/files/${document}`}
                    >
                      <a target="_blank">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_API_URL}/files/${document}`}
                          width="100px"
                          height="100px"
                          alt="doc"
                        />
                      </a>
                    </Link>
                  );
                })}
              </td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
    doctor: state.doctor,
  };
};
export default connect(mapStateToProps)(Doctor);
