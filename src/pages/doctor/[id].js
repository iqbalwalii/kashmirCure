import React, { useEffect, useState } from "react";
import { Container, Row, Tab, Col, Table, Button } from "react-bootstrap";
import { getDoctor, setDoctor } from "../../services/DoctorService";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Switch from "react-switch";
// import UpdateDoctor from "../../Components/UpdateDoctor";
const Doctor = (props) => {
  const { doctor } = props;
  const router = useRouter();
  const id = router.query.id;
  useEffect(() => {
    if (router.isReady) {
      getDoctor(id).then((res) => {
        props.dispatch({ type: "GET_DOCTOR", payload: res.doctor });
      });
    }
  }, [router, id, props]);
  const onChangeHandler = () => {
    setDoctor(doctor?._id, !doctor?.is_verified, "is_verified").then((res) => {
      props.dispatch({ type: "GET_DOCTOR", payload: res.doctor });
    });
  };
  const onStatusHandler = () => {
    setDoctor(doctor?._id, !doctor?.isActive, "isActive").then((res) => {
      props.dispatch({ type: "GET_DOCTOR", payload: res.doctor });
    });
  };
  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12} md={6}>
          <h1>
            <Link href="/">
              <a style={{ color: "blue", textDecoration: "none" }}>Kiadah</a>
            </Link>
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
        <Table striped bordered hover responsive>
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
              <td>Starting Date</td>
              <td>{doctor?.createdAt?.slice(0, 10)}</td>
            </tr>
            <tr>
              <td>Approval</td>
              <td>
                <Switch
                  checked={doctor?.is_verified}
                  onChange={onChangeHandler}
                />
              </td>
            </tr>
            <tr>
              <td>Status</td>
              <td>
                <Switch checked={doctor?.isActive} onChange={onStatusHandler} />
              </td>
            </tr>
            <tr>
              <td>Documents</td>
              <td>
                {doctor?.documents?.map((document, index) => {
                  return (
                    <Link
                      href={`${process.env.NEXT_PUBLIC_API_URL}/files/${document}`}
                      key={index}
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
