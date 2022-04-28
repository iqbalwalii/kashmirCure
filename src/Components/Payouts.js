import React, { useEffect } from "react";
import { Table, Row, Col, Button, Form, InputGroup } from "react-bootstrap";
import { getPayouts } from "../services/PayoutService";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/router";
const Payouts = (props) => {
  const router = useRouter();
  useEffect(() => {
    getPayouts().then((res) => {
      console.log("payouts", res);
      props.dispatch({
        type: "GET_PAYOUTS",
        payload: res.data.payouts,
      });
    });
  }, []);

  const { payouts } = props;
  return (
    <div className="appointments">
      <Row>
        <Col>
          <h4>Payouts</h4>
        </Col>
      </Row>
      <Table striped hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Amount</th>
            <th>Currency</th>
            <th>Mode</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {payouts?.map((payout, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{payout?.amount}</td>
                <td>{payout?.currency}</td>
                <td>{payout?.mode}</td>
                <td>{payout?.status}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      {/* <Row>
        <Col md={{ span: 2, offset: 5 }}>
          <Pagination size="sm">{items}</Pagination>
        </Col>
      </Row> */}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    payouts: state.payouts,
  };
};

export default connect(mapStateToProps)(Payouts);
