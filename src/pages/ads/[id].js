import React, { useEffect, useState } from "react";
import { Container, Row, Tab, Col, Table, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { deleteAd } from "../../services/AdService";
import { useRouter } from "next/router";
import Link from "next/link";
const Ad = (props) => {
  const router = useRouter();
  const id = router.query.id;
  const onDeleteHandler = () => {
    deleteAd(id).then((res) => {
      props.dispatch({
        type: "GET_ADS",
        payload: res.ad,
      });
    });
  };
  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12} md={11}>
          <h1>
            <Link href="/">
              <a style={{ color: "blue", textDecoration: "none" }}>Kiadah</a>
            </Link>
          </h1>
        </Col>
        <Col xs={12} md={1}>
          <Button variant="danger" onClick={onDeleteHandler}>
            Delete
          </Button>
        </Col>
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
              <td>name</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>gender</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>phone</td>
            </tr>
            <tr>
              <td>Category</td>
              <td>category</td>
            </tr>
            <tr>
              <td>Starting Date</td>
              <td>createdAt</td>
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
    ad: state.ad,
  };
};
export default connect(mapStateToProps)(Ad);
