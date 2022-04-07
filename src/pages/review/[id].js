import React, { useEffect } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import Link from "next/link";
import { connect } from "react-redux";
import { getReview, updateReview } from "../../services/ReviewService";
import { useRouter } from "next/router";
import ReactStars from "react-stars";
const Appointment = (props) => {
  const router = useRouter();
  const id = router.query.id;
  const { review } = props;
  useEffect(() => {
    if (router.isReady) {
      getReview(id).then((res) => {
        props.dispatch({
          type: "GET_REVIEW",
          payload: res.data.review,
        });
      });
    }
  }, [router]);
  const statusUpdateHandler = (status) => {
    updateReview(id, !status).then((res) => {
      props.dispatch({
        type: "GET_REVIEW",
        payload: res.data.review,
      });
    });
  };
  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12} md={11}>
          <h1>
            <Link href="/dashboard">
              <a style={{ color: "blue", textDecoration: "none" }}>Kiadah</a>
            </Link>
          </h1>
        </Col>
        <Col xs={12} md={1}>
          <Button
            variant={review?.is_approved === true ? "danger" : "success"}
            onClick={() => statusUpdateHandler(review?.is_approved)}
          >
            {review?.is_approved === true ? "Reject" : "Accept"}
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
              <td>Doctor Name</td>
              <td>{review?.doctor_name}</td>
            </tr>
            <tr>
              <td>Patient Name</td>
              <td>{review?.patient_name}</td>
            </tr>
            <tr>
              <td>Approval</td>
              <td>{review?.is_approved === true ? "Approved" : "Rejected"}</td>
            </tr>
            <tr>
              <td>Description</td>
              <td>{review?.description}</td>
            </tr>
            <tr>
              <td>Rating</td>
              <td>
                <ReactStars
                  count={5}
                  size={24}
                  value={review?.stars}
                  color2={"#ffd700"}
                  edit={false}
                />
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
    review: state.review,
  };
};
export default connect(mapStateToProps)(Appointment);
