import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Tab,
  Col,
  Table,
  Button,
  Dropdown,
  Form,
} from "react-bootstrap";
import { getDoctor, setDoctor } from "../../services/DoctorService";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import Side from "../../Components/Navigator";
import Image from "next/image";
import Link from "next/link";
import Switch from "react-switch";
// import UpdateDoctor from "../../Components/UpdateDoctor";
const Doctor = (props) => {
  const { doctor } = props;
  const router = useRouter();
  const id = router.query.id;
  const [change, setChange] = useState(false);
  useEffect(() => {
    if (router.isReady) {
      getDoctor(id).then((res) => {
        props.dispatch({ type: "GET_DOCTOR", payload: res.doctor });
      });
    }
  }, [change]);
  const onChangeHandler = () => {
    setDoctor(doctor?._id, !doctor?.is_verified, "is_verified").then((res) => {
      props.dispatch({ type: "GET_DOCTOR", payload: res.doctor });
      setChange(!change);
    });
  };
  const onStatusHandler = () => {
    setDoctor(doctor?._id, !doctor?.isActive, "isActive").then((res) => {
      props.dispatch({ type: "GET_DOCTOR", payload: res.doctor });
      setChange(!change);
    });
  };
  const onCategoryHandler = () => {
    setDoctor(doctor?._id, !doctor?.isActive, "isActive").then((res) => {
      props.dispatch({ type: "GET_DOCTOR", payload: res.doctor });
      setChange(!change);
    });
  };
  return (
    <>
      <Row>
        <Col xs={2}>
          <Side />
        </Col>
        <Col xs={9} className="mt-3">
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
                <td>
                  <Form>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Control as="select" onChange={onCategoryHandler}>
                        <option disabled selected>
                          {doctor?.category}
                        </option>
                        <option>none</option>
                        <option>gold</option>
                        <option>silver</option>
                        <option>diamond</option>
                      </Form.Control>
                    </Form.Group>
                  </Form>
                </td>
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
                  <Switch
                    checked={doctor?.isActive}
                    onChange={onStatusHandler}
                  />
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
        </Col>
      </Row>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
    doctor: state.doctor,
  };
};
export default connect(mapStateToProps)(Doctor);
