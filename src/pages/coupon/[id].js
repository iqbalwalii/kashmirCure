import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  getCoupon,
  deleteCoupon,
  updateCoupon,
} from "../../services/CouponService";
import { Container, Table, Row, Col, Button, Form } from "react-bootstrap";
import Side from "../../Components/Navigator";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
const Coupon = (props) => {
  const { coupon, button } = props;
  const router = useRouter();
  const id = router.query.id;
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    updateCoupon(id, data).then((res) => {
      router.push("/dashboard");
      props.dispatch({
        type: "SET_COUPON_BTN",
        payload: false,
      });
    });
  };
  useEffect(() => {
    if (router.isReady) {
      getCoupon(id).then((res) => {
        props.dispatch({
          type: "GET_COUPON",
          payload: res.coupon,
        });
      });
    }
  }, [coupon]);
  return (
    <>
      <Row>
        <Col xs={2}>
          <Side />
        </Col>
        <Col xs={9} className="mt-3">
          <Row className="d-flex justify-content-between w-100">
            <Col>
              <h3>Coupon Details</h3>
            </Col>
            <Col className="d-flex justify-content-end">
              <Button
                variant="danger"
                className="mr-3 p-2"
                onClick={() => {
                  deleteCoupon(id).then((res) => {
                    router.push("/dashboard");
                  });
                }}
              >
                Delete
              </Button>
              <Button
                variant="success"
                className="mr-3 p-2"
                onClick={() =>
                  props.dispatch({
                    type: "SET_COUPON_BTN",
                    payload: !button,
                  })
                }
              >
                Update
              </Button>
            </Col>
          </Row>
          {button === false ? (
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
                  <td>{coupon?.name}</td>
                </tr>
                <tr>
                  <td>Percentage</td>
                  <td>{coupon?.percentage}</td>
                </tr>
                <tr>
                  <td>Total Limit</td>
                  <td>{coupon?.limit}</td>
                </tr>
                <tr>
                  <td>Limit Per User</td>
                  <td>{coupon?.user_limit}</td>
                </tr>
                <tr>
                  <td>Status</td>
                  <td>{coupon?.isActive ? "Active" : "InActive"}</td>
                </tr>
              </tbody>
            </Table>
          ) : (
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group controlId="formBasicCode">
                <Form.Label>Code</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={coupon?.name}
                  {...register("name")}
                />
              </Form.Group>
              <Form.Group controlId="formBasicNumber">
                <Form.Label>Percentage</Form.Label>
                <Form.Control
                  type="number"
                  min={0}
                  max={100}
                  placeholder={coupon?.percentage}
                  {...register("percentage")}
                />
              </Form.Group>
              <Form.Group controlId="formBasicNumber">
                <Form.Label>Total Limit</Form.Label>
                <Form.Control
                  type="number"
                  placeholder={coupon?.limit}
                  {...register("limit")}
                />
              </Form.Group>
              <Form.Group controlId="formBasicNumber">
                <Form.Label>Limit Per User</Form.Label>
                <Form.Control
                  type="number"
                  placeholder={coupon?.user_limit}
                  {...register("user_limit")}
                />
              </Form.Group>
              <Form.Group controlId="formBasicActive">
                <Form.Label>Status</Form.Label>
                <Form.Control as="select" {...register("isActive")}>
                  <option selected disabled>
                    Status
                  </option>
                  <option value={true}>Active</option>
                  <option value={false}>InActive</option>
                </Form.Control>
              </Form.Group>
              <div className="d-grid mt-4">
                <Button type="submit" variant="dark">
                  Update
                </Button>
              </div>
            </Form>
          )}
        </Col>
      </Row>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    ...state,
    coupon: state.coupon,
    button: state.couponBtn,
  };
};
export default connect(mapStateToProps)(Coupon);
