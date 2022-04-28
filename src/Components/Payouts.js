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
      // props.dispatch({
      //   type: "GET_PAYOUTS",
      //   payload: res.payouts,
      // });
    });
  }, []);

  const { payouts } = props;
  return (
    <div className="appointments">
      <Row>
        <Col>
          <h4>Payouts</h4>
        </Col>
        <Col xs={2}>
          <Button
            variant="dark"
            onClick={() =>
              props.dispatch({
                type: "SET_COUPON_BTN",
                payload: !button,
              })
            }
          >
            Create
          </Button>
        </Col>
      </Row>
      <Table striped hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Percentage</th>
            <th>Status</th>
          </tr>
        </thead>
        {/* <tbody>
            {coupons?.map((coupon, index) => {
              return (
                <>
                  <Link href={`/coupon/${coupon._id}`} key={coupon._id}>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{coupon.name}</td>
                      <td>{coupon.percentage}</td>
                      <td>{coupon.isActive ? "Active" : " InActice"}</td>
                    </tr>
                  </Link>
                </>
              );
            })}
          </tbody> */}
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
