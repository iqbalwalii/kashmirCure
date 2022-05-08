import React, { useEffect } from "react";
import { Table, Row, Col, Button, Form, InputGroup } from "react-bootstrap";
import { getCoupons, createCoupon } from "../services/CouponService";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/router";
const Coupons = (props) => {
  const router = useRouter();
  useEffect(() => {
    getCoupons().then((res) => {
      props.dispatch({
        type: "GET_COUPONS",
        payload: res.coupons,
      });
    });
  }, [button]);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    data.isActive = true;
    createCoupon(data).then((res) => {
      props.dispatch({
        type: "SET_COUPON_BTN",
        payload: false,
      });
      props.dispatch({
        type: "SET_ACTIVE_TAB",
        payload: "dashboard",
      });

      router.push("/dashboard");
    });
  };

  const { coupons, button } = props;
  console.log(button);
  return (
    <div className="appointments">
      <Row>
        <Col>
          <h4>Coupons</h4>
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
      {button === false ? (
        <Table striped hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Percentage</th>
              <th>Limit</th>
              <th>User Limit</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {coupons?.map((coupon, index) => {
              return (
                <>
                  <Link href={`/coupon/${coupon._id}`} key={coupon._id}>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{coupon.name}</td>
                      <td>{coupon.percentage}</td>
                      <td>{coupon.limit}</td>
                      <td>{coupon.user_limit}</td>
                      <td>{coupon.isActive ? "Active" : " InActice"}</td>
                    </tr>
                  </Link>
                </>
              );
            })}
          </tbody>
        </Table>
      ) : (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="formBasicCode">
            <Form.Label>Code</Form.Label>
            <Form.Control
              type="text"
              placeholder="Code"
              {...register("name")}
            />
          </Form.Group>
          <InputGroup className="mt-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              &#37;
            </InputGroup.Text>
            <Form.Control
              type="number"
              min={0}
              max={100}
              placeholder="Percentage upto 100"
              {...register("percentage")}
            />
          </InputGroup>

          <Form.Group controlId="formBasicLimit" className="mt-3">
            <Form.Control
              type="number"
              placeholder="Coupon Limit"
              {...register("limit")}
            />
          </Form.Group>
          <Form.Group controlId="formBasicLimit" className="mt-3">
            <Form.Control
              type="number"
              placeholder="Limit Per User"
              {...register("user_limit")}
            />
          </Form.Group>
          <div className="d-grid mt-4">
            <Button type="submit" variant="dark">
              Create
            </Button>
          </div>
        </Form>
      )}
      {/* <Row>
        <Col md={{ span: 2, offset: 5 }}>
          <Pagination size="sm">{items}</Pagination>
        </Col>
      </Row> */}
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log("jall", state.couponBtn);
  return {
    coupons: state.coupons,
    button: state.couponBtn,
  };
};

export default connect(mapStateToProps)(Coupons);
