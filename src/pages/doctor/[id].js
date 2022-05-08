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
import {
  getDoctor,
  setDoctor,
  deleteDoctor,
} from "../../services/DoctorService";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import Side from "../../Components/Navigator";
import Image from "next/image";
import Link from "next/link";
import Switch from "react-switch";
import axios from "../../utils/axios";
// import UpdateDoctor from "../../Components/UpdateDoctor";
const Doctor = (props) => {
  const { doctor } = props;
  const router = useRouter();
  const id = router.query.id;
  const [change, setChange] = useState(false);
  const [payouts, setPayouts] = useState([]);
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
  const onCategoryHandler = (e) => {
    setDoctor(doctor?._id, e.target.value, "category").then((res) => {
      props.dispatch({ type: "GET_DOCTOR", payload: res.doctor });
      setChange(!change);
    });
  };
  const onDeleteHandler = (id) => {
    console.log(id);
    deleteDoctor(id).then((res) => {
      console.log(res);
      router.push("/dashboard");
    });
  };
  useEffect(() => {
    try {
      axios
        .get(`/doctors/payouts/${id}`, {
          method: "GET",
        })
        .then((res) => {
          console.log("ressss", res);
          setPayouts(res?.data?.data?.payouts);
        })
        .catch((err) => console.log("ressss catch", err));
    } catch (error) {}
  }, []);
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
                <td>Fees</td>
                <td>{doctor?.consultation_fee}</td>
                <td>{doctor?.consultation_fee}</td>
                <td>{doctor?.consultation_fee}</td>
                <td>{doctor?.consultation_fee}</td>
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
              <tr>
                <td>Action</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => onDeleteHandler(doctor?._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
          <h2 className="mt-4 text-center">Payouts</h2>
          <div className="d-flex flex-wrap">
            {payouts?.map((pay, idx) => {
              return (
                <div className="border border-rounded p-3 m-3" key={idx}>
                  <p>
                    <span className="text-primary">payout id:</span>
                    &nbsp; &nbsp; &nbsp;
                    {pay.id}
                  </p>
                  <p>
                    <span className="text-primary">fund account id:</span>
                    &nbsp; &nbsp; &nbsp; {pay.fund_account_id}
                  </p>
                  <p>
                    <span className="text-primary">payout amount:</span>
                    &nbsp; &nbsp; &nbsp;
                    {pay.amount / 100}&nbsp;{pay.currency}
                  </p>
                  <p>
                    <span className="text-primary">payout charges :</span>
                    &nbsp; &nbsp; &nbsp;
                    {parseInt(pay.fees) + parseInt(pay.tax)}
                    {" INR"}
                    &nbsp;&nbsp;&nbsp;
                    {pay.tax} tax&nbsp;
                    {pay.fees} fee &nbsp;
                  </p>
                  <p>
                    <span className="text-primary">payout mode:</span>
                    &nbsp; &nbsp; &nbsp;
                    {pay.mode}
                  </p>
                  <p>
                    <span className="text-primary">payout status:</span>
                    &nbsp; &nbsp; &nbsp;
                    {pay.status}
                  </p>
                  <p>
                    <span className="text-primary">payout reference id:</span>
                    &nbsp; &nbsp; &nbsp;
                    {pay.reference_id}
                  </p>
                  {pay.failure_reason && (
                    <p>
                      <span className="text-primary">
                        payout failure reason :
                      </span>
                      &nbsp; &nbsp; &nbsp;
                      {pay.failure_reason}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
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
