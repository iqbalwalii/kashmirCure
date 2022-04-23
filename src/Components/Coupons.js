import React, { useEffect } from "react";
import { Table, Row, Col } from "react-bootstrap";
import { getCoupons } from "../services/CouponService";
import { connect } from "react-redux";
import Link from "next/link";
const Coupons = (props) => {
  useEffect(() => {
    getCoupons().then((res) => {
      props.dispatch({
        type: "GET_COUPONS",
        payload: res.coupons,
      });
    });
  }, []);
  const { coupons } = props;
  console.log(coupons);
  return (
    <div className="appointments">
      <h4>Coupons</h4>
      <Table striped hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Percentage</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {coupons?.map((doctor, index) => {
            return (
              <>
                <Link href={`/doctor/${doctor._id}`} key={doctor._id}>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{doctor.name}</td>
                    <td>{doctor.percentage}</td>
                    <td>{doctor.isActive ? "Active" : " InActice"}</td>
                  </tr>
                </Link>
              </>
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
    coupons: state.coupons,
  };
};

export default connect(mapStateToProps)(Coupons);
