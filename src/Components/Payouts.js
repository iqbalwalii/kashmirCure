import React, { useEffect, useState } from "react";
import { Table, Row, Col, Button, Form, Pagination } from "react-bootstrap";
import { getPayouts } from "../services/PayoutService";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "../utils/axios";
const Payouts = (props) => {
  const { register, handleSubmit } = useForm();
  const [message, setMessage] = useState("");

  const { payouts } = props;
  const router = useRouter();
  let [active, setActive] = useState(1);
  const pages = Math.ceil(payouts?.total_appointments / 10);
  let items = [];
  useEffect(() => {
    getPayouts().then((res) => {
      props.dispatch({
        type: "GET_PAYOUTS",
        payload: res.data.payouts,
      });
    });
  }, []);
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
  const onSubmit = (data) => {
    try {
      axios
        .post("/payouts", data)
        .then((res) => {
          setMessage(res.data.message);
        })
        .catch((err) => {
          setMessage(res.data.message);
        });
    } catch (error) {
      setMessage(error);
    }
  };
  return (
    <div className="appointments">
      <Row>
        <h4>Payouts</h4>{" "}
        {message && <h3 className="text-success bold">{message}</h3>}
      </Row>
      <Row>
        <Col xs={12} className="datePicker d-flex justify-content-between">
          <h4 className="mb-3 mr-5">Initiate Payouts</h4>

          <Form
            onSubmit={handleSubmit(onSubmit)}
            className="d-flex align-items-center"
          >
            <Form.Group
              controlId="startdate"
              className="d-flex align-items-center"
            >
              <Form.Label>From</Form.Label>
              <Form.Control
                type="date"
                name="startdate"
                {...register("start_date")}
                style={{ height: "40px" }}
                className="mx-2 "
                required
              />
            </Form.Group>
            <Form.Group
              controlId="enddate"
              className="d-flex align-items-center"
            >
              <Form.Label>To</Form.Label>
              <Form.Control
                type="date"
                name="enddate"
                {...register("end_date")}
                style={{ height: "40px" }}
                className="mx-2 "
                required
              />
            </Form.Group>
            <Form.Group controlId="submit">
              <Button variant="dark" type="submit">
                Submit
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <h4 className="my-3">Payouts History</h4>

      <Table striped hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Id</th>
            <th>Amount</th>
            <th>Mode</th>
            <th>Doctor</th>
            <th>A/C ID</th>
            <th>Fee</th>
            <th>Tax</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {payouts?.map((payout, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{payout?.id}</td>
                <td>
                  {payout?.amount / 100}&nbsp;
                  {payout?.currency}
                </td>
                <td>{payout?.mode}</td>
                <td>
                  {payout?.notes?.id && (
                    <Link href={`/doctor/${payout?.notes?.id}`} va>
                      <Button size="sm">View</Button>
                    </Link>
                  )}
                </td>
                <td>{payout?.fund_account_id}</td>
                <td>{payout?.fees}</td>
                <td>{payout?.tax}</td>
                <td>{payout?.status}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <Row>
        <Col md={{ span: 2, offset: 5 }}>
          {active > 1 && (
            <Button
              variant="dark"
              className="mx-2"
              onClick={() => {
                getPayouts(active - 1).then((res) => {
                  props.dispatch({
                    type: "GET_PAYOUTS",
                    payload: res.data.payouts,
                  });
                });
              }}
            >
              Prev
            </Button>
          )}
          {
            <Button
              variant="dark"
              onClick={() => {
                getPayouts(active + 1).then((res) => {
                  props.dispatch({
                    type: "GET_PAYOUTS",
                    payload: res.data.payouts,
                  });
                });
              }}
            >
              Next
            </Button>
          }
        </Col>
      </Row>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    payouts: state.payouts,
  };
};

export default connect(mapStateToProps)(Payouts);
